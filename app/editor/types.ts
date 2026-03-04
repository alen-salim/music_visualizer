export type TextAlignment = "left" | "center" | "right";

export type TextOverlay = {
  text: string;
  fontFamily: string;
  fontSize: number;
  color: string;
  x: number;
  y: number;
  alignment: TextAlignment;
};

export type EditorState = {
  background: HTMLImageElement | null;
  text: TextOverlay;
};
