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
				Ajouter produit
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
	} = useCrudProduct(item);

	return (
		<form onSubmit={onSubmit}>
			<FormRow>
				<FormLeftCol>
					<LabelWithDescription
						label="Image principale"
						description="Téléchargez ici l'image vedette de votre produit. La taille de l'image ne doit pas dépasser 2 Mo."
					/>
				</FormLeftCol>
				<FormRightCol>
					<div>
						<InputFile
							label="Ajouter une image"
							id="main_image"
							onChange={handleChangeMainImage}
							accept="image/*"
						/>
						{mainImage && (
							<PreviewImage image={mainImage} />
						)}
					</div>
				</FormRightCol>
			</FormRow>
			<Divider margin="my-5" />
			<FormRow>
				<FormLeftCol>
					<LabelWithDescription
						label="Galerie"
						description="Téléchargez ici les images supplémentaires de votre produit"
					/>
				</FormLeftCol>
				<FormRightCol>
					<div>
						<InputFile
							label="Ajouter les images"
							id="cover"
							onChange={handleChangeImages}
							accept="image/*"
							multiple
						/>
						<div className="flex flex-wrap gap-2">
							{images &&
								images.map((image, index) => (
									<PreviewImage
										image={image}
										key={image.name}
										onRemove={() =>
											removeImage(
												index
											)
										}
									/>
								))}
						</div>
					</div>
				</FormRightCol>
			</FormRow>
			<Divider margin="my-5" />
			<FormRow>
				<FormLeftCol>
					<LabelWithDescription
						label="Vidéo"
						description="Ajouter un lien vidéo"
					/>
				</FormLeftCol>
				<FormRightCol>
					<div className="space-y-5">
						<Input
							label="Ajouter un lien vidéo"
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
						label="Catégorie"
						description="Sélectionnez la catégorie du produit"
					/>
				</FormLeftCol>
				<FormRightCol>
					<div className="space-y-5">
						<Select
							label="Catégorie"
							id="category"
							options={categories}
							required
							placeholder="Sélectionner une catégorie"
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
						description="Modifiez la description de votre produit et les informations nécessaires à partir d'ici"
					/>
				</FormLeftCol>
				<FormRightCol>
					<div className="space-y-5">
						<Input
							label="Nom"
							id="nom"
							type="text"
							required
							{...register("name")}
							error={errors.name?.message}
						/>
						{/* <Input
							label="Unité"
							id="nom"
							type="text"
							required
						/> */}
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
									Publié
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
									Brouillon
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
						label="Informations supplémentaires du produit"
						description="Modifiez les informations supplémentaires du produit"
					/>
				</FormLeftCol>
				<FormRightCol>
					<div className="space-y-5">
						<Input
							label="Prix"
							id="price"
							type="text"
							required
							{...register("price")}
							error={errors.price?.message}
						/>

						<Input
							label="Largeur"
							id="largeur"
							type="number"
							{...register("product_width")}
							error={errors.product_width?.message}
						/>
						<Input
							label="Longueur"
							id="longueur"
							type="number"
							{...register("product_length")}
							error={errors.product_length?.message}
						/>
						<Input
							label="Hauteur"
							id="hauteur"
							type="number"
							{...register("product_height")}
							error={errors.product_height?.message}
						/>
						<Input
							label="Poids"
							id="poids"
							type="number"
							required
							{...register("product_weight")}
							error={errors.product_weight?.message}
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
