import React, { useState } from "react";
import type { Asset } from "@/content/types";
import Modal from "./Modal";
import AssetComponent from "./Asset";

const Featured = ({
  assets,
  selectedAssets,
  setSelectedAssets,
}: {
  assets: Asset[];
  selectedAssets: Asset[];
  setSelectedAssets: (assets: Asset[]) => void;
}) => {
  const [clickedAsset, setClickedAsset] = useState<Asset | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDivClick = (asset: Asset) => {
    setIsOpen(true);

    const isSelected = selectedAssets.includes(asset);
    if (isSelected) {
      setSelectedAssets(selectedAssets.filter((a) => a.id !== asset.id));
    } else {
      setSelectedAssets([...selectedAssets, asset]);
    }
  };

  const handleCheckboxClick = (event: React.MouseEvent, asset: Asset) => {
    event.stopPropagation();

    setClickedAsset(asset);
  };

  return (
    <div className="w-full grid md:grid-cols-2 gap-4">
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <AssetComponent asset={clickedAsset} />
      </Modal>
      {assets.map((asset) => (
        <div
          key={asset.id}
          className="flex flex-col p-4 bg-white rounded-lg border text-slate-600 w-full cursor-pointer hover:shadow-lg"
          onClick={() => handleDivClick(asset)}
        >
          <div
            className="flex gap-3 w-fit"
            onClick={(event) => handleCheckboxClick(event, asset)}
          >
            <input type="checkbox" id={`asset ${asset.id}`} />
            <label
              htmlFor={`asset ${asset.id}`}
              className="text-md font-semibold"
            >
              {asset.name}
            </label>
          </div>
          <p className="text-sm line-clamp-3 text-ellipsis">
            {asset.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Featured;
