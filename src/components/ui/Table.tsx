import { AiOutlineExclamationCircle } from "react-icons/ai";
import TableSkeleton from "../common/TableSkeleton";

type Formatter<T> = (cell: any, row: T) => any;

export interface Column<T> {
	header: string;
	name: keyof T | "actions";
	formatter?: Formatter<T>;
}

interface TableProps<T> {
	data?: T[];
	columns: Column<T>[];
	isLoading?: boolean;
}

const Table = <T,>({ data, columns, isLoading }: TableProps<T>) => {
	if (!isLoading) {
		return (
			<div className="overflow-x-auto">
				<table className="min-w-full bg-white border border-[#E4E4E4]">
					<thead>
						<tr>
							{columns.map((column, index) => (
								<th
									key={index}
									className="px-4 py-3 border-b text-[#060506] font-semibold text-left bg-[#E4E4E4] text-sm"
								>
									{column.header}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{data && data.length > 0 ? (
							<>
								{data.map((row, rowIndex) => (
									<tr
										key={rowIndex}
										className="border-b border-dashed"
									>
										{columns.map(
											(
												column,
												colIndex
											) => {
												const cell =
													column.name ===
													"actions"
														? undefined
														: row[
																column
																	.name
														  ];
												return (
													<td
														key={
															colIndex
														}
														className="px-4 py-3 text-[#909090] text-[13px] text-left"
													>
														{column.formatter
															? column.formatter(
																	cell,
																	row
															  )
															: cell}
													</td>
												);
											}
										)}
									</tr>
								))}
							</>
						) : (
							<tr>
								<td
									colSpan={columns.length}
									className="p-5"
								>
									<div className="text-center bg-blue-50 border-l-[6px] border-blue-800 rounded py-3 flex items-center px-4 gap-5">
										<AiOutlineExclamationCircle
											fontSize={28}
										/>
										<span className="w-full text-center">
											Aucune donnée
											trouvée
										</span>
									</div>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		);
	}
	return <TableSkeleton columns={columns.map((column) => column.header)} />;
};

export default Table;
