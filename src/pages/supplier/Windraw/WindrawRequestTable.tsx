import Table, { Column } from "@/components/ui/Table";
import { ButtonDelete } from "@/components/ui/button";
import { formatPriceToUsd, getUserName } from "@/lib/utils";
import { useGetWithdrawalRequestsByShopQuery } from "@/redux/api/windraw/windraw.api";
import { WindrawRequest } from "@/redux/api/windraw/windraw.type";
import { useAppSelector } from "@/redux/hooks";
import { ButtonAdd } from "@/components/ui/button";
import { useToggle } from "@/hooks/hooks";
import WindrawRequestModal from "./WindrawRequestModal";

const WindrawRequestTable = () => {
	const { shop } = useAppSelector((state) => state.user);
	const { data: result, isLoading } = useGetWithdrawalRequestsByShopQuery({
		shop_id: shop?.id,
	});
	const { isOpen, close, open } = useToggle();

	const actionFormatter = () => <ButtonDelete />;

	const columns: Column<WindrawRequest>[] = [
		{
			header: "Identifiant",
			name: "id",
			formatter: (value: string) => `#ID: ${value}`,
		},
		{
			header: "Fournisseur",
			name: "shop",
			formatter: (_cell: string, row: WindrawRequest) =>
				getUserName(row.shop.user),
		},
		{ header: "Montant", name: "amount" },
		{ header: "Méthode de paiement", name: "payment_methode" },
		{ header: "Statut", name: "status" },
		{ header: "Action", name: "id", formatter: actionFormatter },
	];

	return (
		<>
			<div className="flex flex-col md:flex-row md:items-center gap-2 justify-between mb-8">
				<h3 className="text-dark font-semibold">
					Demandes de retrait (Votre solde est de :{" "}
					{formatPriceToUsd(shop?.balance || 0)})
				</h3>
				<div className="flex items-center justify-end gap-3 lg:w-2/3">
					<ButtonAdd
						onClick={open}
						disabled={Number(shop?.balance) === 0}
						className={
							Number(shop?.balance) === 0
								? "cursor-not-allowed  bg-gray-300"
								: ""
						}
					>
						Effectuer une demande de retrait
					</ButtonAdd>
				</div>
			</div>
			<Table<WindrawRequest>
				data={result?.data}
				columns={columns}
				isLoading={isLoading}
			/>
			{isOpen && (
				<WindrawRequestModal isOpen={isOpen} close={close} />
			)}
		</>
	);
};

export default WindrawRequestTable;
