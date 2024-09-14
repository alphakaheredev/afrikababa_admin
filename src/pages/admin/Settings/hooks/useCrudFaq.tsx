import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { fr } from "yup-locales";
import { setLocale } from "yup";
import { QueryError } from "@/lib/type";
import { cleannerError } from "@/lib/utils";
import { toast } from "react-toastify";
import { Faq, FaqFormData } from "@/redux/api/faq/faq.type";
import { useCreateOrUpdateFaqMutation } from "@/redux/api/faq/faq.api";

setLocale(fr);

export const faqValidationSchema = yup.object().shape({
	question: yup.string().required().label("Question"),
	answer: yup.string().required().label("Réponse"),
});

export const useCrudFaq = (closeModal: () => void, item?: Faq) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		clearErrors,
	} = useForm<FaqFormData>({
		resolver: yupResolver(faqValidationSchema),
		defaultValues: {
			question: item ? item.question : "",
			answer: item ? item.answer : "",
		},
	});

	const [createOrUpdateFaq, { isLoading }] = useCreateOrUpdateFaqMutation();

	useEffect(() => {
		if (errors) {
			cleannerError(errors, clearErrors);
		}
	}, [errors, clearErrors]);

	const onSubmit = async (data: FaqFormData) => {
		const res = await createOrUpdateFaq({
			id: item?.id,
			data: data,
		});

		if ("data" in res) {
			closeModal();
			toast.success(
				`FAQ ${item?.id ? "modifiée" : "ajoutée"} avec succès`
			);
			reset();
		} else if ("error" in res) {
			const error = res.error as QueryError;
			let errorMessage = error?.data?.error;
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
