import React from "react";
import { CategoryForm } from "./AddCategory";
import Divider from "@/components/common/Divider";
import { useLocation } from "react-router-dom";

const EditCategory = () => {
	const { state } = useLocation();
	console.log(state);
	return (
		<React.Fragment>
			<h1 className="text-dark font-semibold text-xl">
				Modifiez la catégorie
			</h1>
			<Divider margin="my-5" />
			<CategoryForm item={state} />
		</React.Fragment>
	);
};

export default EditCategory;
