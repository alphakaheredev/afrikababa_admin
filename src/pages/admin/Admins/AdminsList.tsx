import { ROLE } from "@/redux/api/user/user.type";
import UsersTable from "./UsersTable";

const AdminsList = () => {
	return (
		<>
			<UsersTable role={ROLE.admin} />
		</>
	);
};

export default AdminsList;
