import { InputSearch } from "@/components/ui/input";
import { useSearch } from "@/hooks/hooks";
import OrdersTable from "./OrdersTable";

const SupplierOrders = () => {
	const { search, handleSearch } = useSearch();
	return (
		<>
			<div className="flex flex-col md:flex-row md:items-center gap-2 justify-between mb-8">
				<h3 className="text-dark font-semibold">Orders</h3>
				<InputSearch
					placeholder="Search by order number"
					onChange={handleSearch}
				/>
			</div>
			<OrdersTable order_number={search} />
		</>
	);
};

export default SupplierOrders;
