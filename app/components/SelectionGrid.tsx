"use client";
import { MoveRight } from "lucide-react";
import { useState } from "react";
import { backgrounds } from "../utils/imageData";
import BackgroundCard from "./BackgroundCard";
import ImageUploadCard from "./ImageUploadCard";

export default function SelectionGrid() {
  const [selected, setSelected] = useState<number>(0);
  const handleImage = (file: File) => {
    console.log("Selected image:", file);
  };
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 my-10">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Step 1: Choose Your Vibe
          </h2>
          <p className="text-white/50">
            Select a high-quality visual anchor for your music video.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {/* <button className="glass-card hover:bg-white/5 px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-white/10">
            Filter: All
          </button> */}
          <div className="h-6 w-px bg-white/10 mx-2"></div>
          <button className="bg-primary/20 hover:bg-primary/30 text-primary px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2">
            Next Step
            <MoveRight />
          </button>
        </div>
      </div>
      {/* Grids */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Upload Custom Tile */}
        <ImageUploadCard onImageSelect={handleImage} />
        {/* Pre-made Background Cards  */}
        {backgrounds.map((bg, index) => (
          <BackgroundCard
            key={index}
            {...bg}
            isActive={selected === index}
            onClick={() => setSelected(index)}
          />
        ))}
      </div>
      {/* Pagination/Load More  */}
      <div className="mt-16 text-center">
        <button className="px-8 py-3 rounded-xl glass hover:bg-white/5 transition-all text-sm font-medium">
          Load More Backgrounds
        </button>
      </div>
    </>
  );
}
