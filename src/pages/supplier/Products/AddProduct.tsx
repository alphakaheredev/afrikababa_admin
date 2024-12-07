import Divider from "@/components/common/Divider";
import {
	FormLeftCol,
	FormRightCol,
	FormRow,
	InputFile,
	LabelWithDescription,
} from "@/components/form";
import ButtonSubmit from "@/components/ui/buttonSubmit";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useCrudProduct } from "./useCrudProduct";
import Select from "@/components/ui/Select";
import PreviewImage from "@/components/common/PreviewImage";
import { Product } from "@/redux/api/product/product.type";

const AddProduct = () => {
	return (
		<React.Fragment>
			<h1 className="text-dark font-semibold text-xl">
				Add a product
			</h1>
			<Divider margin="my-5" />
			<ProductForm />
		</React.Fragment>
	);
};

export function ProductForm({ item }: { item?: Product }) {
	const {
		register,
		errors,
		onSubmit,
		isLoading,
		categories,
		handleChangeMainImage,
		mainImage,
		description,
		handleChangeDescription,
		handleChangeStatus,
		handleChangeCategory,
		status,
		handleChangeImages,
		images,
		removeImage,
		handleDeleteMedia,
		product,
	} = useCrudProduct(item);

	return (
		<form onSubmit={onSubmit}>
			<FormRow>
				<FormLeftCol>
					<LabelWithDescription
						label="Main image"
						description="Upload here the main image of your product. The image size should not exceed 2 MB."
					/>
				</FormLeftCol>
				<FormRightCol>
					<div>
						<InputFile
							label="Upload main image"
							id="main_image"
							onChange={handleChangeMainImage}
							accept="image/*"
						/>
						{mainImage ? (
							<PreviewImage image={mainImage} />
						) : item?.main_image_url ? (
							<PreviewImage
								image={item.main_image_url}
							/>
						) : null}
					</div>
				</FormRightCol>
			</FormRow>
			<Divider margin="my-5" />
			<FormRow>
				<FormLeftCol>
					<LabelWithDescription
						label="Gallery"
						description="Upload here the additional images of your product"
					/>
				</FormLeftCol>
				<FormRightCol>
					<div>
						<InputFile
							label="Upload images"
							id="cover"
							onChange={handleChangeImages}
							accept="image/*"
							multiple
						/>
						<div className="flex flex-wrap gap-2">
							{images.map((image, index) => (
								<PreviewImage
									image={image}
									key={image.name}
									onRemove={() =>
										removeImage(index)
									}
								/>
							))}
							{product?.product_media
								? product.product_media.map(
										(item) => (
											<PreviewImage
												image={
													item.media_url
												}
												key={
													item.id
												}
												onRemove={() =>
													handleDeleteMedia(
														item.id
													)
												}
											/>
										)
								  )
								: null}
						</div>
					</div>
				</FormRightCol>
			</FormRow>
			<Divider margin="my-5" />
			<FormRow>
				<FormLeftCol>
					<LabelWithDescription
						label="Video"
						description="Add here the video link of your product"
					/>
				</FormLeftCol>
				<FormRightCol>
					<div className="space-y-5">
						<Input
							label="Add video link"
							id="video"
							type="url"
							{...register("video")}
							error={errors.video?.message}
						/>
					</div>
				</FormRightCol>
			</FormRow>
			<Divider margin="my-5" />
			<FormRow>
				<FormLeftCol>
					<LabelWithDescription
						label="Category"
						description="Select the category of your product"
					/>
				</FormLeftCol>
				<FormRightCol>
					<div className="space-y-5">
						<Select
							label="Category"
							id="category"
							options={categories}
							required
							placeholder="Select a category"
							onChange={handleChangeCategory}
							error={errors.category_id?.message}
							value={item?.category_id}
						/>
					</div>
				</FormRightCol>
			</FormRow>
			<Divider margin="my-5" />
			<FormRow>
				<FormLeftCol>
					<LabelWithDescription
						label="Description"
						description="Modify the description of your product and the necessary information from here"
					/>
				</FormLeftCol>
				<FormRightCol>
					<div className="space-y-5">
						<Input
							label="Name"
							id="name"
							type="text"
							required
							{...register("name")}
							error={errors.name?.message}
						/>
						<div>
							<Label>Description</Label>
							<ReactQuill
								value={description}
								onChange={
									handleChangeDescription
								}
							/>
						</div>
						<RadioGroup
							onValueChange={handleChangeStatus}
						>
							<Label>Statut</Label>
							<div className="space-x-2">
								<RadioGroupItem
									id="publish"
									value="active"
									className="my-0"
									checked={
										status === "active"
									}
								/>
								<label
									htmlFor="publish"
									className="text-th-gray text-sm cursor-pointer"
								>
									Published
								</label>
							</div>
							<div className="space-x-2">
								<RadioGroupItem
									id="brouillon"
									value="inactive"
									className="my-0"
									checked={
										status ===
										"inactive"
									}
								/>
								<label
									htmlFor="brouillon"
									className="text-th-gray text-sm cursor-pointer"
								>
									Draft
								</label>
							</div>
						</RadioGroup>
					</div>
				</FormRightCol>
			</FormRow>
			<Divider margin="my-5" />
			<FormRow>
				<FormLeftCol>
					<LabelWithDescription
						label="Additional product information"
						description="Modify the additional information of your product"
					/>
				</FormLeftCol>
				<FormRightCol>
					<div className="space-y-5">
						<Input
							label="Price (USD)"
							id="price"
							type="text"
							required
							{...register("price")}
							error={errors.price?.message}
						/>

						<Input
							label="Width"
							id="width"
							type="number"
							{...register("product_width")}
							error={errors.product_width?.message}
						/>
						<Input
							label="Length"
							id="length"
							type="number"
							{...register("product_length")}
							error={errors.product_length?.message}
						/>
						<Input
							label="Height"
							id="height"
							type="number"
							{...register("product_height")}
							error={errors.product_height?.message}
						/>
						<Input
							label="Weight"
							id="weight"
							type="number"
							{...register("product_weight")}
							error={errors.product_weight?.message}
						/>
						<Input
							label="Color"
							id="color"
							type="text"
							{...register("color")}
							error={errors.color?.message}
						/>
						<Input
							label="Size"
							id="size"
							type="text"
							{...register("size")}
							error={errors.size?.message}
						/>
					</div>
				</FormRightCol>
			</FormRow>
			<div className="flex justify-end pt-10">
				<ButtonSubmit
					className="ml-auto w-min"
					label={
						item
							? "Modifier le produit"
							: "Ajouter le produit"
					}
					isLoading={isLoading}
				/>
			</div>
		</form>
	);
}

export default AddProduct;
