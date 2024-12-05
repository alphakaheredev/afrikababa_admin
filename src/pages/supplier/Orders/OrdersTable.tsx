import Table, { Column } from "@/components/ui/Table";
import { Badge } from "@/components/ui/badge";
import {
	cn,
	formatDate,
	formatOrderItemStatus,
	formatOrderItemStatusToBadge,
	formatPriceToUsd,
	getInitialsOfName,
} from "@/lib/utils";
import { useChangeOrderStatusBySupplierMutation } from "@/redux/api/order/order.api";
import {
	Order,
	OrderItem,
	OrderItemStatus,
	OrderQuery,
} from "@/redux/api/order/order.type";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { toast } from "react-toastify";
import { ShopApi, useGetOrdersByShopQuery } from "@/redux/api/shop/shop.api";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { User } from "@/redux/api/user/user.type";

const OrdersTable = ({ limit, order_number, shop_id }: OrderQuery) => {
	const { shop } = useAppSelector((s) => s?.user);
	const { data: orders, isLoading } = useGetOrdersByShopQuery({
		limit,
		q: order_number,
		shop: shop_id ?? shop?.id,
	});
	const [changeOrderStatus] = useChangeOrderStatusBySupplierMutation();
	const dispatch = useAppDispatch();

	const statusFormatter = (cell: OrderItemStatus) => {
		return (
			<Badge className={cn(formatOrderItemStatusToBadge(cell))}>
				{formatOrderItemStatus(cell)}
			</Badge>
		);
	};

	const clientFormatter = (cell: Order) => {
		return (
			<div className="flex items-center gap-3">
				<span className="min-w-8 min-h-8 p-1 rounded-full flex items-center justify-center bg-[#C3FF97] text-[#306708] font-medium text-sm">
					{getInitialsOfName(
						cell?.user?.firstname +
							" " +
							cell?.user?.lastname
					)}
				</span>
				<div>
					<h5 className="text-dark font-semibold">
						{cell?.user?.firstname}{" "}
						{cell?.user?.lastname}
					</h5>
					<p>{cell?.user?.email}</p>
				</div>
			</div>
		);
	};

	const forwarderFormatter = (cell: User) => {
		return (
			<div className="flex items-center gap-3">
				<span className="min-w-8 min-h-8 p-1 rounded-full flex items-center justify-center bg-[#C3FF97] text-[#306708] font-medium text-sm">
					{getInitialsOfName(
						cell?.firstname + " " + cell?.lastname
					)}
				</span>
				<div>
					<h5 className="text-dark font-semibold">
						{cell?.firstname} {cell?.lastname}
					</h5>
					<p>{cell?.email}</p>
					<p>{cell?.phone_number}</p>
				</div>
			</div>
		);
	};

	const changeStatus = async (status: OrderItemStatus, row: OrderItem) => {
		const res = await changeOrderStatus({
			id: row.id,
			status,
		});
		if ("data" in res) {
			console.log(res.data);
			toast.success("Statut de commande modifié");
			dispatch(ShopApi.util.invalidateTags(["orderByShop"]));
		}
		if (res.error) {
			console.log(res.error);
		}
	};

	const actionFormatter = (_cell: string, row: OrderItem) => {
		return (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button className="flex items-center gap-2 bg-dark text-white px-3 py-2">
						<span>Changer le statut</span>
						<ChevronDownIcon className="w-4 h-4" />
					</button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					{Object.values(OrderItemStatus)
						.filter(
							(status) =>
								status !==
								OrderItemStatus.PENDING
						)
						.map((status) => (
							<DropdownMenuItem
								key={status}
								onClick={() =>
									changeStatus(status, row)
								}
							>
								<span>
									{formatOrderItemStatus(
										status
									)}
								</span>
							</DropdownMenuItem>
						))}
				</DropdownMenuContent>
			</DropdownMenu>
		);
	};

	const columns: Column<OrderItem>[] = [
		{
			header: "Numéro de suivi",
			name: "order_items_code",
		},
		{ header: "Client", name: "order", formatter: clientFormatter },
		{
			header: "Transitaire",
			name: "forwarder",
			formatter: forwarderFormatter,
		},
		{
			header: "Produit",
			name: "product",
			formatter: (cell) => cell?.name,
		},
		{
			header: "Date de commande",
			name: "created_at",
			formatter: (cell) => formatDate(cell),
		},
		{
			header: "Total",
			name: "price",
			formatter: (cell, row) =>
				formatPriceToUsd(cell * row?.quantity),
		},
		{
			header: "Statut",
			name: "status",
			formatter: statusFormatter,
		},
		{
			header: "Action",
			name: "actions",
			// @ts-ignore
			formatter: actionFormatter,
		},
	];

	return (
		<Table<OrderItem>
			data={orders}
			columns={columns}
			isLoading={isLoading}
		/>
	);
};

export default OrdersTable;
