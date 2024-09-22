import { InputSearch } from "@/components/ui/input";
import ProductsTable from "./ProductsTable";
import FilterProductSection from "@/components/common/FilterProductSection";
import { useSearch } from "@/hooks/hooks";
import { useState } from "react";

const Products = () => {
	const { search, handleSearch } = useSearch();
	const [filter, setFilter] = useState<{
		category?: number;
		shop?: number;
	}>();

	const handleFilter = (
		e: React.ChangeEvent<HTMLSelectElement>,
		type: "category" | "shop"
	) => {
		console.log("change");
		if (type === "category") {
			setFilter({
				...filter,
				category: parseInt(e.currentTarget.value),
			});
		} else {
			setFilter({
				...filter,
				shop: parseInt(e.currentTarget.value),
			});
		}
	};
	console.log(filter);

	return (
		<>
			<div className="flex items-center justify-between mb-8">
				<h3 className="text-dark font-semibold">
					Touts les produits
				</h3>
				<div className="flex items-center justify-end gap-3 lg:w-2/3">
					<InputSearch
						placeholder="Recherchez par nom"
						onChange={handleSearch}
					/>
				</div>
			</div>
			<FilterProductSection handleFilter={handleFilter} />
			<ProductsTable
				q={search}
				shop_id={filter?.shop}
				category_id={filter?.category}
			/>
		</>
	);
};

export default Products;
