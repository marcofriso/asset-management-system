interface TabsHeaderProps {
  tabs: string[];
  setActiveTab: (selectedTab: string) => void;
  activeTab: string;
}

const TabsHeader: React.FC<TabsHeaderProps> = ({
  tabs,
  activeTab,
  setActiveTab,
}) => {
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex mt-5 w-full border rounded-lg bg-slate-100 cursor-pointer text-md text-slate-600 font-medium">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`px-5 py-1 w-full text-center ${
            tab === activeTab ? "bg-white border rounded-lg text-slate-800" : ""
          }`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default TabsHeader;
