import React, { FC } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

interface LinkProps {
  children: React.ReactNode;
  href: string;
  method?: string;
  block?: boolean;
}

const Link: FC<LinkProps> = ({ href, method, block, children }) => {
  return (
    <InertiaLink
      href={href}
      method={method}
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
