import { InputSearch } from "@/components/ui/input";
import OrdersTable from "./OrdersTable";

const Orders = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-dark font-semibold">Commandes</h3>
        <InputSearch placeholder="Recherchez par numéro de suivi" />
      </div>
      <OrdersTable />
    </>
  );
};

export default Orders;
