import { InputSearch } from "@/components/ui/input";
import RefundReasonsTable from "./RefundReasonsTable";
import { ButtonAddLink } from "@/components/ui/button";
import { addAdminPrefix } from "@/lib/utils";
import { adminPaths } from "@/routes/paths";

const Refunds = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-dark font-semibold">Remboursement</h3>
        <div className="flex items-center justify-end gap-3 lg:w-2/3">
          <InputSearch placeholder="Recherchez par nom" />
          <ButtonAddLink to={addAdminPrefix(adminPaths.addRefund)}>
            Remboursements signalés
          </ButtonAddLink>
        </div>
      </div>
      <RefundReasonsTable />
    </>
  );
};

export default Refunds;
