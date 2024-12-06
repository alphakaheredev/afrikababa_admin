import Table, { Column } from "@/components/ui/Table";
import { ButtonAdd, ButtonDelete } from "@/components/ui/button";
import { useModal, useSearch } from "@/hooks/hooks";
import { formatRole, getUserAvatarUrl, getUserName } from "@/lib/utils";
import {
	useDeleteCountryForwarderMutation,
	useGetForwardersListQuery,
} from "@/redux/api/user/user.api";
import { CountryForwarder, ROLE, User } from "@/redux/api/user/user.type";
import UserModal from "./UserModal";
import { InputSearch } from "@/components/ui/input";
import { toast } from "react-toastify";
import { useState } from "react";
import countries from "@/lib/countries.json";
import { colors } from "@/constants/Colors";
import Swal from "sweetalert2";

const rolesFormatter = (role: ROLE) => (
	<span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
		{formatRole(role)}
	</span>
);

const ForwardersTable = () => {
	const { search, handleSearch } = useSearch();
	const { isOpen, item, closeModal, openModal } = useModal<User>();
	const [modalRole, setModalRole] = useState<ROLE>(ROLE.admin);

	const { data: result, isLoading } = useGetForwardersListQuery({
		q: search,
	});
	const [deleteItem] = useDeleteCountryForwarderMutation();

	const handleDelete = (id: number) => {
		Swal.fire({
			title: "Voulez-vous vraiment supprimer ce transitaire ?",
			icon: "question",
			showCancelButton: true,
			confirmButtonText: "OUI",
			cancelButtonText: "NON",
			showLoaderOnConfirm: true,
			iconColor: colors.info,
			confirmButtonColor: colors.danger,
			preConfirm: async () => {
				const res = await deleteItem(id);
				if ("data" in res) {
					toast.success("Transitaire supprimé avec succès");
				} else {
					toast.error("Une erreur est survenue");
				}
			},
		});
	};

	const actionFormatter = (_cell: string, row: CountryForwarder) => (
		<div className="flex items-center gap-3">
			<ButtonDelete onClick={() => handleDelete(row.id)} />
		</div>
	);

	// @ts-ignore
	const columns: Column<CountryForwarder>[] = [
		{
			header: "Identifiant",
			name: "id",
			formatter: (value: string) => `#ID: ${value}`,
		},
		{
			header: "Nom",
			name: "firstname",
			formatter: (value: string, row: CountryForwarder) => (
				<div className="flex items-center space-x-3">
					<img
						src={getUserAvatarUrl(
							row?.forwarder?.avatar_url
						)}
						alt={value}
						className="w-8 h-8 rounded-full"
					/>
					<div className="text-dark">
						<div>{getUserName(row?.forwarder)}</div>
						<div>{row?.forwarder?.email}</div>
					</div>
				</div>
			),
		},
		{
			header: "Téléphone",
			name: "forwarder",
			formatter: (cell: User) => cell?.phone_number,
		},
		{
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
		{ header: "Action", name: "id", formatter: actionFormatter },
	].filter(Boolean);
	return (
		<>
			<div className="flex flex-col md:flex-row md:items-center gap-2 justify-between mb-8">
				<h3 className="text-dark font-semibold">
					Transitaires
				</h3>
				<div className="flex items-center flex-col md:flex-row justify-end gap-3 lg:w-2/3">
					<InputSearch
						placeholder="Recherchez par nom ou email"
						onChange={handleSearch}
					/>

					<ButtonAdd
						onClick={() => {
							setModalRole(ROLE.forwarder);
							openModal();
						}}
					>
						Ajoutez un transitaire
					</ButtonAdd>
				</div>
			</div>
			<Table<CountryForwarder>
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

export default ForwardersTable;
