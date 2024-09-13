import Table, { Column } from "@/components/ui/Table";
import { ButtonDelete, ButtonEdit } from "@/components/ui/button";
import { useModal } from "@/hooks/hooks";
import { useDelete } from "@/hooks/useDelete";
import { formatRole, getUserAvatarUrl, getUserName } from "@/lib/utils";
import {
	useDeleteUserMutation,
	useGetUsersListQuery,
} from "@/redux/api/user/user.api";
import { ROLE, User } from "@/redux/api/user/user.type";
import UserModal from "./UserModal";

const rolesFormatter = (role: ROLE) => (
	<span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
		{formatRole(role)}
	</span>
);

export function Delete({ item }: { item: User }) {
	const [deleteItem, { isSuccess, isError, error }] =
		useDeleteUserMutation();
	const onDelete = useDelete<User>({
		item,
		deleteItem,
		isSuccess,
		isError,
		error,
		successMessage: "Administrateur supprimé",
	});
	return <ButtonDelete onClick={onDelete} />;
}

const UsersTable = () => {
	const { data: result, isLoading } = useGetUsersListQuery({});
	const { isOpen, item, closeModal, openEditModal } = useModal<User>();
	// console.log(result);

	const actionFormatter = (_cell: string, row: User) => (
		<div className="flex items-center gap-3">
			<ButtonEdit onClick={() => openEditModal(row)} />
			<Delete item={row} />
		</div>
	);

	// const statusFormatter = (status: string) => {
	// 	const statusClass =
	// 		status === "Actif" ? "bg-green-500" : "bg-red-500";
	// 	return <Badge className={statusClass}>{status}</Badge>;
	// };

	const columns: Column<User>[] = [
		{
			header: "Identifiant",
			name: "id",
			formatter: (value: string) => `#ID: ${value}`,
		},
		{
			header: "Nom",
			name: "firstname",
			formatter: (value: string, row: User) => (
				<div className="flex items-center space-x-3">
					<img
						src={getUserAvatarUrl(row.avatar_url)}
						alt={value}
						className="w-8 h-8 rounded-full"
					/>
					<div className="text-dark">
						<div>{getUserName(row)}</div>
						<div>{row.email}</div>
					</div>
				</div>
			),
		},
		{
			header: "Téléphone",
			name: "phone_number",
		},
		{
			header: "Type",
			name: "role",
			formatter: rolesFormatter,
		},
		// { header: "Statut", name: "status", formatter: statusFormatter },
		{ header: "Action", name: "id", formatter: actionFormatter },
	];

	return (
		<>
			<Table<User>
				data={result?.data}
				columns={columns}
				isLoading={isLoading}
			/>
			{isOpen && (
				<UserModal
					item={item}
					isOpen={isOpen}
					close={closeModal}
				/>
			)}
		</>
	);
};

export default UsersTable;
