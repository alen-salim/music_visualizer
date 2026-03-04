"use client";
import { useBackgroundStore } from "@/app/store/useBackgroundStore";
import { Image } from "lucide-react";

export default function ImagePreviewer() {
  const { selectedImage, setCustomImage } = useBackgroundStore();
  return (
    <div className="w-xl h-auto group relative aspect-video rounded-xl border-2 border-primary/50 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all bg-white/5 hover:bg-primary/5 overflow-hidden">
      {selectedImage ? (
        <img
          src={selectedImage}
          alt="Preview"
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
        />
      ) : (
        <>
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            <Image />
          </div>
          <div className="text-center">
            <p className="font-bold text-sm"></p>
            <p className="text-xs text-white/40">Image preview</p>
          </div>
        </>
      )}
    </div>
  );
}
