import React, { FC } from "react";

interface TableProps {
  children: React.ReactNode;
}

const Table: FC<TableProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="sm:min-w-full divide-y divide-gray-200">
              {children}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
