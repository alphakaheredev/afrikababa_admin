import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { fr } from "yup-locales";
import { setLocale } from "yup";
import { Category, CategoryFormData } from "@/redux/api/category/category.type";
import { useCreateOrUpdateCategoryMutation } from "@/redux/api/category/category.api";
import { cleannerError } from "@/lib/utils";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Set the locale for Yup validation messages to French
setLocale(fr);

// Define the validation schema for the category form
const schema = yup.object().shape({
	name: yup.string().required("Le nom est obligatoire"),
	description: yup.string().label("Description"),
	logo: yup.mixed(),
});

// Custom hook for handling category CRUD operations
export const useCrudCategory = (item?: Category) => {
	// Initialize form handling with react-hook-form and yup validation
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		clearErrors,
		setValue,
	} = useForm<CategoryFormData>({
		resolver: yupResolver(schema),
	});

	const navigate = useNavigate();

	// Use the mutation hook for creating or updating a category
	const [createOrUpdate, { isLoading }] =
		useCreateOrUpdateCategoryMutation();

	// Clear form errors when they change
	useEffect(() => {
		if (errors) {
			cleannerError(errors, clearErrors);
		}
	}, [errors, clearErrors]);

	// Populate form fields if editing an existing category
	useEffect(() => {
		if (item) {
			setValue("name", item.name);
			setValue("description", item.description);
		} else {
			reset();
		}
	}, [item, setValue, reset]);

	// Handle logo file selection
	const handleSelectIcon = (e: React.FormEvent<HTMLInputElement>) => {
		let file = e.currentTarget.files?.[0];
		if (file) setValue("logo", file);
	};

	// Form submission handler
	const onSubmit = async (data: CategoryFormData) => {
		// Prepare form data for submission
		const fd = new FormData();
		fd.append("name", data.name);
		fd.append("description", data?.description ?? "");
		data.logo && fd.append("logo", data?.logo);

		// Send create/update request
		const res = await createOrUpdate({
			id: item?.id,
			data: fd,
		});

		// Handle response
		if ("data" in res) {
			// Success case
			toast.success(
				`Catégorie ${
					item?.id ? "modifiée" : "ajoutée"
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
		handleSelectIcon,
	};
};
