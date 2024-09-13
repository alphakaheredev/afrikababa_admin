import { InputSearch } from "@/components/ui/input";
import StoresTable from "../Stores/StoresTable";

const Shops = () => {
	return (
		<>
			<div className="flex items-center justify-between mb-8">
				<h3 className="text-dark font-semibold">
					Touts les magasins
				</h3>
				<InputSearch placeholder="Recherchez par nom" />
			</div>
			<div className="app-card">
				<StoresTable />
			</div>
		</>
	);
};

export default Shops;
