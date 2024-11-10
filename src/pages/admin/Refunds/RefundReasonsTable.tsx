import Table, { Column } from "@/components/ui/Table";
import { Badge } from "@/components/ui/badge";
import {
	cn,
	formatAmount,
	formatRefundStatus,
	formatRefundStatusToBadge,
	getUserName,
} from "@/lib/utils";
import {
	useChangeRefundStatusMutation,
	useGetRefundsListQuery,
} from "@/redux/api/refund/refund.api";
import { Refund, RefundStatus } from "@/redux/api/refund/refund.type";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Order } from "@/redux/api/order/order.type";

const RefundReasonsTable = () => {
	const { data: result, isLoading } = useGetRefundsListQuery({});
	console.log(result);
	const [changeRefundStatus] = useChangeRefundStatusMutation();

	const changeStatus = async (status: RefundStatus, row: Refund) => {
		const res = await changeRefundStatus({ id: row.id, status });
		if ("data" in res) {
			console.log(res.data);
			toast.success("Statut de commande modifié");
		}
		if (res.error) {
			toast.error("Une erreur est survenue");
		}
	};

	const orderNumberFormatter = (cell: Order) => {
		return (
			<Link
				to={`/admin/commandes/${cell?.order_number}`}
				state={cell}
				className="hover:underline cursor-pointer"
			>
				{cell?.order_number}
			</Link>
		);
	};

	const actionFormatter = (_cell: string, row: Refund) => {
		return (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button className="flex items-center gap-2 bg-dark text-white px-3 py-2">
						<span>Changer le statut</span>
						<ChevronDownIcon className="w-4 h-4" />
					</button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					{Object.values(RefundStatus).map((status) => (
						<DropdownMenuItem
							key={status}
							onClick={() =>
								changeStatus(status, row)
							}
						>
							<span>
								{formatRefundStatus(status)}
							</span>
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		);
	};
	const statusFormatter = (cell: RefundStatus) => {
		return (
			<Badge className={cn(formatRefundStatusToBadge(cell))}>
				{formatRefundStatus(cell)}
			</Badge>
		);
	};

	const columns: Column<Refund>[] = [
		{
			header: "Identifiant",
			name: "id",
			formatter: (value: string) => `#ID: ${value}`,
		},
		{
			header: "Client",
			name: "user",
			formatter: (cell) => getUserName(cell),
		},
		{ header: "Motif", name: "reason" },
		{
			header: "Montant",
			name: "amount",
			formatter: (cell) => formatAmount(cell),
		},
		{
			header: "Date de demande",
			name: "created_at",
			formatter: (cell) =>
				new Date(cell).toLocaleDateString("fr-FR"),
		},
		{
			header: "Commande",
			name: "order",
			formatter: orderNumberFormatter,
		},
		{
			header: "Statut",
			name: "status",
			formatter: (cell) => statusFormatter(cell),
		},
		{ header: "Action", name: "id", formatter: actionFormatter },
	];

	return (
		<Table<Refund>
			data={result?.data}
			columns={columns}
			isLoading={isLoading}
		/>
	);
};

export default RefundReasonsTable;
