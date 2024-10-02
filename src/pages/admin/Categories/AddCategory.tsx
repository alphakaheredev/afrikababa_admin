import React from "react";
import Divider from "@/components/common/Divider";
import {
	FormLeftCol,
	FormRightCol,
	FormRow,
	LabelWithDescription,
} from "@/components/form";
import ButtonSubmit from "@/components/ui/buttonSubmit";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import { useCrudCategory } from "./hooks/useCrudCategory";
import { Category } from "@/redux/api/category/category.type";
import { ButtonBack } from "@/components/ui/button";

export function CategoryForm({ item }: { item?: Category }) {
	const { register, onSubmit, errors, isLoading, handleSelectIcon } =
		useCrudCategory(item);
	return (
		<form onSubmit={onSubmit}>
			<FormRow>
				<FormLeftCol>
					<LabelWithDescription
						label="Description"
						description={`${
							item ? "Modifiez" : "Ajoutez"
						} les détails de votre catégorie et les informations nécessaires à partir d'ici`}
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
						<Textarea
							label="Description"
							id="description"
							required
							{...register("description")}
							error={errors.description?.message}
						/>
						<Input
							label="Ajoutez une icône"
							id="icon"
							type="file"
							required
							onChange={handleSelectIcon}
						/>
						{/* <Input
							label="Catégorie parentale"
							id="category"
							type="text"
						/> */}
					</div>
				</FormRightCol>
			</FormRow>
			<div className="flex justify-end pt-10">
				<ButtonSubmit
					className="ml-auto w-min"
					label={`${
						item ? "Modifiez" : "Ajoutez"
					} la catégorie`}
					isLoading={isLoading}
				/>
			</div>
		</form>
	);
}

const AddCategory = () => {
	return (
		<React.Fragment>
			<div className="flex items-center gap-2">
				<ButtonBack />
				<h1 className="text-dark font-medium text-xl">
					Créez une nouvelle catégorie
				</h1>
			</div>
			<Divider margin="my-5" />
			<CategoryForm />
		</React.Fragment>
	);
};

export default AddCategory;
