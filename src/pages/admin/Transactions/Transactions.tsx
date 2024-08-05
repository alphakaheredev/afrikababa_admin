import { InputSearch } from "@/components/ui/input";
import TransactionsTable from "./TransactionsTable";

const Transactions = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-dark font-semibold">Transactions</h3>
        <InputSearch placeholder="Recherchez par nom" />
      </div>
      <TransactionsTable />
    </>
  );
};

export default Transactions;
