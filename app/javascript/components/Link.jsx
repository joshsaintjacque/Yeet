import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const Link = ({ href, block, children }) => {
  return (
    <InertiaLink
      href={href}
      className={`transition duration-200 ease-in-out rounded ${
        block
          ? "py-2 px-3 text-white bg-indigo-600 hover:bg-indigo-400"
          : "text-indigo-600 hover:text-indigo-400"
      }`}
    >
      {children}
    </InertiaLink>
  );
};

export default Link;
