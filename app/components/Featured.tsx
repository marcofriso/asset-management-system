import React, { useState } from "react";
import type { Asset } from "@/content/types";
import Modal from "./Modal";
import AssetComponent from "./Asset";

const Featured = ({ assets }: { assets: Asset[] }) => {
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [clickedAsset, setClickedAsset] = useState<Asset | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full grid md:grid-cols-2 gap-4">
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <AssetComponent asset={clickedAsset} />
      </Modal>
      {assets.map((asset) => (
        <div
          key={asset.id}
          className="flex flex-col p-4 bg-white rounded-lg border text-slate-600 w-full cursor-pointer hover:shadow-lg"
          onClick={() => {
            setIsOpen(true);
            setClickedAsset(asset);
          }}
        >
          <p className="text-md font-semibold">{asset.name}</p>
          <p className="text-sm line-clamp-3 text-ellipsis">
            {asset.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Featured;
