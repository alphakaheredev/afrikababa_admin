import WindrawRequestTable from "./WindrawRequestTable";

const WindrawRequest = () => {
	return (
		<>
			<div className="flex flex-col md:flex-row md:items-center gap-2 justify-between mb-8">
				<h3 className="text-dark font-semibold">
					Demandes de retrait
				</h3>
			</div>
			<WindrawRequestTable />
		</>
	);
};

export default WindrawRequest;
