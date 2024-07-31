// Table.tsx
import React from "react";

interface Column {
  header: string;
  key: string;
}

interface TableProps {
  columns: Column[];
  data: Record<string, any>[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="py-3 px-4 border-b border-gray-200 bg-th-gray-e6 text-left text-sm font-semibold text-dark"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="py-3 px-4 border-b border-gray-200 text-sm text-gray-700"
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="py-3 px-4 border-b border-gray-200 text-sm text-dark text-center font-light"
              >
                Pas de données
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
