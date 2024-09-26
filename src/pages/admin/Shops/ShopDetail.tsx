import Divider from "@/components/common/Divider";
import { getImageUrl } from "@/lib/utils";
import { Shop } from "@/redux/api/shop/shop.type";
import { useLocation } from "react-router-dom";
import OrdersTable from "../Orders/OrdersTable";

const ShopDetail = () => {
	const item = useLocation().state as Shop;
	return (
		<>
			<h1 className="text-dark font-medium text-xl mb-12">
				Détails de la boutique
			</h1>
			<div>
				<div className="flex  gap-5">
					<div className="border-2 border-th-teal p-3 w-20 h-20  rounded-full">
						<img
							src={getImageUrl(item.logo_url)}
							alt="logo"
						/>
					</div>
					<div>
						<h3 className="text-dark font-medium text-lg mb-4">
							{item?.company_name}
						</h3>
						<div
							className="text-gray-500 text-sm mb-4"
							dangerouslySetInnerHTML={{
								__html: item.company_description,
							}}
						/>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
							<div className="flex items-center gap-2">
								<span className="text-dark font-normal">
									Email:
								</span>
								<span className="text-gray-500 text-sm">
									{item?.email_address}
								</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-dark font-normal">
									Téléphone:
								</span>
								<span className="text-gray-500 text-sm">
									{item?.phone_number}
								</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-dark font-normal">
									Numéro d'enregistrement:
								</span>
								<span className="text-gray-500 text-sm">
									{
										item?.company_registration
									}
								</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-dark font-normal">
									Licence commerciale:
								</span>
								<span className="text-gray-500 text-sm">
									{item?.business_license}
								</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-dark font-normal">
									Total des commandes:
								</span>
								<span className="text-gray-500 text-sm">
									{item?.orderitems_count}
								</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-dark font-normal">
									Total des produits:
								</span>
								<span className="text-gray-500 text-sm">
									{item?.products_count}
								</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-dark font-normal">
									Adresse:
								</span>
								<span className="text-gray-500 text-sm">
									{item?.company_address}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Divider margin="my-5" />
			<div className="mb-8">
				<h3 className="text-dark font-medium text-lg mb-4">
					Liste des commandes
				</h3>
				<OrdersTable limit={10} shop_id={item?.id} />
			</div>
		</>
	);
};

export default ShopDetail;
