import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { fr } from "yup-locales";
import { setLocale } from "yup";
import { QueryError } from "@/lib/type";
import { cleannerError } from "@/lib/utils";
import { toast } from "react-toastify";
import { WindrawRequestFormData } from "@/redux/api/windraw/windraw.type";
import { useCreateOrUpdateWindrawRequestMutation } from "@/redux/api/windraw/windraw.api";
import { useAppSelector } from "@/redux/hooks";

setLocale(fr);

export const schema = yup.object().shape({
	amount: yup.string().required().label("Montant"),
	payment_methode: yup.string().required().label("Methode de paiement"),
});

export const useCrudWindraw = (closeModal: () => void) => {
	const { shop } = useAppSelector((s) => s?.user);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		clearErrors,
	} = useForm<WindrawRequestFormData>({
		// @ts-ignore
		resolver: yupResolver(schema),
	});

	const [createOrUpdateFaq, { isLoading }] =
		useCreateOrUpdateWindrawRequestMutation();

	useEffect(() => {
		if (errors) {
			cleannerError(errors, clearErrors);
		}
	}, [errors, clearErrors]);

	const onSubmit = async (data: WindrawRequestFormData) => {
		if (shop) {
			data["shop_id"] = shop?.id;
		}
		const res = await createOrUpdateFaq({
			id: undefined,
			data: data,
		});

		if ("data" in res) {
			closeModal();
			toast.success(`Demande effectuée avec succès !`);
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
