import React from "react";

const Tab = ({
  active,
  children,
}: {
  active: boolean;
  children: React.ReactNode;
}) => {
  if (!active) return null;
  return <div>{children}</div>;
};

export default Tab;
