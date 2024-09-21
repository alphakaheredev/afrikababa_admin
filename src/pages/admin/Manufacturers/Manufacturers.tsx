import { ROLE } from "@/redux/api/user/user.type";
import UsersTable from "../Admins/UsersTable";

const Manufacturers = () => {
	return <UsersTable role={ROLE.supplier} />;
};

export default Manufacturers;
