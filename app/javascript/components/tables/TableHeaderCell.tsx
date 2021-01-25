import React, { FC } from "react";

interface TableHeaderCellProps {
  children?: React.ReactNode;
  className?: string;
  colSpan?: number;
}

const TableHeaderCell: FC<TableHeaderCellProps> = ({
  className,
  colSpan,
  children,
}) => {
  return (
    <th
      scope="col"
      className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${className}`}
      colSpan={colSpan}
    >
      {children}
    </th>
  );
};

export default TableHeaderCell;
