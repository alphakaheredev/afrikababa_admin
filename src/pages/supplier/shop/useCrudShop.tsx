import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { fr } from "yup-locales";
import { Shop, ShopFormData } from "@/redux/api/shop/shop.type";
import { useEffect, useState } from "react";
import { appendDataToFormData, cleannerError, getUserName } from "@/lib/utils";
import { useCreateOrUpdateShopMutation } from "@/redux/api/shop/shop.api";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { supplierPaths } from "@/routes/paths";
import { colors } from "@/constants/Colors";
import { onSetShop } from "@/redux/features/user.slice";

yup.setLocale(fr);

export const useCrudShop = (item?: Shop) => {
	const schema = yup.object().shape({
		isEdit: yup.boolean().default(!!item),
		company_name: yup.string().required().label("Shop name"),
		sales_manager_name: yup.string().label("Sales manager name"),
		company_registration: yup
			.string()
			.required()
			.label("Registration number"),
		address: yup.string().required().label("Shop address"),
		phone_number: yup.string().required().label("Contact number"),
		email_address: yup
			.string()
			.email()
			.required()
			.label("Email address"),
		company_website: yup.string().label("Shop website"),
		logo: yup.mixed().when("isEdit", {
			is: true,
			then: () => yup.mixed().nullable(),
			otherwise: () => yup.mixed().required().label("Shop logo"),
		}),
		banner: yup.mixed().when("isEdit", {
			is: true,
			then: () => yup.mixed().nullable(),
			otherwise: () => yup.mixed().required().label("Cover image"),
		}),
		description: yup.string().required().label("Shop description"),
		business_license: yup.mixed().label("Business license").nullable(),
	});
	const { user } = useAppSelector((state) => state.user);
	const [phone, setPhone] = useState<string>("");
	const [logo, setLogo] = useState<File | null>(null);
	const [cover, setCover] = useState<File | null>(null);
	const [businessLicense, setBusinessLicense] = useState<File | null>(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		clearErrors,
		reset,
	} = useForm<ShopFormData>({
		// @ts-ignore
		resolver: yupResolver(schema),
	});

	const [createShop, { isLoading }] = useCreateOrUpdateShopMutation();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	useEffect(() => {
		cleannerError(errors, clearErrors);
	}, [errors]);

	useEffect(() => {
		if (item) {
			const data = item as unknown as ShopFormData;
			reset(data);
			setPhone(item.phone_number);
		}
	}, [item]);

	const handlePhoneChange = (value: string) => {
		setPhone(value);
		setValue("phone_number", value);
	};

	const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let file = e.target.files?.[0];
		if (file) {
			setLogo(file);
			setValue("logo", file);
		}
	};

	const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let file = e.target.files?.[0];
		if (file) {
			setCover(file);
			setValue("banner", file); 
		}
	};

	const handleBusinessLicenseChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		let file = e.target.files?.[0];
		if (file) {
			setBusinessLicense(file);
			setValue("business_license", file);
		}
	};

	const onSubmit = async (data: ShopFormData) => {
		if (user) {
			data.user_id = user.id;
			data.sales_manager_name = getUserName(user);
		}
		const formData = new FormData();
		appendDataToFormData(formData, data);

		const res = await createShop({
			id: item?.id as number,
			data: formData,
		});

		if ("data" in res) {
			const shop = res.data?.data as Shop;
			dispatch(onSetShop(shop));
			if (item) {
				toast.success(
					"Your shop has been updated successfully"
				);
				navigate(`/fournisseur/${supplierPaths.dashboard}`);
			} else {
				Swal.fire({
					title: "Your shop has been created successfully",
					text: "You can now start adding your products",
					icon: "success",
					confirmButtonText: "Add a product",
					confirmButtonColor: colors.primary,
					cancelButtonText: "Later",
				}).then((result) => {
					if (result.isConfirmed) {
						navigate(
							`/fournisseur/${supplierPaths.addProduct}`
						);
					} else {
						navigate(
							`/fournisseur/${supplierPaths.dashboard}`
						);
					}
				});
			}
		} else {
			toast.error("An unknown error has occurred");
		}
	};

	return {
		register,
		onSubmit: handleSubmit(onSubmit),
		errors,
		user,
		phone,
		handlePhoneChange,
		handleLogoChange,
		handleCoverChange,
		logo,
		cover,
		isLoading,
		handleBusinessLicenseChange,
		businessLicense,
	};
};

