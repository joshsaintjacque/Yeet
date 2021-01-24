import React from "react";

const Button = ({ onClick, danger, className, block, children }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        danger
          ? "border-red-600 text-red-600 hover:bg-red-600"
          : "border-indigo-600 text-indigo-600 hover:bg-indigo-600"
      } ${
        block ? "py-2" : ""
      } hover:text-white rounded px-3 transition duration-200 ease-in-out border-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
