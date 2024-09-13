const TableSkeleton = ({ columns }: { columns: string[] }) => {
	return (
		<div className="overflow-x-auto mb-5">
			<table className="w-full">
				<thead>
					<tr>
						{columns.map((column, index) => (
							<th key={index}>{column}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{[...Array(5)].map((_, rowIndex) => (
						<tr key={rowIndex}>
							{columns.map((_, colIndex) => (
								<td
									key={`${rowIndex}-${colIndex}`}
									className="animate-pulse"
								>
									<div className="w-full h-8  bg-slate-200" />
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TableSkeleton;
