import Divider from "@/components/common/Divider";
import React from "react";
import "react-quill/dist/quill.snow.css";
import { ProductForm } from "./AddProduct";

const EditProduct = () => {
	return (
		<React.Fragment>
			<h1 className="text-dark font-semibold text-xl">
				Modifier le produit
			</h1>
			<Divider margin="my-5" />
			<ProductForm />
		</React.Fragment>
	);
};

export default EditProduct;
