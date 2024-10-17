"use client";

import React, { useState } from "react";

interface TabsProps {
  tabs: string[];
  onTabChange: (selectedTab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
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

export default Tabs;
