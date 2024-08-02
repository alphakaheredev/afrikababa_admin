type Formatter<T> = (cell: any, row: T) => any;

export interface Column<T> {
  header: string;
  name: keyof T | "actions";
  formatter?: Formatter<T>;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
}

const Table = <T,>({ data, columns }: TableProps<T>) => {
  return (
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
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="border-b border-dashed">
            {columns.map((column, colIndex) => {
              const cell =
                column.name === "actions" ? undefined : row[column.name];
              return (
                <td
                  key={colIndex}
                  className="px-4 py-3 text-[#909090] text-[13px] text-left"
                >
                  {column.formatter ? column.formatter(cell, row) : cell}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
