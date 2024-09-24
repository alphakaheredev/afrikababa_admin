import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { fr } from "yup-locales";
import { setLocale } from "yup";
import { cleannerError } from "@/lib/utils";
import { toast } from "react-toastify";
import {
	Condition,
	ConditionFormData,
} from "@/redux/api/condition/condition.type";
import { useCreateOrUpdateConditionMutation } from "@/redux/api/condition/condition.api";

// Set the locale for Yup validation messages to French
setLocale(fr);

// Define the validation schema for the payment method form
const schema = yup.object().shape({
	target: yup.string().required("Le target est obligatoire"),
	type: yup.string().required("Le type est obligatoire"),
	content: yup.string().required("Le contenu est obligatoire"),
});

// Custom hook for handling payment method CRUD operations
export const useCrudCondition = (item?: Condition) => {
	// Initialize form handling with react-hook-form and yup validation
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		clearErrors,
		setValue,
	} = useForm<ConditionFormData>({
		// @ts-ignore
		resolver: yupResolver(schema),
	});

	const [content, setContent] = useState<string>("");

	// Use the mutation hook for creating or updating a payment method
	const [createOrUpdate, { isLoading }] =
		useCreateOrUpdateConditionMutation();

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
			setValue("target", item.target);
			setValue("type", item.type);
			setValue("content", item.content);
		} else {
			reset();
		}
	}, [item, setValue, reset]);

	const handleContentChange = (value: string) => {
		setContent(value);
		setValue("content", value);
	};

	// Form submission handler
	const onSubmit = async (data: ConditionFormData) => {
		// Send create/update request
		const res = await createOrUpdate({
			id: item?.id as number,
			data,
		});

		// Handle response
		if ("data" in res) {
			// Success case
			toast.success(
				`Condition ${
					item?.id ? "modifiée" : "ajoutée"
				} avec succès`
			);
			reset();
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
		content,
		handleContentChange,
	};
};
