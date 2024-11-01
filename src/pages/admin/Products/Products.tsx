import { InputSearch } from "@/components/ui/input";
import ProductsTable from "./ProductsTable";
import { useSearch } from "@/hooks/hooks";
import { ButtonAddLink } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";
import { isSupplier } from "@/routes/routerUtils";
import { User } from "@/redux/api/user/user.type";

const Products = () => {
	const { user } = useAppSelector((state) => state.user);
	const { search, handleSearch } = useSearch();

	return (
		<>
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

			<ProductsTable q={search} />
		</>
	);
};

export default Products;
