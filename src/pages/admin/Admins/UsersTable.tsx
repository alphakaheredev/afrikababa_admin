import Table, { Column } from "@/components/ui/Table";
import { ButtonAdd, ButtonDelete, ButtonEdit } from "@/components/ui/button";
import { useModal, useSearch } from "@/hooks/hooks";
import { useDelete } from "@/hooks/useDelete";
import { formatRole, getUserAvatarUrl, getUserName } from "@/lib/utils";
import {
	useDeleteUserMutation,
	useGetUsersListQuery,
	useUpdateUserStatusMutation,
} from "@/redux/api/user/user.api";
import { ROLE, User } from "@/redux/api/user/user.type";
import UserModal from "./UserModal";
import { InputSearch } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { toast } from "react-toastify";
import { useState } from "react";
import countries from "@/lib/countries.json";

const rolesFormatter = (role: ROLE) => (
	<span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
		{formatRole(role)}
	</span>
);

export function Delete({ item, role }: { item: User; role: ROLE }) {
	const [deleteItem, { isSuccess, isError, error }] =
		useDeleteUserMutation();
	const onDelete = useDelete<User>({
		item,
		deleteItem,
		isSuccess,
		isError,
		error,
		successMessage: `${
			role === ROLE.admin ? "Administrateur" : "Transitaire"
		} supprimé`,
	});
	return <ButtonDelete onClick={onDelete} />;
}

const UsersTable = ({ role }: { role: ROLE }) => {
	const { search, handleSearch } = useSearch();
	const { isOpen, item, closeModal, openEditModal, openModal } =
		useModal<User>();
	const [modalRole, setModalRole] = useState<ROLE>(ROLE.admin);

	const { data: result, isLoading } = useGetUsersListQuery({
		role,
		q: search,
	});
	const [updateUserStatus] = useUpdateUserStatusMutation();

	const actionFormatter = (_cell: string, row: User) => (
		<div className="flex items-center gap-3">
			{role === ROLE.admin && (
				<ButtonEdit onClick={() => openEditModal(row)} />
			)}
			<Delete item={row} role={role} />
		</div>
	);

	const statusFormatter = (status: number, row: User) => {
		const handleStatusChange = async (checked: boolean) => {
			const res = await updateUserStatus({
				id: row.id,
				status: checked ? 1 : 0,
			});
			if ("data" in res) {
				toast.success("Statut de l'utilisateur modifié");
			} else {
				toast.error("Une erreur est survenue");
			}
		};
		return (
			<Switch
				checked={status === 1}
				onCheckedChange={handleStatusChange}
			/>
		);
	};

	// @ts-ignore
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
		role === ROLE.forwarder && {
			header: "Pays",
			name: "country",
			formatter: (value: string) =>
				countries[value as keyof typeof countries] || "",
		},
		{
			header: "Type",
			name: "role",
			formatter: rolesFormatter,
		},
		{ header: "Statut", name: "status", formatter: statusFormatter },
		{ header: "Action", name: "id", formatter: actionFormatter },
	].filter(Boolean);
	return (
		<>
			<div className="flex flex-col md:flex-row md:items-center gap-2 justify-between mb-8">
				<h3 className="text-dark font-semibold">
					{formatRole(role)}s
				</h3>
				<div className="flex items-center flex-col md:flex-row justify-end gap-3 lg:w-2/3">
					<InputSearch
						placeholder="Recherchez par nom ou email"
						onChange={handleSearch}
					/>
					{role === ROLE.admin && (
						<ButtonAdd
							onClick={() => {
								setModalRole(ROLE.admin);
								openModal();
							}}
						>
							Ajoutez un administrateur
						</ButtonAdd>
					)}
					{role === ROLE.forwarder && (
						<ButtonAdd
							onClick={() => {
								setModalRole(ROLE.forwarder);
								openModal();
							}}
						>
							Ajoutez un transitaire
						</ButtonAdd>
					)}
				</div>
			</div>
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
					role={modalRole}
				/>
			)}
		</>
	);
};

export default UsersTable;
