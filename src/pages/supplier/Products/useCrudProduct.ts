import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { fr } from "yup-locales";
import { setLocale } from "yup";
import { Product, ProductFormData } from "@/redux/api/product/product.type";
import {
	useAddMediaMutation,
	useCreateOrUpdateProductMutation,
	useDeleteMediaMutation,
	useLazyFindProductQuery,
} from "@/redux/api/product/product.api";
import { appendDataToFormData, cleannerError } from "@/lib/utils";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useGetCategorysListQuery } from "@/redux/api/category/category.api";
import { useAppSelector } from "@/redux/hooks";

// Set the locale for Yup validation messages to French
setLocale(fr);

// Define the validation schema for the product form
const schema = yup.object().shape({
	name: yup.string().required("Name is required"),
	description: yup.string().label("Description"),
	price: yup.number().required("Price is required"),
	main_image: yup.mixed(),
	category_id: yup.number().required("Category is required"),
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
		defaultValues: {
			status: item?.status ?? "active",
		},
	});

	const [product, setProduct] = useState<Product | undefined>(undefined);
	const [images, setImages] = useState<File[]>([]);
	const [media, setMedia] = useState<string[]>([]);
	const [mainImage, setMainImage] = useState<File | null>(null);
	const [description, setDescription] = useState<string>("");
	const [status, setStatus] = useState<string>("active");
	const [findProduct] = useLazyFindProductQuery();
	const navigate = useNavigate();
	const { shop } = useAppSelector((state) => state.user);
	const [addMedia] = useAddMediaMutation();
	const [deleteMedia] = useDeleteMediaMutation();

	const [createOrUpdate, { isLoading }] =
		useCreateOrUpdateProductMutation();
	const { data: categories } = useGetCategorysListQuery({});

	useEffect(() => {
		if (errors) {
			cleannerError(errors, clearErrors);
		}
	}, [errors, clearErrors]);

	const getProduct = async () => {
		const res = await findProduct(item?.id as number);
		if ("data" in res) {
			setProduct(res.data as Product);
		}
	};

	useEffect(() => {
		if (item) {
			getProduct();
		}
	}, [item]);

	useEffect(() => {
		if (product) {
			setValue("name", product.name);
			setValue("description", product.description);
			setValue("price", product.price);
			setValue("quantity", product.quantity);
			setValue("category_id", product.category_id);
			setValue("status", product.status);
			setValue("product_weight", product.product_weight);
			setValue("product_length", product.product_length);
			setValue("product_width", product.product_width);
			setValue("product_height", product.product_height);
			setValue("video", product.video_url);
			setDescription(product.description);
			setStatus(product.status);
		} else {
			reset();
		}
	}, [product, setValue, reset]);

	// Handle main image change
	const handleChangeMainImage = (e: React.FormEvent<HTMLInputElement>) => {
		let file = e.currentTarget.files?.[0];
		if (file) {
			setMainImage(file);
			setValue("main_image", file);
		}
	};

	const handleChangeImages = async (
		e: React.FormEvent<HTMLInputElement>
	) => {
		let files = e.currentTarget.files;
		if (files) {
			const newImages = [...images, ...Array.from(files)];
			setImages(newImages);
		}
	};

	const removeImage = (index: number) => {
		const newImages = images.filter((_, i) => i !== index);
		setImages(newImages);
		setValue("product_media", newImages);
		setMedia(media.filter((_, i) => i !== index));
	};

	const handleChangeDescription = (value: string) => {
		setDescription(value);
		setValue("description", value);
	};

	const handleChangeStatus = (value: "active" | "inactive") => {
		console.log(value);
		setStatus(value);
	};

	const handleChangeCategory = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		setValue("category_id", parseInt(e.currentTarget.value));
	};

	const handleDeleteMedia = async (id: number) => {
		const res = await deleteMedia(id);
		if ("data" in res) {
			setTimeout(async () => {
				getProduct();
			}, 1000);
		}
	};

	// Form submission handler
	const onSubmit = async (data: ProductFormData) => {
		if (shop) {
			data.shop_id = shop.id;
		}
		// Prepare form data for submission
		const fd = new FormData();
		appendDataToFormData(fd, data);
		if (media) {
			fd.append("product_media", JSON.stringify(media));
		}

		// Send create/update request
		const res = await createOrUpdate({
			id: item?.id,
			data: fd,
		});

		// Handle response
		if ("data" in res) {
			toast.success(
				`Product ${item?.id ? "updated" : "added"} successfully`
			);

			if (images.length > 0) {
				const formData = new FormData();
				formData.append(
					"product_id",
					res.data?.id.toString() as string
				);
				formData.append("media_type", "image");
				images.forEach((image) => {
					formData.append("medias[]", image);
				});

				const response = await addMedia(formData);
				if ("data" in response) {
					setImages([]);
				}
			}
			navigate(-1);
			reset();
		} else if ("error" in res) {
			// Error case
			const error = res.error as any;
			let errorMessage = error?.data?.message;
			let message = errorMessage ?? "An unknown error has occurred";
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
		handleChangeMainImage,
		handleChangeImages,
		images,
		mainImage,
		description,
		handleChangeDescription,
		removeImage,
		handleChangeStatus,
		handleChangeCategory,
		status,
		handleDeleteMedia,
		product,
	};
};
