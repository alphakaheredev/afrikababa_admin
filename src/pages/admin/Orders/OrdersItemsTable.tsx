import Table, { Column } from "@/components/ui/Table";
import { formatAmount, getImageUrl } from "@/lib/utils";
import { OrderItem } from "@/redux/api/order/order.type";

const OrdersItemsTable = ({ data }: { data: OrderItem[] }) => {
	const nameProductFormatter = (_cell: string, row: OrderItem) => {
		return (
			<div className="flex items-center gap-2">
				<img
					src={getImageUrl(row?.product?.main_image_url)}
					alt={row?.product?.name}
					className="w-10 object-contain"
				/>
				<span>{row?.product?.name}</span>
			</div>
		);
	};
	const columns: Column<OrderItem>[] = [
		{
			header: "Code",
			name: "order_items_code",
			formatter: (cell) => cell,
		},
		{
			header: "Produit",
			name: "product",
			formatter: nameProductFormatter,
		},
		{
			header: "Prix",
			name: "price",
			formatter: (cell) => formatAmount(cell),
		},
		{
			header: "Quantité",
			name: "quantity",
			formatter: (cell) => cell,
		},
		{
			header: "Total",
			name: "quantity",
			formatter: (cell, row) =>
				formatAmount(Number(cell) * Number(row?.price)),
		},
		{
			header: "Boutique",
			name: "shop",
			formatter: (cell) => cell?.company_name,
		},
		{
			header: "Action",
			name: "actions",
		},
	];

	return <Table<OrderItem> data={data} columns={columns} />;
};

export default OrdersItemsTable;
