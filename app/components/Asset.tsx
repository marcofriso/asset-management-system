import type { Asset } from "@/content/types";
import React from "react";

const Asset = ({ asset }: { asset: Asset | null }) => {
  if (!asset) {
    return null;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h3 className="font-bold text-4xl uppercase">{asset?.name}</h3>
      <p className="font-light mt-6 text-center text-sm text-slate-600">
        {asset?.description}
      </p>
      <h5 className="mt-6 text-xl font-bold">Areas</h5>
      <p className="font-light mt-3 text-sm text-slate-600">
        {asset?.areas.join(", ")}
      </p>
      <h5 className="mt-6 text-xl font-bold">Business Questions</h5>
      <div className="grid grid-cols-2 gap-y-4 gap-x-6 mt-3">
        {asset?.businessQuestions.map((question, index) => (
          <div key={index} className="">
            <p className="font-bold text-left w-full">{question.title}</p>
            <p className="font-light text-justify text-sm text-slate-600">
              {question.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Asset;
