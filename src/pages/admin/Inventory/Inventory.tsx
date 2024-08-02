import { InputSearch } from "@/components/ui/input";
import InventoryTable from "./InventoryTable";
import FilterProductSection from "@/components/common/FilterProductSection";

const Inventory = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-dark font-semibold">Inventaire</h3>
        <div className="flex items-center justify-end gap-3 lg:w-2/3">
          <InputSearch placeholder="Recherchez par nom" />
        </div>
      </div>
      <FilterProductSection />
      <InventoryTable />
    </>
  );
};

export default Inventory;
