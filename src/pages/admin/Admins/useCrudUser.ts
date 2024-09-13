import { useEffect } from "react";
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

setLocale(fr);

export const userValidationschema = yup.object().shape({
	firstname: yup.string().required().label("Prénoms"),
	lastname: yup.string().required().label("Nom"),
	phone_number: yup.string().required().label("Téléphone"),
	email: yup
		.string()
		.email("Ce champ doit être une adresse e-mail valide")
		.required()
		.label("Email"),
	role: yup
		.string()
		.oneOf(
			Object.values(ROLE),
			"Le rôle doit être l'un des suivants : ADMIN, SUPPLIER, CUSTOMER"
		)
		.required("Le rôle est requis"),
});

export const useCrudUser = (closeModal: () => void, item?: User) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		clearErrors,
		// setValue,
	} = useForm<UserFormData>({
		resolver: yupResolver(userValidationschema),
		defaultValues: {
			role: item ? item?.role : ROLE.admin,
		},
	});

	const [createorupdate, { isLoading }] = useCreateOrUpdateUserMutation();

	useEffect(() => {
		if (errors) {
			console.log(errors);
			cleannerError(errors, clearErrors);
		}
	}, [errors, clearErrors]);

	const onSubmit = async (data: UserFormData) => {
		const res = await createorupdate({
			id: item?.id,
			// @ts-ignore
			data: data,
		});

		if ("data" in res) {
			closeModal();
			toast.success(
				`Utilisateur ${
					item?.id ? "modifié" : "ajouté"
				}  avec succès`
			);
			reset();
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
	};
};
