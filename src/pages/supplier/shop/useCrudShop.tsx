import { useAppSelector } from "@/redux/hooks";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { fr } from "yup-locales";
import { ShopFormData } from "@/redux/api/shop/shop.type";
import { useEffect, useState } from "react";
import { cleannerError } from "@/lib/utils";

yup.setLocale(fr);

const schema = yup.object().shape({
	company_name: yup.string().required().label("Nom de la boutique"),
	sales_manager_name: yup.string().required().label("Nom du vendeur"),
	company_registration: yup
		.string()
		.required()
		.label("Numéro d'enregistrement"),
	company_address: yup.string().required().label("Adresse de la boutique"),
	phone_number: yup.string().required().label("Numéro de contact"),
	email_address: yup.string().email().required().label("Adresse e-mail"),
	company_website: yup.string().required().label("Site web de la boutique"),
	logo_url: yup.string().required().label("Logo de la boutique"),
	company_description: yup
		.string()
		.required()
		.label("Description de la boutique"),
	company_status: yup.string().required().label("Statut de la boutique"),
	business_license: yup.string().required().label("Permis d'exploitation"),
});

export const useCrudShop = () => {
	const { user } = useAppSelector((state) => state.user);
	const [phone, setPhone] = useState<string>("+221 33 000 00 01 02");

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		clearErrors,
	} = useForm<ShopFormData>({
		resolver: yupResolver(schema),
	});

	useEffect(() => {
		cleannerError(errors, clearErrors);
	}, []);

	const handlePhoneChange = (value: string) => {
		setPhone(value);
		setValue("phone_number", value);
	};

	const onSubmit = (data: ShopFormData) => {
		console.log(data);
	};

	return {
		register,
		onSubmit: handleSubmit(onSubmit),
		errors,
		user,
		phone,
		handlePhoneChange,
	};
};
