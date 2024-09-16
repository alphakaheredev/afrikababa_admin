import React from "react";
import CategoriesTable from "./CategoriesTable";
import { InputSearch } from "@/components/ui/input";
import { addAdminPrefix } from "@/lib/utils";
import { adminPaths } from "@/routes/paths";
import { ButtonAddLink } from "@/components/ui/button";
import { useSearch } from "@/hooks/hooks";

const Categories = () => {
	const { search, handleSearch } = useSearch();

	return (
		<React.Fragment>
			<div className="flex items-center justify-between mb-8">
				<h3 className="text-dark font-semibold">
					Toutes les catégories
				</h3>
				<div className="flex items-center justify-end gap-3 lg:w-2/3">
					<InputSearch
						placeholder="Recherchez par nom"
						onChange={handleSearch}
					/>
					<ButtonAddLink
						to={addAdminPrefix(adminPaths.addCategory)}
					>
						Ajouter une catégorie
					</ButtonAddLink>
				</div>
			</div>
			<CategoriesTable q={search} />
		</React.Fragment>
	);
};

export default Categories;
