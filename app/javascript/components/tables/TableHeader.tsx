import React, { FC } from "react";

interface TableHeaderProps {
  children: React.ReactNode;
}

const TableHeader: FC<TableHeaderProps> = ({ children }) => {
  return (
    <thead className="bg-gray-50">
      <tr>{children}</tr>
    </thead>
  );
};

export default TableHeader;
