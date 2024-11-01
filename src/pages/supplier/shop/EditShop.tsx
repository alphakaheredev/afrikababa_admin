import Divider from "@/components/common/Divider";
import React from "react";
import { ShopForm } from "./CreateShop";
import { useLocation } from "react-router-dom";
import { Shop } from "@/redux/api/shop/shop.type";

const EditShop = () => {
	const { item } = useLocation().state as { item: Shop };
	return (
		<React.Fragment>
			<h1 className="text-dark font-semibold text-xl">
				Edition de votre boutique
			</h1>
			<Divider margin="my-5" />
			<ShopForm item={item} />
		</React.Fragment>
	);
};

export default EditShop;
