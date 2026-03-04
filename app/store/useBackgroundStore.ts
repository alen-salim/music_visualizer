import { create } from "zustand";

export type ImageSourceType = "preset" | "custom";

interface BackgroundState {
  selectedImage: string | null;
  sourceType: ImageSourceType | null;

  setPresetImage: (src: string) => void;
  setCustomImage: (file: File) => void;
  clearImage: () => void;
}

export const useBackgroundStore = create<BackgroundState>((set) => ({
  selectedImage: null,
  sourceType: null,

  setPresetImage: (src) =>
    set({
      selectedImage: src,
      sourceType: "preset",
    }),

  setCustomImage: (file) => {
    const objectUrl = URL.createObjectURL(file);

    set({
      selectedImage: objectUrl,
      sourceType: "custom",
    });
  },

  clearImage: () =>
    set({
      selectedImage: null,
      sourceType: null,
    }),
}));
