import Divider from "@/components/common/Divider";
import {
	formatAmount,
	formatOrderStatus,
	formatOrderStatusToBadge,
	getUserName,
} from "@/lib/utils";
import { useLocation } from "react-router-dom";
import { ButtonBack } from "@/components/ui/button";
import { Order } from "@/redux/api/order/order.type";
import { Badge } from "@/components/ui/badge";
import OrdersItemsTable from "./OrdersItemsTable";

const OrderDetail = () => {
	const item = useLocation().state as Order;
	return (
		<>
			<div className="flex items-center gap-2 mb-12">
				<ButtonBack />
				<h1 className="text-dark font-medium text-xl">
					Détails de la commande
				</h1>
			</div>
			<div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
					{item?.user && (
						<div className="flex items-center gap-2">
							<span className="text-dark font-normal">
								Client:
							</span>
							<span className="text-gray-500 text-sm">
								{getUserName(item?.user)}
							</span>
						</div>
					)}
					<div className="flex items-center gap-2">
						<span className="text-dark font-normal">
							Date de commande:
						</span>
						<span className="text-gray-500 text-sm">
							{new Date(
								item?.created_at
							).toLocaleDateString()}
						</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-dark font-normal">
							Numéro de commande:
						</span>
						<span className="text-gray-500 text-sm">
							{item?.order_number}
						</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-dark font-normal">
							Statut de la commande:
						</span>
						<Badge
							className={formatOrderStatusToBadge(
								item?.status
							)}
						>
							{formatOrderStatus(item?.status)}
						</Badge>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-dark font-normal">
							Total
						</span>
						<span className="text-gray-500 text-sm">
							{formatAmount(item?.total_price)}
						</span>
					</div>
				</div>
			</div>
			<Divider margin="my-5" />
			<div className="mb-8">
				<h3 className="text-dark font-medium text-lg mb-4">
					Liste des produits commandés
				</h3>
				<OrdersItemsTable data={item?.order_items} />
			</div>
		</>
	);
};

export default OrderDetail;
