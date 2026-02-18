"use client";

import { Check, Play } from "lucide-react";
import Image from "next/image";
import React from "react";

interface BackgroundCardProps {
  data_alt: string;
  src: string;
  name: string;
  isActive?: boolean;
  onClick?: () => void;
  icon?: string;
}

const BackgroundCard: React.FC<BackgroundCardProps> = ({
  data_alt,
  src,
  name,
  isActive = false,
  onClick,
}) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      className={`group relative aspect-video rounded-xl overflow-hidden cursor-pointer transition-all
        ${
          isActive
            ? "ring-2 ring-primary"
            : "hover:shadow-2xl hover:shadow-primary/10"
        }`}
    >
      <Image
        src={src}
        alt={data_alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        priority={isActive}
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
        <div className="flex justify-between items-center w-full">
          <p className="text-sm font-bold text-white">{name}</p>
          <Play />
        </div>
      </div>

      {/* Active Indicator */}
      {isActive && (
        <div className="absolute top-3 right-3 bg-primary text-white rounded-full p-1 shadow-lg">
          <Check />
        </div>
      )}
    </div>
  );
};

export default BackgroundCard;
