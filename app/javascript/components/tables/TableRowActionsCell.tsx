import React, { FC } from "react";

interface TableRowActionsCellProps {
  children: React.ReactNode;
  className?: string;
}

const TableRowActionsCell: FC<TableRowActionsCellProps> = ({
  className,
  children,
}) => {
  return (
    <td
      className={`px-6 py-4 whitespace-nowrap text-right text-sm font-medium ${className}`}
    >
      {children}
    </td>
  );
};

export default TableRowActionsCell;
