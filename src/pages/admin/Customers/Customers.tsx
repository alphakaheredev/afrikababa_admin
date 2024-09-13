import { ButtonAddLink } from "@/components/ui/button";
import { InputSearch } from "@/components/ui/input";
import { adminPaths } from "@/routes/paths";
import UsersTable from "../Admins/UsersTable";

const Customers = () => {
	return (
		<>
			<div className="flex items-center justify-between mb-8">
				<h3 className="text-dark font-semibold">Les clients</h3>
				<div className="flex items-center justify-end gap-3 lg:w-2/3">
					<InputSearch placeholder="Recherchez par nom" />
					<ButtonAddLink to={adminPaths.addCustomer}>
						Ajouter un client
					</ButtonAddLink>
				</div>
			</div>
			<UsersTable />
		</>
	);
};

export default Customers;
