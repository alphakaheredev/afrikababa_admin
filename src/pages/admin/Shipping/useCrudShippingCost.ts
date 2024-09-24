import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { fr } from "yup-locales";
import { setLocale } from "yup";
import {
	ShippingCost,
	ShippingCostData,
} from "@/redux/api/shipping/shipping.type";
import { useCreateOrUpdateShippingCostMutation } from "@/redux/api/shipping/shipping.api";
import { cleannerError } from "@/lib/utils";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Set the locale for Yup validation messages to French
setLocale(fr);

// Define the validation schema for the shipping cost form
const schema = yup.object().shape({
	weight_range: yup.string().required("Le poids minimum est obligatoire"),
	cost_sea: yup.number().required("Le coût maritime est obligatoire"),
	cost_air: yup.number().required("Le coût aérien est obligatoire"),
});

// Custom hook for handling shipping cost CRUD operations
export const useCrudShippingCost = (item?: ShippingCost) => {
	// Initialize form handling with react-hook-form and yup validation
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		clearErrors,
		setValue,
	} = useForm<ShippingCostData>({
		resolver: yupResolver(schema),
	});

	const navigate = useNavigate();

	// Use the mutation hook for creating or updating a shipping cost
	const [createOrUpdate, { isLoading }] =
		useCreateOrUpdateShippingCostMutation();

	// Clear form errors when they change
	useEffect(() => {
		if (errors) {
			cleannerError(errors, clearErrors);
		}
	}, [errors, clearErrors]);

	// Populate form fields if editing an existing shipping cost
	useEffect(() => {
		if (item) {
			setValue("weight_range", item.weight_range);
			setValue("cost_sea", item.cost_sea);
			setValue("cost_air", item.cost_air);
		} else {
			reset();
		}
	}, [item, setValue, reset]);

	// Form submission handler
	const onSubmit = async (data: ShippingCostData) => {
		// Send create/update request
		const res = await createOrUpdate({
			id: item?.id as number,
			data: data,
		});

		// Handle response
		if ("data" in res) {
			// Success case
			toast.success(
				`Coût d'expédition ${
					item?.id ? "modifié" : "ajouté"
				} avec succès`
			);
			reset();
			navigate(-1);
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
	};
};
