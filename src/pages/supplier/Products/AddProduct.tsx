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

const AddProduct = () => {
	const { register, errors, onSubmit, isLoading, categories } =
		useCrudProduct();
	return (
		<React.Fragment>
			<h1 className="text-dark font-semibold text-xl">
				Ajouter produit
			</h1>
			<Divider margin="my-5" />
			<form onSubmit={onSubmit}>
				<FormRow>
					<FormLeftCol>
						<LabelWithDescription
							label="Image principale"
							description="Téléchargez ici l'image vedette de votre produit. La taille de l'image ne doit pas dépasser 2 Mo."
						/>
					</FormLeftCol>
					<FormRightCol>
						<InputFile
							label="Ajouter une image"
							id="main_image"
						/>
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
						<InputFile
							label="Ajouter les images"
							id="cover"
						/>
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
							<Input
								label="Unité"
								id="nom"
								type="text"
								required
							/>
							<div>
								<Label>Description</Label>
								<ReactQuill />
							</div>
							<RadioGroup>
								<Label>Statut</Label>
								<div className="space-x-2">
									<RadioGroupItem
										id={`publish`}
										value={`publish`}
										className="my-0"
									/>
									<label
										htmlFor={`publish`}
										className="text-th-gray text-sm cursor-pointer"
									>
										Publié
									</label>
								</div>
								<div className="space-x-2">
									<RadioGroupItem
										id={`brouillon`}
										value={`brouillon`}
										className="my-0"
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
								label="Quantité"
								id="quantity"
								type="text"
								required
								{...register("quantity")}
								error={errors.quantity?.message}
							/>
							<Input
								label="Largeur"
								id="largeur"
								type="text"
								{...register(
									"product_dimensions.width"
								)}
								error={
									errors.product_dimensions
										?.width?.message
								}
							/>
							<Input
								label="Longueur"
								id="longueur"
								type="text"
								{...register(
									"product_dimensions.length"
								)}
								error={
									errors.product_dimensions
										?.length?.message
								}
							/>
							<Input
								label="Hauteur"
								id="hauteur"
								type="text"
								{...register(
									"product_dimensions.height"
								)}
								error={
									errors.product_dimensions
										?.height?.message
								}
							/>
						</div>
					</FormRightCol>
				</FormRow>
				<div className="flex justify-end pt-10">
					<ButtonSubmit
						className="ml-auto w-min"
						label="Mettre à jour le produit"
						isLoading={isLoading}
					/>
				</div>
			</form>
		</React.Fragment>
	);
};

export default AddProduct;
