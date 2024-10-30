import Divider from "@/components/common/Divider";
import React from "react";
import { ShopForm } from "./CreateShop";

const EditShop = () => {
	return (
		<React.Fragment>
			<h1 className="text-dark font-semibold text-xl">
				Edition de votre boutique
			</h1>
			<Divider margin="my-5" />
			<ShopForm />
		</React.Fragment>
	);
};

export default EditShop;
