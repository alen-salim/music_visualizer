"use client";

import TextEditorCanvas from "./TextEditorCanvas";
import TextControls from "./TextControls";
import { useTextEditor } from "./useTextEditor";

export default function EditorPage() {
  const { text, updateText } = useTextEditor();

  const background =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e";

  return (
    <div className="my-20">
      <div className="flex gap-10 p-10">
        <TextEditorCanvas
          backgroundSrc={background}
          text={text}
          updateText={updateText}
        />

        <TextControls text={text} updateText={updateText} />
      </div>
    </div>
  );
}
