import WindrawRequestTable from "./WindrawRequestTable";
import { ButtonAdd } from "@/components/ui/button";
import { useToggle } from "@/hooks/hooks";
import WindrawRequestModal from "./WindrawRequestModal";

const SupplierWindrawRequest = () => {
	const { isOpen, close, open } = useToggle();

	return (
		<>
			<div className="flex flex-col md:flex-row md:items-center gap-2 justify-between mb-8">
				<h3 className="text-dark font-semibold">
					Demandes de retrait
				</h3>
				<div className="flex items-center justify-end gap-3 lg:w-2/3">
					<ButtonAdd onClick={open}>
						Effectuer une demande de retrait
					</ButtonAdd>
				</div>
			</div>
			<WindrawRequestTable />
			{isOpen && (
				<WindrawRequestModal isOpen={isOpen} close={close} />
			)}
		</>
	);
};

export default SupplierWindrawRequest;
