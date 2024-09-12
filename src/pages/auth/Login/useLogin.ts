import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { LoginFormData } from "@/redux/api/auth/auth.type";
import { useLoginUserMutation } from "@/redux/api/auth/auth.api";
import { useAppDispatch } from "@/redux/hooks";
import { colors } from "@/constants/Colors";
import { onSetUserToken } from "@/redux/features/user.slice";
import { QueryError } from "@/lib/type";
import { User } from "@/redux/api/user/user.type";
import { fr } from "yup-locales";
import { setLocale } from "yup";
setLocale(fr);

const loginFormSchema = yup.object().shape({
	email: yup.string().email().required().label("Email"),
	password: yup.string().required().label("Mot de passe"),
});

export const useLoginForm = () => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
		reset,
	} = useForm<LoginFormData>({
		resolver: yupResolver(loginFormSchema),
	});

	const [login, { isLoading }] = useLoginUserMutation();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const onSubmit = async (data: LoginFormData) => {
		const res = await login(data);

		if ("data" in res) {
			console.log(res);
			Swal.fire({
				icon: "success",
				iconColor: colors.primary,
				text: "Connexion reussie avec succès !",
				showConfirmButton: false,
				timer: 2000,
			}).then(() => {
				reset();
				navigate("/admin");
				if (res.data) {
					dispatch(
						onSetUserToken({
							user: res.data.user as User,
							token: res.data.token,
						})
					);
				}
			});
		} else if ("error" in res) {
			const error = res.error as QueryError;
			const errorMessage = error.data.error;
			console.log(res.error);
			if (errorMessage === "email or password is incorrect") {
				const message = "Vos identifiants sont incorrects";
				return setError("email", { message: message });
			}
			setError("email", {
				message: "Une erreur inconnue a survenue",
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