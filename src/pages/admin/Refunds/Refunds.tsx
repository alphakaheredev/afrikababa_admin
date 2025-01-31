import { InputSearch } from "@/components/ui/input";
import RefundReasonsTable from "./RefundReasonsTable";


const Refunds = () => {
	return (
		<>
			<div className="flex flex-col md:flex-row md:items-center gap-2 justify-between mb-8">
				<h3 className="text-dark font-semibold">
					Remboursement
				</h3>
				<div className="flex items-center flex-col md:flex-row justify-end gap-3 lg:w-2/3">
					<InputSearch placeholder="Recherchez par nom" />
				</div>
			</div>
			<RefundReasonsTable />
		</>
	);
};

export default Refunds;
