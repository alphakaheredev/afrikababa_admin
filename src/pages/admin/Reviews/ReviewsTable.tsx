import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Table, { Column } from "@/components/ui/Table";
import { Review } from "@/redux/api/product/product.type";
import { User } from "@/redux/api/user/user.type";
import { getUserName } from "@/lib/utils";

const actionFormatter = (_cell: null, row: Review) => (
	<div className="flex space-x-2">
		<button
			onClick={() => console.log("Edit", row)}
			className="text-blue-500 hover:underline"
		>
			<FaEdit />
		</button>
		<button
			onClick={() => console.log("Delete", row)}
			className="text-red-500 hover:underline"
		>
			<FaTrashAlt />
		</button>
	</div>
);

const ReviewsTable = ({
	reviews,
	isLoading,
}: {
	reviews?: Review[];
	isLoading?: boolean;
}) => {
	const columns: Column<Review>[] = [
		{
			header: "Identifiant",
			name: "id",
			formatter: (value: string) => `#ID: ${value}`,
		},
		{ header: "Note", name: "rating" },
		{ header: "Commentaire", name: "comment" },
		{
			header: "Auteur",
			name: "user",
			formatter: (value: User) => getUserName(value),
		},
		{ header: "Action", name: "id", formatter: actionFormatter },
	];

	return (
		<>
			<Table<Review>
				data={reviews}
				columns={columns}
				isLoading={isLoading}
			/>
		</>
	);
};

export default ReviewsTable;
