import React, { FC } from "react";

interface HeadlineProps {
  children: React.ReactNode;
}

const Headline: FC<HeadlineProps> = ({ children }) => {
  return <h1 className="text-3xl mb-3">{children}</h1>;
};

export default Headline;
