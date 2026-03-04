"use client";

import { useState } from "react";
import { TextOverlay } from "./types";

export function useTextEditor() {
  const [text, setText] = useState<TextOverlay>({
    text: "Your Title",
    fontFamily: "Arial",
    fontSize: 60,
    color: "#ffffff",
    x: 400,
    y: 200,
    alignment: "center",
  });

  const updateText = (updates: Partial<TextOverlay>) => {
    setText((prev) => ({ ...prev, ...updates }));
  };

  return {
    text,
    updateText,
  };
}
