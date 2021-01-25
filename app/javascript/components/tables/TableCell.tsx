import React, { FC } from "react";

interface TableCellProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: number;
}

const TableCell: FC<TableCellProps> = ({ className, colSpan, children }) => {
  return (
    <td className={`px-6 py-4 ${className}`} colSpan={colSpan}>
      <div className="flex items-center">
        <div className="text-sm font-medium text-gray-900 whitespace-nowrap overflow-ellipsis overflow-hidden max-w-md">
          {children}
        </div>
      </div>
    </td>
  );
};

export default TableCell;
