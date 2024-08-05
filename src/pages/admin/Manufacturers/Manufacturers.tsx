import { InputSearch } from "@/components/ui/input";
import ManufacturersTable from "./ManufacturersTable";
import { ButtonAddLink } from "@/components/ui/button";
import { addAdminPrefix } from "@/lib/utils";
import { adminPaths } from "@/routes/paths";

const Manufacturers = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-dark font-semibold">Fabricants</h3>
        <div className="flex items-center justify-end gap-3 lg:w-2/3">
          <InputSearch placeholder="Recherchez par nomg" />
          <ButtonAddLink to={addAdminPrefix(adminPaths.addManufacturer)}>
            Ajoutez un frabricant
          </ButtonAddLink>
        </div>
      </div>
      <ManufacturersTable />
    </>
  );
};

export default Manufacturers;
