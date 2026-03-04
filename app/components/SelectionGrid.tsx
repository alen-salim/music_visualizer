import { MoveRight } from "lucide-react";
import { backgrounds } from "../utils/imageData";
import BackgroundCard from "./BackgroundCard";
import ImageUploadCard from "./ImageUploadCard";
import ImagePreviewer from "./ImagePreviewer";

export default function SelectionGrid() {
  return (
    <>
      <div className="flex gap-5 my-10">
        {/* preview */}
        <div className="w-full max-w-7xl flex justify-start items-center my-10">
          <ImagePreviewer />
        </div>
        {/* title */}
        <div className="w-full flex flex-col items-start justify-center gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Step 1: Choose Your Vibe
            </h2>
            <p className="text-white/50">
              Select a high-quality visual anchor for your music video.
            </p>
          </div>

          <button className="my-2 bg-primary/20 hover:bg-primary/30 text-primary px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2">
            Next Step
            <MoveRight />
          </button>
        </div>
      </div>

      {/* Grids */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Upload Custom Tile */}
        <ImageUploadCard />
        {/* Pre-made Background Cards  */}
        {backgrounds.map((bg, index) => (
          <BackgroundCard key={index} {...bg} />
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
