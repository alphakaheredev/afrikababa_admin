import UsersTable from "../Admins/UsersTable";
import { ROLE } from "@/redux/api/user/user.type";

const Transitaires = () => {
	return (
		<>
			<UsersTable role={ROLE.forwarder} />
		</>
	);
};

export default Transitaires;
