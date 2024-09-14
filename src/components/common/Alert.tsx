import { AiOutlineExclamationCircle } from "react-icons/ai";

const Alert = () => {
	return (
		<div className="text-center bg-blue-50 border-l-[6px] border-blue-800 rounded py-3 flex items-center px-4 gap-5">
			<AiOutlineExclamationCircle fontSize={28} />
			<span className="w-full text-center">
				Aucune donnée trouvée
			</span>
		</div>
	);
};

export default Alert;
