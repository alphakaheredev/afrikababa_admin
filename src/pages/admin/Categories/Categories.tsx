import React from "react";
import CategoriesTable from "./CategoriesTable";
import { InputSearch } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { addAdminPrefix } from "@/lib/utils";
import { adminPaths } from "@/routes/paths";

const Categories = () => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-dark font-semibold">Toutes les catégories</h3>
        <div className="flex items-center justify-end gap-3 lg:w-2/3">
          <InputSearch placeholder="Recherchez par nom" />
          <Link
            to={addAdminPrefix(adminPaths.addCategory)}
            className="bg-dark p-2 text-white whitespace-nowrap font-normal text-sm leading-5"
          >
            Ajouter une catégorie
          </Link>
        </div>
      </div>
      <CategoriesTable />
    </React.Fragment>
  );
};

export default Categories;
