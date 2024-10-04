import Divider from "@/components/common/Divider";
import {
  FormLeftCol,
  FormRightCol,
  FormRow,
  InputFile,
  InputFileVideo,
  LabelWithDescription,
} from "@/components/form";
import ButtonSubmit from "@/components/ui/buttonSubmit";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddProduct = () => {
  return (
		<React.Fragment>
			<h1 className="text-dark font-semibold text-xl">
				Ajouter produit
			</h1>
			<Divider margin="my-5" />
			<form>
				<FormRow>
					<FormLeftCol>
						<LabelWithDescription
							label="L'image sélectionnée"
							description="Téléchargez ici l'image vedette de votre produit. La taille de l'image ne doit pas dépasser 2 Mo."
						/>
					</FormLeftCol>
					<FormRightCol>
						<InputFile
							label="Téléchargez votre image"
							id="logo"
						/>
					</FormRightCol>
				</FormRow>
				<Divider margin="my-5" />
				<FormRow>
					<FormLeftCol>
						<LabelWithDescription
							label="Galerie"
							description="Téléchargez ici l'image vedette de votre produit. La taille de l'image ne doit pas dépasser 2 Mo."
						/>
					</FormLeftCol>
					<FormRightCol>
						<InputFile
							label="Téléchargez votre image"
							id="cover"
						/>
					</FormRightCol>
				</FormRow>
				<Divider margin="my-5" />
				<FormRow>
					<FormLeftCol>
						<LabelWithDescription
							label="Titre de la vidéo"
							description="Ajouter un lien vidéo"
						/>
					</FormLeftCol>
					<FormRightCol>
						<div className="space-y-5">
							<InputFileVideo
								label="Ajouter une vidéo"
								id="video"
							/>
						</div>
					</FormRightCol>
				</FormRow>
				<Divider margin="my-5" />
				<FormRow>
					<FormLeftCol>
						<LabelWithDescription
							label="Groupes et catégories"
							description="Sélectionnez le groupe de produits et les catégories à partir d'ici"
						/>
					</FormLeftCol>
					<FormRightCol>
						<div className="space-y-5">
							<Input
								label="Groupe"
								id="groupe"
								type="text"
								required
							/>
							<Input
								label="Catégorie"
								id="category"
								type="text"
								required
							/>
							<Input
								label="Fournisseurs"
								id="manufacturer"
								type="text"
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
							label="Informations simples sur le produit"
							description="Modifiez votre description de produit simple et les informations nécessaires à partir d'ici"
						/>
					</FormLeftCol>
					<FormRightCol>
						<div className="space-y-5">
							<Input
								label="Prix"
								id="price"
								type="text"
								required
							/>
							<Input
								label="Quantité"
								id="quantity"
								type="text"
								required
							/>
							<Input
								label="Largeur"
								id="largeur"
								type="text"
							/>
							<Input
								label="Longueur"
								id="longueur"
								type="text"
							/>
							<Input
								label="Hauteur"
								id="hauteur"
								type="text"
							/>
						</div>
					</FormRightCol>
				</FormRow>
				<div className="flex justify-end pt-10">
					<ButtonSubmit
						className="ml-auto w-min"
						label="Mettre à jour le produit"
					/>
				</div>
			</form>
		</React.Fragment>
  );
};

export default AddProduct;
