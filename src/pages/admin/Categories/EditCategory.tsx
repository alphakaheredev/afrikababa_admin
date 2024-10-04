import React from "react";
import { CategoryForm } from "./AddCategory";
import Divider from "@/components/common/Divider";
import { useLocation } from "react-router-dom";
import { ButtonBack } from "@/components/ui/button";

const EditCategory = () => {
	const { state } = useLocation();
	return (
		<React.Fragment>
			<div className="flex items-center gap-2">
				<ButtonBack />
				<h1 className="text-dark font-medium text-xl">
					Modifiez la catégorie
				</h1>
			</div>
			<Divider margin="my-5" />
			<CategoryForm item={state} />
		</React.Fragment>
	);
};

export default EditCategory;
