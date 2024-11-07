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
		company_name: yup.string().required().label("Nom de la boutique"),
		sales_manager_name: yup.string().label("Nom du vendeur"),
		company_registration: yup
			.string()
			.required()
			.label("Numéro d'enregistrement"),
		address: yup.string().required().label("Adresse de la boutique"),
		phone_number: yup.string().required().label("Numéro de contact"),
		email_address: yup
			.string()
			.email()
			.required()
			.label("Adresse e-mail"),
		company_website: yup.string().label("Site web de la boutique"),
		logo: yup.mixed().when("isEdit", {
			is: true,
			then: () => yup.mixed().nullable(),
			otherwise: () =>
				yup.mixed().required().label("Logo de la boutique"),
		}),
		banner: yup.mixed().when("isEdit", {
			is: true,
			then: () => yup.mixed().nullable(),
			otherwise: () =>
				yup.mixed().required().label("Image de couverture"),
		}),
		description: yup
			.string()
			.required()
			.label("Description de la boutique"),
		business_license: yup
			.mixed()
			.label("Permis d'exploitation")
			.nullable(),
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
		console.log(errors);
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
			console.log(res.data);
			const shop = res.data?.data as Shop;
			dispatch(onSetShop(shop));
			if (item) {
				toast.success(
					"Votre boutique a été modifiée avec succès"
				);
				navigate(`/fournisseur/${supplierPaths.dashboard}`);
			} else {
				Swal.fire({
					title: "Votre boutique a été créée avec succès",
					text: "Vous pouvez désormais commencer à ajouter vos produits",
					icon: "success",
					confirmButtonText: "Ajouter un produit",
					confirmButtonColor: colors.primary,
					cancelButtonText: "Plus tard",
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
			toast.error("Une erreur est survenue");
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
	// const validationSchema = yup.object().shape({
	// 	bank_transfer_details: yup
	// 		.string()
	// 		.required()
	// 		.label("IBAN et N° de compte bancaire"),
	// 	paypal_details: yup.string().required().label("Détails de PayPal"),
	// });
	const { shop } = useAppSelector((state) => state.user);

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		clearErrors,
	} = useForm<ShopFormData>();

	const [createShop, { isLoading }] = useCreateOrUpdateShopMutation();
	const dispatch = useAppDispatch();

	useEffect(() => {
		console.log(errors);
		cleannerError(errors, clearErrors);
	}, [errors]);

	useEffect(() => {
		if (shop) {
			setValue("bank_transfer_details", shop.bank_transfer_details);
			setValue("paypal_details", shop.paypal_details);
			setValue("western_union_details", shop.western_union_details);
		}
	}, [shop]);

	const onSubmit = async (data: ShopFormData) => {
		console.log(data);
		if (
			!data.bank_transfer_details ||
			!data.paypal_details ||
			!data?.western_union_details
		) {
			return toast.error(
				"Veuillez renseigner au moins un moyen de paiement"
			);
		}

		const res = await createShop({
			id: shop?.id as number,
			data: data,
		});

		if ("data" in res) {
			const shop = res.data?.data as Shop;
			dispatch(onSetShop(shop));
			toast.success("Informations mises à jour avec succès");
		} else {
			toast.error("Une erreur est survenue");
		}
	};

	return {
		register,
		onSubmit: handleSubmit(onSubmit),
		errors,
		isLoading,
		shop,
	};
};