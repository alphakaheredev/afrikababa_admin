import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ForgotPasswordData } from "@/redux/api/auth/auth.type";
import { useForgotPasswordMutation } from "@/redux/api/auth/auth.api";
import { colors } from "@/constants/Colors";
import { QueryError } from "@/lib/type";
import { fr } from "yup-locales";
import { setLocale } from "yup";
import { authPaths } from "@/routes/paths";
setLocale(fr);

const forgotPasswordFormSchema = yup.object().shape({
	email: yup.string().email().required().label("Email"),
});

export const useForgotPasswordForm = () => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
		reset,
	} = useForm<ForgotPasswordData>({
		resolver: yupResolver(forgotPasswordFormSchema),
	});

	const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
	const navigate = useNavigate();

	const onSubmit = async (data: ForgotPasswordData) => {
		const res = await forgotPassword(data);

		if ("data" in res) {
			console.log(res);
			Swal.fire({
				icon: "success",
				iconColor: colors.primary,
				text: "Email envoyé avec succès !",
				showConfirmButton: false,
				timer: 2000,
			}).then(() => {
				reset();
				navigate(`/${authPaths.resetPassword}`);
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
