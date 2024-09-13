import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { fr } from "yup-locales";
import { setLocale } from "yup";
import { Category, CategoryFormData } from "@/redux/api/category/category.type";
import { useCreateOrUpdateCategoryMutation } from "@/redux/api/category/category.api";
import { cleannerError } from "@/lib/utils";
import { toast } from "react-toastify";

setLocale(fr);

const schema = yup.object().shape({
	name: yup.string().required("Le nom est obligatoire"),
	description: yup.string().label("Description"),
});

export const useCrudCategorie = (closeModal: () => void, item?: Category) => {
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

	const [createOrUpdate, { isLoading }] =
		useCreateOrUpdateCategoryMutation();

	useEffect(() => {
		if (errors) {
			cleannerError(errors, clearErrors);
		}
	}, [errors, clearErrors]);

	useEffect(() => {
		if (item) {
			setValue("name", item.name);
			setValue("description", item.description);
			// setValue("icon", item.icon);
		} else {
			reset();
		}
	}, [item, setValue, reset]);

	const onSubmit = async (data: CategoryFormData) => {
		const res = await createOrUpdate({
			id: item?.id,
			data: { ...data },
		});

		if ("data" in res) {
			closeModal();
			toast.success(
				`Catégorie ${
					item?.id ? "modifiée" : "ajoutée"
				} avec succès`
			);
			reset();
		} else if ("error" in res) {
			const error = res.error as any;
			let errorMessage = error?.data?.message;
			let message =
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
