import { InputSearch } from "@/components/ui/input";
import ShopsTable from "./ShopsTable";
import { useSearch } from "@/hooks/hooks";

const Shops = () => {
	const { search, handleSearch } = useSearch();

	return (
		<>
			<div className="flex flex-col md:flex-row md:items-center gap-2 justify-between mb-8">
				<h3 className="text-dark font-semibold">
					Toutes les boutiques
				</h3>
				<InputSearch
					placeholder="Recherchez par nom"
					onChange={handleSearch}
				/>
			</div>
			<div className="app-card">
				<ShopsTable q={search} />
			</div>
		</>
	);
};

export default Shops;
