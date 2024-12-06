// import Divider from "@/components/common/Divider";
import { useLocation } from "react-router-dom";
import { ButtonBack } from "@/components/ui/button";
import { OrderItem } from "@/redux/api/order/order.type";
import { Badge } from "@/components/ui/badge";
import React from "react";
import {
	formatOrderItemStatus,
	formatOrderItemStatusToBadge,
	formatPriceToUsd,
	getUserName,
} from "@/lib/utils";
import Divider from "@/components/common/Divider";
import countries from "@/lib/countries.english.json";

const OrderItemDetail = () => {
	const item = useLocation().state as OrderItem;
	console.log(item);
	return (
		<React.Fragment>
			<div className="flex items-center gap-2 mb-12">
				<ButtonBack />
				<h1 className="text-dark font-medium text-xl">
					Order Details
				</h1>
			</div>

			<div className="flex flex-col lg:flex-row justify-between gap-3">
				<div className="space-y-2">
					<div className="flex items-center gap-2">
						<span className="text-dark font-normal">
							Order code:
						</span>
						<span className="text-gray-500 text-sm">
							{item?.order_items_code}
						</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-dark font-normal">
							Product:
						</span>
						<span className="text-gray-500 text-sm">
							{item?.product?.name}
						</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-dark font-normal">
							Quantity:
						</span>
						<span className="text-gray-500 text-sm">
							{item?.quantity}
						</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-dark font-normal">
							Price:
						</span>
						<span className="text-gray-500 text-sm">
							{formatPriceToUsd(item?.price)}
						</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-dark font-normal">
							Client:
						</span>
						<span className="text-gray-500 text-sm">
							{getUserName(item?.order?.user)}
						</span>
					</div>
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
				</div>
				<div className="space-y-2">
					<div className="flex items-center gap-2">
						<span className="text-dark font-normal">
							Order status:
						</span>
						<Badge
							className={formatOrderItemStatusToBadge(
								item?.status
							)}
						>
							{formatOrderItemStatus(item?.status)}
						</Badge>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-dark font-normal">
							Total
						</span>
						<span className="text-gray-500 text-sm">
							{formatPriceToUsd(
								item?.price * item?.quantity
							)}
						</span>
					</div>
				</div>
			</div>

			<Divider margin="my-5" />
			<div className="mb-8">
				<h3 className="text-dark font-medium text-lg mb-4">
					Delivery address
				</h3>
				<div className="space-y-2">
					<div className="flex items-center gap-2">
						<span className="text-dark font-normal">
							Destination country:
						</span>
						<span className="text-gray-500 text-sm">
							{
								countries[
									item?.destination_country as keyof typeof countries
								]
							}
						</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-dark font-normal">
							Forwarder:
						</span>
						<span className="text-gray-500 text-sm text-capitalize">
							{getUserName(item?.forwarder)}
						</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-dark font-normal">
							Forwarder address:
						</span>
						<span className="text-gray-500 text-sm">
							{item?.forwarder?.adresse}
						</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-dark font-normal">
							Forwarder phone:
						</span>
						<span className="text-gray-500 text-sm">
							{item?.forwarder?.phone_number}
						</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-dark font-normal">
							Forwarder email:
						</span>
						<span className="text-gray-500 text-sm">
							{item?.forwarder?.email}
						</span>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default OrderItemDetail;
