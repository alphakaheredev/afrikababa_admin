import { InputSearch } from "@/components/ui/input";
import OrdersTable from "./OrdersTable";
import { useSearch } from "@/hooks/hooks";

const Orders = () => {
  const { search, handleSearch } = useSearch();
  return (
		<>
			<div className="flex items-center justify-between mb-8">
				<h3 className="text-dark font-semibold">Commandes</h3>
				<InputSearch
					placeholder="Recherchez par numéro de suivi"
					onChange={handleSearch}
				/>
			</div>
			<OrdersTable order_number={search} />
		</>
  );
};

export default Orders;