export const useEditPaymentInfos = () => {
	const [type, setType] = useState<"bank" | "western_union" | "paypal">(
		"bank"
	);
	const schema = yup.object().shape({
		type: yup.string().required().default(type),
		paypal_details: yup.string().when("type", {
			is: "paypal",
			then: () =>
				yup.string().required().label("Détails de PayPal"),
			otherwise: () => yup.string().notRequired(),
		}),

		// bank
		bank_account_number: yup.string().when("type", {
			is: "bank",
			then: () =>
				yup
					.string()
					.required()
					.label("IBAN et N° de compte bancaire"),
			otherwise: () => yup.string().notRequired(),
		}),
		bank_name: yup.string().when("type", {
			is: "bank",
			then: () => yup.string().required().label("Nom de la banque"),
			otherwise: () => yup.string().notRequired(),
		}),
		bank_swift_code: yup.string().when("type", {
			is: "bank",
			then: () => yup.string().required().label("Code SWIFT"),
			otherwise: () => yup.string().notRequired(),
		}),
		bank_code: yup.string().when("type", {
			is: "bank",
			then: () =>
				yup.string().required().label("Code de la banque"),
			otherwise: () => yup.string().notRequired(),
		}),
		bank_address: yup.string().when("type", {
			is: "bank",
			then: () =>
				yup.string().required().label("Adresse de la banque"),
			otherwise: () => yup.string().notRequired(),
		}),
		// western union
		western_union_firstname: yup.string().when("type", {
			is: "western_union",
			then: () => yup.string().required().label("Prénom"),
			otherwise: () => yup.string().notRequired(),
		}),
		western_union_lastname: yup.string().when("type", {
			is: "western_union",
			then: () => yup.string().required().label("Nom"),
			otherwise: () => yup.string().notRequired(),
		}),
		western_union_phone_number: yup.string().when("type", {
			is: "western_union",
			then: () =>
				yup.string().required().label("Numéro de contact"),
			otherwise: () => yup.string().notRequired(),
		}),
		western_union_city: yup.string().when("type", {
			is: "western_union",
			then: () => yup.string().required().label("Ville"),
			otherwise: () => yup.string().notRequired(),
		}),
	});
	const { shop } = useAppSelector((state) => state.user);

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		clearErrors,
	} = useForm<ShopFormData>({
		// @ts-ignore
		resolver: yupResolver(schema),
	});

	const [createShop, { isLoading }] = useCreateOrUpdateShopMutation();
	const dispatch = useAppDispatch();

	useEffect(() => {
		cleannerError(errors, clearErrors);
	}, [errors]);

	useEffect(() => {
		if (shop) {
			setValue("paypal_details", shop.paypal_details);
			// bank
			setValue("bank_account_number", shop.bank_account_number);
			setValue("bank_name", shop.bank_name);
			setValue("bank_swift_code", shop.bank_swift_code);
			setValue("bank_code", shop.bank_code);
			setValue("bank_address", shop.bank_address);
			setValue("address", shop.address);

			// western union
			setValue(
				"western_union_firstname",
				shop.western_union_firstname
			);
			setValue(
				"western_union_lastname",
				shop.western_union_lastname
			);
			setValue(
				"western_union_phone_number",
				shop.western_union_phone_number
			);
			setValue("western_union_city", shop.western_union_city);
		}
	}, [shop]);

	const handleTypeChange = (value: "bank" | "western_union" | "paypal") => {
		setType(value);
	};

	const onSubmit = async (data: ShopFormData) => {
		const res = await createShop({
			id: shop?.id as number,
			data: data,
		});

		if ("data" in res) {
			const shop = res.data?.data as Shop;
			dispatch(onSetShop(shop));
			toast.success("Informations updated successfully");
		} else {
			toast.error("An unknown error has occurred");
		}
	};

	return {
		register,
		onSubmit: handleSubmit(onSubmit),
		errors,
		isLoading,
		shop,
		handleTypeChange,
	};
};