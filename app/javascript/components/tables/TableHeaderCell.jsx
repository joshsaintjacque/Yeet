import React from "react";

const TableHeaderCell = ({ className, colSpan, children }) => {
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
