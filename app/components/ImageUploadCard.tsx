"use client";

import { useRef } from "react";
import { Upload } from "lucide-react";
import { useBackgroundStore } from "@/app/store/useBackgroundStore";

export default function ImageUploadCard() {
  const fileRef = useRef<HTMLInputElement>(null);
  const { selectedImage, setCustomImage } = useBackgroundStore();

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;

    setCustomImage(file);
  };

  return (
    <>
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleFile}
      />

      <div
        onClick={() => fileRef.current?.click()}
        className="group relative aspect-video rounded-xl border-2 border-dashed border-white/20 hover:border-primary/50 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all bg-white/5 hover:bg-primary/5 overflow-hidden"
      >
        <>
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            <Upload />
          </div>
          <div className="text-center">
            <p className="font-bold text-sm">Upload Your Own</p>
            <p className="text-xs text-white/40">4K Image or any quality</p>
          </div>
        </>
      </div>
    </>
  );
}
