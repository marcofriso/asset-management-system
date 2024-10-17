"use client";

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import RadioButtons from "./components/RadioButtons";

const Home = () => {
  const [query, setQuery] = useState<string>("");
  const [selectedArea, setSelectedArea] = useState<string>("World");

  const handleTabChange = (selectedTab: string) => {
    console.log("Selected tab:", selectedTab);
  };

  const handleReset = () => {
    setQuery("");
    setSelectedArea("World");
  };

  return (
    <div className="mx-auto max-w-[1000px]">
      <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-6 sm:p-20">
        <h1 className="text-5xl font-black text-w">Library</h1>
        <p>Browse for assets needed to report and present analysis</p>
        <SearchBar query={query} setQuery={setQuery} />
        <RadioButtons
          areas={["World", "EMEA", "APAC", "LATAM", "NA"]}
          setSelectedArea={setSelectedArea}
          selectedArea={selectedArea}
        />
        <button
          className="rounded-lg font-bold bg-slate-700 text-slate-200 px-4 py-1"
          onClick={handleReset}
        >
          Reset
        </button>
        <Tabs
          tabs={["Featured", "KPI", "Layouts", "Storyboards"]}
          onTabChange={handleTabChange}
        />
      </div>
    </div>
  );
};

export default Home;
