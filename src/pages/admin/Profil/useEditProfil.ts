import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { fr } from "yup-locales";
import { setLocale } from "yup";
import { QueryError } from "@/lib/type";
import { cleannerError } from "@/lib/utils";
import { ROLE, User, UserFormData } from "@/redux/api/user/user.type";
import { useCreateOrUpdateUserMutation } from "@/redux/api/user/user.api";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { onSetUser } from "@/redux/features/user.slice";

setLocale(fr);

const profileValidationSchema = yup.object().shape({
	firstname: yup.string().required().label("Prénoms"),
	lastname: yup.string().required().label("Nom"),
	phone_number: yup.string().required().label("Téléphone"),
	email: yup
		.string()
		.email("Ce champ doit être une adresse e-mail valide")
		.required()
		.label("Email"),
});

export const useEditProfil = () => {
	const { user } = useAppSelector((state) => state.user);
	console.log(user);
	const dispatch = useAppDispatch();
	const [avatar, setAvatar] = useState<string | null>(null);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		clearErrors,
		setValue,
	} = useForm<UserFormData>({
		// @ts-ignore
		resolver: yupResolver(profileValidationSchema),
		defaultValues: {
			firstname: user?.firstname ?? "",
			lastname: user?.lastname ?? "",
			phone_number: user?.phone_number ?? "",
			email: user?.email ?? "",
		},
	});

	const [updateUser, { isLoading }] = useCreateOrUpdateUserMutation();

	useEffect(() => {
		if (errors) {
			console.log(errors);
			cleannerError(errors, clearErrors);
		}
	}, [errors, clearErrors]);

	useEffect(() => {
		if (user) {
			reset({
				firstname: user.firstname,
				lastname: user.lastname,
				phone_number: user.phone_number,
				email: user.email,
				adresse: user.adresse,
			});
		}
	}, [user]);

	const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setAvatar(URL.createObjectURL(file));
			setValue("avatar", file);
		}
	};

	const onSubmit = async (data: UserFormData) => {
		const fd = new FormData();
		fd.append("firstname", data.firstname);
		fd.append("lastname", data.lastname);
		fd.append("phone_number", data.phone_number);
		fd.append("email", data.email);
		data.adresse && fd.append("adresse", data.adresse);
		data.avatar && fd.append("avatar", data.avatar);

		const res = await updateUser({
			id: user?.id,
			data: fd,
			role: user?.role as ROLE,
		});

		if ("data" in res) {
			// @ts-ignore
			dispatch(onSetUser(res.data.data as User));
			toast.success("Profil mis à jour avec succès");
		} else if ("error" in res) {
			const error = res.error as QueryError;
			let errorMessage = error?.data?.error;
			if (
				errorMessage?.includes(
					"validation.user.error.email.exists"
				)
			) {
				errorMessage =
					"Un utilisateur avec cet email existe déjà !";
			}
			if (
				errorMessage?.includes(
					"validation.user.error.phone.exists"
				)
			) {
				errorMessage =
					"Un utilisateur avec ce numéro existe déjà !";
			}
			const message =
				errorMessage ?? "Une erreur inconnue est survenue";
			toast.error(message);
		}
	};

	return {
		register,
		errors,
		onSubmit: handleSubmit(onSubmit),
		isLoading,
		user,
		handleAvatarChange,
		avatar,
	};
};
