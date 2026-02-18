"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Upload } from "lucide-react";

interface ImageUploadCardProps {
  onImageSelect?: (file: File) => void;
  className?: string;
}

const ImageUploadCard: React.FC<ImageUploadCardProps> = ({
  onImageSelect,
  className = "",
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Only allow images
    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file.");
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
    onImageSelect?.(file);
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleFileChange}
      />

      <div
        onClick={handleClick}
        className={`group relative aspect-video rounded-xl border-2 border-dashed 
        border-white/20 hover:border-primary/50 
        flex flex-col items-center justify-center gap-4 
        cursor-pointer transition-all bg-white/5 hover:bg-primary/5 overflow-hidden ${className}`}
      >
        {/* Preview Mode */}
        {preview ? (
          <Image
            src={preview}
            alt="Uploaded preview"
            fill
            className="object-cover rounded-xl"
          />
        ) : (
          <>
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Upload />
            </div>

            <div className="text-center">
              <p className="font-bold text-sm">Upload Your Own</p>
              <p className="text-xs text-white/40">4K Image or any quality</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ImageUploadCard;
