import { useState } from "react";
import { InputSearch } from "@/components/ui/input";
import ProductsTable from "./ProductsTable";
import { useSearch } from "@/hooks/hooks";
import { ButtonAddLink } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";
import { isSupplier } from "@/routes/routerUtils";
import { User } from "@/redux/api/user/user.type";
import FilterProductSection from "@/components/common/FilterProductSection";
import { useGetProductsListQuery } from "@/redux/api/product/product.api";

const Products = () => {
	const { user } = useAppSelector((state) => state.user);
	const { search, handleSearch } = useSearch();
	const [filter, setFilter] = useState<{
		category?: number;
		shop?: number;
	}>();

	const handleFilter = (
		e: React.ChangeEvent<HTMLSelectElement>,
		type: "category" | "shop"
	) => {
		if (type === "category") {
			setFilter({
				...filter,
				category:
					e.currentTarget.value !== "Toutes"
						? parseInt(e.currentTarget.value)
						: undefined,
			});
		} else {
			setFilter({
				...filter,
				shop:
					e.currentTarget.value !== "Toutes"
						? parseInt(e.currentTarget.value)
						: undefined,
			});
		}
	};

	const { data: result, isLoading } = useGetProductsListQuery({
		q: search,
		shop_id: filter?.shop,
		category_id: filter?.category,
	});

	return (
		<>
			<FilterProductSection
				handleFilter={handleFilter}
				user={user as User}
			/>
			<div className="flex flex-col md:flex-row md:items-center gap-2 justify-between mb-8">
				<h3 className="text-dark font-semibold">
					Touts les produits
				</h3>
				<div className="flex items-center justify-end gap-3 lg:w-2/3">
					<InputSearch
						placeholder="Recherchez par nom"
						onChange={handleSearch}
					/>
					{isSupplier(user as User) && (
						<ButtonAddLink to="ajouter">
							Ajouter un produit
						</ButtonAddLink>
					)}
				</div>
			</div>

			<ProductsTable data={result?.data} isLoading={isLoading} />
		</>
	);
};

export default Products;
