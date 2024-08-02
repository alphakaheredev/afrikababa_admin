import { InputSearch } from "@/components/ui/input";
import React from "react";
import ProductsTable from "./ProductsTable";

const ProductOutOfStock = () => {
  return (
    <React.Fragment>
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-dark font-semibold">
          Produits en rupture de stock
        </h3>
        <div className="flex items-center gap-3">
          <InputSearch placeholder="Recherchez par nom" />
        </div>
      </div>
      <ProductsTable />
    </React.Fragment>
  );
};

export default ProductOutOfStock;
