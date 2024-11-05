import Divider from "@/components/common/Divider";
import React from "react";
import "react-quill/dist/quill.snow.css";
import { ProductForm } from "./AddProduct";
import { useLocationState } from "@/hooks/hooks";
import { Product } from "@/redux/api/product/product.type";

const EditProduct = () => {
	const item = useLocationState<Product>(undefined);
	return (
		<React.Fragment>
			<h1 className="text-dark font-semibold text-xl">
				Modifier le produit
			</h1>
			<Divider margin="my-5" />
			<ProductForm item={item} />
		</React.Fragment>
	);
};

export default EditProduct;
