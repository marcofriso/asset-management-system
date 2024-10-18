"use client";

import { useState } from "react";
import SearchBar from "./components/SearchBar";
import TabsHeader from "./components/TabsHeader";
import RadioButtons from "./components/RadioButtons";
import Tab from "./components/Tab";
import { assets } from "@/content/constants";
import Featured from "./components/Featured";
import type { Asset, KPI, Layout } from "@/content/types";
import KPIs from "./components/KPIs";
import Layouts from "./components/Layouts";
import Storyboards from "./components/Storyboards";

const areas = ["World", "EMEA", "APAC", "LATAM", "NA"];
const tabs = ["Featured", "KPI", "Layouts", "Storyboards"];

const Home = () => {
  const [query, setQuery] = useState<string>("");
  const [selectedArea, setSelectedArea] = useState<string>(areas[0]);
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  const [selectedAssets, setSelectedAssets] = useState<Asset[]>([]);
  const [selectedKPIs, setSelectedKPIs] = useState<KPI[]>([]);
  const [selectedLayouts, setSelectedLayouts] = useState<Layout[]>([]);

  const handleReset = () => {
    setQuery("");
    setSelectedArea("World");
    setActiveTab(tabs[0]);

    setSelectedAssets([]);
    setSelectedKPIs([]);
    setSelectedLayouts([]);
  };

  const filteredAssets = assets.filter((asset) => {
    // if (selectedAssets.length > 0) {
    //   setSelectedAssets([]);
    // }

    return (
      asset.name.toLowerCase().includes(query.toLowerCase()) &&
      (selectedArea === "World" || asset.areas.includes(selectedArea))
    );
  });

  return (
    <div className="mx-auto max-w-[1000px]">
      {console.log("SSTS", selectedAssets, selectedKPIs, selectedLayouts)}
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
        <Tab active={activeTab === "KPI"}>
          <KPIs selectedKPIs={selectedKPIs} setSelectedKPIs={setSelectedKPIs} />
        </Tab>
        <Tab active={activeTab === "Layouts"}>
          <Layouts
            selectedLayouts={selectedLayouts}
            setSelectedLayouts={setSelectedLayouts}
            selectedKpis={selectedKPIs}
          />
        </Tab>
        <Tab active={activeTab === "Storyboards"}>
          <Storyboards
            assets={selectedAssets}
            kpis={selectedKPIs}
            layouts={selectedLayouts}
            area={selectedArea}
          />
        </Tab>
      </div>
    </div>
  );
};

export default Home;
