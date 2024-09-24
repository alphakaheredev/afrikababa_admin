import { ButtonAdd, ButtonDelete, ButtonEdit } from "@/components/ui/button";
import Table, { Column } from "@/components/ui/Table";
import { useModal } from "@/hooks/hooks";
import { useDelete } from "@/hooks/useDelete";
import {
	useGetPaymentMethodQuery,
	useDeletePaymentMethodMutation,
} from "@/redux/api/payment/payment.api";
import { PaymentMethod } from "@/redux/api/payment/payment.type";
import PaymentMethodModal from "./PaymentMethodModal";

function Delete({ item }: { item: PaymentMethod }) {
	const [deleteItem, { isSuccess, isError, error }] =
		useDeletePaymentMethodMutation();
	const onDelete = useDelete<PaymentMethod>({
		item,
		deleteItem,
		isSuccess,
		isError,
		error,
		successMessage: "Moyen de paiement supprimé",
	});
	return <ButtonDelete onClick={onDelete} />;
}

const PaymentMethodTable = () => {
	const { data: result, isLoading } = useGetPaymentMethodQuery({});
	const { openModal, closeModal, item, openEditModal, isOpen } =
		useModal<PaymentMethod>();

	const actionFormatter = (_cell: string, row: PaymentMethod) => (
		<div className="flex space-x-2">
			<ButtonEdit onClick={() => openEditModal(row)} />
			<Delete item={row} />
		</div>
	);

	const logoFormatter = (_cell: string, row: PaymentMethod) => (
		<img
			src={row.logo_url}
			alt={row.method_name}
			className="w-10 h-10 rounded-full"
		/>
	);

	const columns: Column<PaymentMethod>[] = [
		{
			header: "Identifiant",
			name: "id",
			formatter: (value: string) => `#ID: ${value}`,
		},
		{ header: "Nom", name: "method_name" },
		{ header: "Logo", name: "logo", formatter: logoFormatter },
		{ header: "Action", name: "id", formatter: actionFormatter },
	];

	return (
		<>
			<div className="flex items-center justify-end gap-3 mb-5">
				<ButtonAdd onClick={openModal}>
					Ajouter un moyen de paiement
				</ButtonAdd>
			</div>
			<Table<PaymentMethod>
				data={result?.data}
				columns={columns}
				isLoading={isLoading}
			/>
			<PaymentMethodModal
				isOpen={isOpen}
				close={closeModal}
				item={item}
			/>
		</>
	);
};

export default PaymentMethodTable;
