"use client";

import { TextOverlay } from "./types";

type Props = {
  text: TextOverlay;
  updateText: (data: Partial<TextOverlay>) => void;
};

export default function TextControls({ text, updateText }: Props) {
  return (
    <div className="flex flex-col gap-4 w-75">
      <input
        value={text.text}
        onChange={(e) => updateText({ text: e.target.value })}
        className="border p-2"
        placeholder="Enter text"
      />

      <select
        value={text.fontFamily}
        onChange={(e) => updateText({ fontFamily: e.target.value })}
      >
        <option>Arial</option>
        <option>Verdana</option>
        <option>Times New Roman</option>
      </select>

      <input
        type="range"
        min="20"
        max="120"
        value={text.fontSize}
        onChange={(e) => updateText({ fontSize: Number(e.target.value) })}
      />

      <input
        type="color"
        value={text.color}
        onChange={(e) => updateText({ color: e.target.value })}
      />

      <select
        value={text.alignment}
        onChange={(e) =>
          updateText({
            alignment: e.target.value as any,
          })
        }
      >
        <option value="left">Left</option>
        <option value="center">Center</option>
        <option value="right">Right</option>
      </select>
    </div>
  );
}
