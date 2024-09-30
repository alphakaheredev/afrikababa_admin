import { InputSearch } from "@/components/ui/input";
import WindrawRequestTable from "./WindrawRequestTable";

const WindrawRequest = () => {
	return (
		<>
			<div className="flex flex-col md:flex-row md:items-center gap-2 justify-between mb-8">
				<h3 className="text-dark font-semibold">
					Demandes de retrait
				</h3>
				<div className="flex items-center flex-col md:flex-row justify-end gap-3 lg:w-2/3">
					<InputSearch placeholder="Recherchez par nom" />
				</div>
			</div>
			<WindrawRequestTable />
		</>
	);
};

export default WindrawRequest;
