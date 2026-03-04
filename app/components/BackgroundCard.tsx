"use client";

import Image from "next/image";
import { useBackgroundStore } from "@/app/store/useBackgroundStore";
import { Check, Play } from "lucide-react";

interface Props {
  data_alt: string;
  src: string;
  name: string;
}

export default function BackgroundCard({ data_alt, src, name }: Props) {
  const { selectedImage, setPresetImage } = useBackgroundStore();

  const isActive = selectedImage === src;

  return (
    <div
      onClick={() => setPresetImage(src)}
      className={`group relative aspect-video rounded-xl overflow-hidden cursor-pointer
        ${isActive ? "ring-2 ring-primary" : "hover:shadow-xl"}`}
    >
      <Image
        src={src}
        alt={data_alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
        <div className="flex justify-between items-center w-full">
          <p className="text-sm font-bold text-white">{name}</p>
          <Play />
        </div>
      </div>

      {isActive && (
        <div className="absolute top-3 right-3 bg-primary text-white rounded-full p-1">
          <Check />
        </div>
      )}
    </div>
  );
}
