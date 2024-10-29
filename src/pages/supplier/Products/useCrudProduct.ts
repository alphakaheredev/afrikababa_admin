import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { fr } from "yup-locales";
import { setLocale } from "yup";
import { Product, ProductFormData } from "@/redux/api/product/product.type";
import { useCreateOrUpdateProductMutation } from "@/redux/api/product/product.api";
import { cleannerError } from "@/lib/utils";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useGetCategorysListQuery } from "@/redux/api/category/category.api";

// Set the locale for Yup validation messages to French
setLocale(fr);

// Define the validation schema for the product form
const schema = yup.object().shape({
	name: yup.string().required("Le nom est obligatoire"),
	description: yup.string().label("Description"),
	price: yup.number().required("Le prix est obligatoire"),
	quantity: yup.number().required("La quantité est obligatoire"),
	main_image_url: yup.mixed(),
});

export const useCrudProduct = (item?: Product) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		clearErrors,
		setValue,
	} = useForm<ProductFormData>({
		// @ts-ignore
		resolver: yupResolver(schema),
	});

	const navigate = useNavigate();

	const [createOrUpdate, { isLoading }] =
		useCreateOrUpdateProductMutation();
	const { data: categories } = useGetCategorysListQuery({});

	useEffect(() => {
		if (errors) {
			cleannerError(errors, clearErrors);
		}
	}, [errors, clearErrors]);

	useEffect(() => {
		if (item) {
			setValue("name", item.name);
			setValue("description", item.description);
			setValue("price", item.price);
			setValue("quantity", item.quantity);
		} else {
			reset();
		}
	}, [item, setValue, reset]);

	// Handle logo file selection
	// const handleSelectIcon = (e: React.FormEvent<HTMLInputElement>) => {
	// 	let file = e.currentTarget.files?.[0];
	// 	if (file) setValue("logo", file);
	// };

	// Form submission handler
	const onSubmit = async (data: ProductFormData) => {
		// Prepare form data for submission
		const fd = new FormData();
		fd.append("name", data.name);
		fd.append("description", data?.description as string);
		fd.append("price", data.price.toString());
		fd.append("quantity", data.quantity.toString());
		// data.logo && fd.append("logo", data?.logo);

		// Send create/update request
		const res = await createOrUpdate({
			id: item?.id,
			data: fd,
		});

		// Handle response
		if ("data" in res) {
			// Success case
			toast.success(
				`Produit ${item?.id ? "modifié" : "ajouté"} avec succès`
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
		categories: categories?.data.map((category) => ({
			value: category.id,
			label: category.name,
		})),
	};
};