import { InputSearch } from "@/components/ui/input";
import ProductsTable from "./ProductsTable";
import { Link } from "react-router-dom";
import { adminPaths } from "@/routes/paths";
import { addAdminPrefix } from "@/lib/utils";
import FilterProductSection from "./FilterProductSection";

const Products = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-dark font-semibold">Touts les produits</h3>
        <div className="flex items-center justify-end gap-3 lg:w-2/3">
          <InputSearch placeholder="Recherchez par nom" />
          <Link
            to={addAdminPrefix(adminPaths.productOutOfStock)}
            className="bg-dark p-2 text-white whitespace-nowrap font-normal text-sm leading-5"
          >
            Produits en rupture de stock
          </Link>
        </div>
      </div>
      <FilterProductSection />
      <ProductsTable />
    </>
  );
};

export default Products;
