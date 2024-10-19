const Tab = ({
  active,
  children,
}: {
  active: boolean;
  children: React.ReactNode;
}) => {
  if (!active) return null;
  return <div className="w-full">{children}</div>;
};

export default Tab;
