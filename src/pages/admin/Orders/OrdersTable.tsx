import Table, { Column } from "@/components/ui/Table";
import { Badge } from "@/components/ui/badge";
import {
	cn,
	formatAmount,
	formatDate,
	formatOrderStatus,
	formatOrderStatusToBadge,
	getInitialsOfName,
} from "@/lib/utils";
import { Link } from "react-router-dom";
import {
	useGetOrdersListQuery,
	useChangeOrderStatusMutation,
} from "@/redux/api/order/order.api";
import { Order, OrderQuery, OrderStatus } from "@/redux/api/order/order.type";
import { User } from "@/redux/api/user/user.type";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { toast } from "react-toastify";

const OrdersTable = ({ limit, order_number }: OrderQuery) => {
	const { data: orders, isLoading } = useGetOrdersListQuery({
		limit,
		shop_id: 20,
		q: order_number,
	});
	const [changeOrderStatus] = useChangeOrderStatusMutation();

	const statusFormatter = (cell: OrderStatus) => {
		return (
			<Badge className={cn(formatOrderStatusToBadge(cell))}>
				{formatOrderStatus(cell)}
			</Badge>
		);
	};

	const clientFormatter = (cell: User) => {
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
				</div>
			</div>
		);
	};

	const orderItemsFormatter = (_cell: string, row: Order) => {
		return (
			<div>
				{row?.order_items
					.map((item) => item?.product?.name)
					.join(", ")}
			</div>
		);
	};

	const redirectFormatter = (cell: string) => {
		return <Link to={`detail/${cell}`}>{cell}</Link>;
	};

	const changeStatus = async (status: OrderStatus, row: Order) => {
		const res = await changeOrderStatus({ id: row.id, status });
		if ("data" in res) {
			console.log(res.data);
			toast.success("Statut de commande modifié");
		}
		if (res.error) {
			console.log(res.error);
		}
	};

	const actionFormatter = (_cell: string, row: Order) => {
		return (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button className="flex items-center gap-2 bg-dark text-white px-3 py-2">
						<span>Changer le statut</span>
						<ChevronDownIcon className="w-4 h-4" />
					</button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					{Object.values(OrderStatus).map((status) => (
						<DropdownMenuItem
							key={status}
							onClick={() =>
								changeStatus(status, row)
							}
						>
							<span>
								{formatOrderStatus(status)}
							</span>
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		);
	};

	const columns: Column<Order>[] = [
		{
			header: "Numéro de suivi",
			name: "order_number",
			formatter: redirectFormatter,
		},
		{ header: "Client", name: "user", formatter: clientFormatter },
		{
			header: "Produits",
			name: "order_items",
			formatter: orderItemsFormatter,
		},
		{
			header: "Date de commande",
			name: "created_at",
			formatter: (cell) => formatDate(cell),
		},
		{
			header: "Total",
			name: "total_price",
			formatter: (cell) => formatAmount(cell),
		},
		{
			header: "Statut",
			name: "status",
			formatter: statusFormatter,
		},
		{
			header: "Action",
			name: "actions",
			formatter: actionFormatter,
		},
	];

	return (
		<Table<Order>
			data={orders?.data}
			columns={columns}
			isLoading={isLoading}
		/>
	);
};

export default OrdersTable;
