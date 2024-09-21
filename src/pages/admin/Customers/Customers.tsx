import UsersTable from "../Admins/UsersTable";
import { ROLE } from "@/redux/api/user/user.type";

const Customers = () => {
	return (
		<>
			<UsersTable role={ROLE.customer} />
		</>
	);
};

export default Customers;
