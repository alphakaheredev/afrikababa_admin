import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { fr } from "yup-locales";
import { setLocale } from "yup";
import {
	PaymentMethod,
	PaymentMethodData,
} from "@/redux/api/payment/payment.type";
import { useCreateOrUpdatePaymentMethodMutation } from "@/redux/api/payment/payment.api";
import { cleannerError } from "@/lib/utils";
import { toast } from "react-toastify";

// Set the locale for Yup validation messages to French
setLocale(fr);

// Define the validation schema for the payment method form
const schema = yup.object().shape({
	method_name: yup
		.string()
		.required("Le nom de la méthode de paiement est obligatoire"),
	logo: yup.mixed(),
});

// Custom hook for handling payment method CRUD operations
export const useCrudPaymentMethod = (
	closeModal: () => void,
	item?: PaymentMethod
) => {
	// Initialize form handling with react-hook-form and yup validation
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		clearErrors,
		setValue,
	} = useForm<PaymentMethodData>({
		// @ts-ignore
		resolver: yupResolver(schema, {
			context: { required: true },
		}),
	});

	// Use the mutation hook for creating or updating a payment method
	const [createOrUpdate, { isLoading }] =
		useCreateOrUpdatePaymentMethodMutation();

	// Clear form errors when they change
	useEffect(() => {
		if (errors) {
			cleannerError(errors, clearErrors);
		}
	}, [errors, clearErrors]);

	// Populate form fields if editing an existing payment method
	useEffect(() => {
		if (item) {
			console.log(item);
			setValue("method_name", item.method_name);
		} else {
			reset();
		}
	}, [item, setValue, reset]);

	const handleChangeLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setValue("logo", file);
		}
	};

	// Form submission handler
	const onSubmit = async (data: PaymentMethodData) => {
		const fd = new FormData();
		fd.append("method_name", data.method_name);
		if (data.logo) {
			fd.append("logo", data.logo);
		}

		// Send create/update request
		const res = await createOrUpdate({
			id: item?.id as number,
			data: fd,
		});

		// Handle response
		if ("data" in res) {
			// Success case
			toast.success(
				`Méthode de paiement ${
					item?.id ? "modifiée" : "ajoutée"
				} avec succès`
			);
			reset();
			closeModal();
		} else if ("error" in res) {
			// Error case
			const error = res.error as any;
			let errorMessage = error?.data?.message;
			let message =
				errorMessage ?? "Une erreur inconnue est survenue";
			toast.error(message);
		}
	};

	// Return necessary functions and state for component use
	return {
		register,
		errors,
		onSubmit: handleSubmit(onSubmit),
		isLoading,
		item,
		handleChangeLogo,
	};
};
