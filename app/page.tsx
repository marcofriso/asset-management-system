"use client";

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import TabsHeader from "./components/TabsHeader";
import RadioButtons from "./components/RadioButtons";
import Tab from "./components/Tab";
import { assets } from "@/content/constants";
import Featured from "./components/Featured";
import { Asset } from "@/content/types";

const areas = ["World", "EMEA", "APAC", "LATAM", "NA"];
const tabs = ["Featured", "KPI", "Layouts", "Storyboards"];

const Home = () => {
  const [query, setQuery] = useState<string>("");
  const [selectedArea, setSelectedArea] = useState<string>(areas[0]);
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);
  const [selectedAssets, setSelectedAssets] = useState<Asset[]>([]);

  const handleReset = () => {
    setQuery("");
    setSelectedAssets([]);
    setSelectedArea("World");
  };

  const filteredAssets = assets.filter((asset) => {
    if (selectedAssets.length > 0) {
      setSelectedAssets([]);
    }

    return (
      asset.name.toLowerCase().includes(query.toLowerCase()) &&
      (selectedArea === "World" || asset.areas.includes(selectedArea))
    );
  });

  return (
    <div className="mx-auto max-w-[1000px]">
      <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-6 sm:p-20">
        <h1 className="text-5xl font-black text-w">Library</h1>
        <p>Browse for assets needed to report and present analysis</p>
        <SearchBar query={query} setQuery={setQuery} />
        <RadioButtons
          areas={areas}
          setSelectedArea={setSelectedArea}
          selectedArea={selectedArea}
        />
        <button
          className="rounded-lg font-bold bg-slate-700 text-slate-200 px-4 py-1"
          onClick={handleReset}
        >
          Reset
        </button>
        <TabsHeader
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Tab active={activeTab === "Featured"}>
          <Featured
            assets={filteredAssets}
            selectedAssets={selectedAssets}
            setSelectedAssets={setSelectedAssets}
          />
        </Tab>
        <Tab active={activeTab === "KPI"}>BB</Tab>
        <Tab active={activeTab === "Layouts"}>CC</Tab>
        <Tab active={activeTab === "Storyboards"}>DD</Tab>
      </div>
    </div>
  );
};

export default Home;
