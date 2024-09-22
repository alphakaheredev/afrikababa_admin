import Table, { Column } from "@/components/ui/Table";
import { Badge } from "@/components/ui/badge";
import { formatAmount, formatDate, getInitialsOfName } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useGetOrdersListQuery } from "@/redux/api/order/order.api";
import { Order, OrderItem } from "@/redux/api/order/order.type";
import { User } from "@/redux/api/user/user.type";

const OrdersTable = () => {
	const { data: orders, isLoading } = useGetOrdersListQuery({});
	console.log(orders);

	const statusFormatter = (cell: string) => {
		switch (cell) {
			case "Annulé":
				return <Badge className="bg-red-500">{cell}</Badge>;
			case "En cours":
				return <Badge className="bg-teal-500">{cell}</Badge>;
			case "Livré":
				return <Badge className="bg-th-primary">{cell}</Badge>;
			default:
				return <Badge>{cell}</Badge>;
		}
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

	const orderItemsFormatter = (cell: OrderItem[]) => {
		return (
			<div>
				{cell.map((item) => item?.product?.name).join(", ")}
			</div>
		);
	};

	const redirectFormatter = (cell: string) => {
		return <Link to={`detail/${cell}`}>{cell}</Link>;
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
