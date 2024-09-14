import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { RegisterFormData } from "@/redux/api/auth/auth.type"; // Assurez-vous d'ajouter ce type
import { useRegisterUserMutation } from "@/redux/api/auth/auth.api"; // Mutation d'inscription
import { useAppDispatch } from "@/redux/hooks";
import { colors } from "@/constants/Colors";
import { onSetUserToken } from "@/redux/features/user.slice";
import { QueryError } from "@/lib/type";
import { ROLE, User } from "@/redux/api/user/user.type";
import { fr } from "yup-locales";
import { setLocale } from "yup";
import { toast } from "react-toastify";
setLocale(fr);

const registerFormSchema = yup.object().shape({
	firstname: yup.string().required().label("Prénom"),
	lastname: yup.string().required().label("Nom"),
	email: yup.string().email().required().label("Email"),
	phone_number: yup.string().required().label("Numéro de téléphone"),
	password: yup.string().min(6).required().label("Mot de passe"),
	password_confirmation: yup
		.string()
		.oneOf(
			[yup.ref("password")],
			"Les mots de passe ne correspondent pas"
		)
		.required()
		.label("Confirmation du mot de passe"),
});

export const useRegisterForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<RegisterFormData>({
		resolver: yupResolver(registerFormSchema),
		defaultValues: { role: ROLE.supplier },
	});

	const [registerUser, { isLoading }] = useRegisterUserMutation();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const onSubmit = async (data: RegisterFormData) => {
		console.log(data);

		const res = await registerUser(data);

		if ("data" in res) {
			console.log(res);
			Swal.fire({
				icon: "success",
				iconColor: colors.primary,
				text: "Inscription réussie avec succès !",
				showConfirmButton: false,
				timer: 2000,
			}).then(() => {
				reset();
				navigate("/");
				if (res.data) {
					dispatch(
						onSetUserToken({
							user: res.data.user as User,
							token: res.data.access_token,
						})
					);
				}
			});
		} else if ("error" in res) {
			const error = res.error as QueryError;
			const errorMessage = error.data.error;
			console.log(res.error);
			if (errorMessage === "email already exists") {
				const message = "Cet email est déjà utilisé";
				return toast.error(message);
			}
			toast.error("Une erreur inconnue est survenue");
		}
	};

	return {
		register,
		errors,
		onSubmit: handleSubmit(onSubmit),
		isLoading,
	};
};
