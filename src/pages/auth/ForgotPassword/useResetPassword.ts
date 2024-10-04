import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ResetPasswordData } from "@/redux/api/auth/auth.type";
import { useResetPasswordMutation } from "@/redux/api/auth/auth.api";
import { colors } from "@/constants/Colors";
import { QueryError } from "@/lib/type";
import { fr } from "yup-locales";
import { setLocale } from "yup";
setLocale(fr);

const resetPasswordFormSchema = yup.object().shape({
	email: yup.string().email().required().label("Email"),
	password: yup.string().required().label("Mot de passe"),
	password_confirmation: yup
		.string()
		.oneOf(
			[yup.ref("password"), undefined],
			"Les mots de passe ne correspondent pas"
		)
		.required()
		.label("Confirmation du mot de passe"),
});

export const useResetPasswordForm = () => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
		reset,
	} = useForm<ResetPasswordData>({
		resolver: yupResolver(resetPasswordFormSchema),
	});

	const [resetPassword, { isLoading }] = useResetPasswordMutation();
	const navigate = useNavigate();

	const onSubmit = async (data: ResetPasswordData) => {
		const res = await resetPassword(data);

		if ("data" in res) {
			console.log(res);
			Swal.fire({
				icon: "success",
				iconColor: colors.primary,
				text: "Mot de passe réinitialisé avec succès !",
				showConfirmButton: false,
				timer: 2000,
			}).then(() => {
				reset();
				navigate("/");
			});
		} else if ("error" in res) {
			const error = res.error as QueryError;
			const errorMessage = error.data.error;
			setError("email", {
				message:
					errorMessage || "Une erreur inconnue a survenue",
			});
		}
	};

	return {
		register,
		errors,
		onSubmit: handleSubmit(onSubmit),
		isLoading,
	};
};
