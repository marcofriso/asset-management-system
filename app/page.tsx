"use client";

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";

const Home = () => {
  const [query, setQuery] = useState<string>("");

  const handleTabChange = (selectedTab: string) => {
    console.log("Selected tab:", selectedTab);
  };

  return (
    <div className="mx-auto max-w-[1000px]">
      <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20">
        <h1 className="text-5xl font-bold text-w">Library</h1>
        <p>Browse for assets needed to report and present analysis</p>
        <SearchBar query={query} setQuery={setQuery} />
        <Tabs
          tabs={["Featured", "KPI", "Layouts", "Storyboards"]}
          onTabChange={handleTabChange}
        />
      </div>
    </div>
  );
};

export default Home;
