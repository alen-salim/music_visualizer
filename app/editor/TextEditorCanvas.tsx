"use client";

import { useEffect, useRef, useState } from "react";
import { TextOverlay } from "./types";

type Props = {
  backgroundSrc: string;
  text: TextOverlay;
  updateText: (data: Partial<TextOverlay>) => void;
};

export default function TextEditorCanvas({
  backgroundSrc,
  text,
  updateText,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const dragging = useRef(false);

  const WIDTH = 800;
  const HEIGHT = 450;

  // STEP 5 — DPI scaling
  const setupCanvas = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d")!;
    const ratio = window.devicePixelRatio || 1;

    canvas.width = WIDTH * ratio;
    canvas.height = HEIGHT * ratio;

    canvas.style.width = WIDTH + "px";
    canvas.style.height = HEIGHT + "px";

    ctx.scale(ratio, ratio);

    return ctx;
  };

  // load background
  useEffect(() => {
    const image = new Image();
    image.src = backgroundSrc;
    image.onload = () => setImg(image);
  }, [backgroundSrc]);

  // render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;

    const ctx = setupCanvas(canvas);

    const render = () => {
      ctx.clearRect(0, 0, WIDTH, HEIGHT);

      drawBackground(ctx, img);
      drawText(ctx, text);
    };

    render();
  }, [img, text]);

  // STEP 4 — drag functionality
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;

    const handleMouseDown = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      ctx.font = `${text.fontSize}px ${text.fontFamily}`;
      const width = ctx.measureText(text.text).width;
      const height = text.fontSize;

      if (
        mx >= text.x - width / 2 &&
        mx <= text.x + width / 2 &&
        my >= text.y - height &&
        my <= text.y
      ) {
        dragging.current = true;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging.current) return;

      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      updateText({
        x: mx,
        y: my,
      });
    };

    const handleMouseUp = () => {
      dragging.current = false;
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [text]);

  return <canvas ref={canvasRef} className="border rounded-lg shadow-lg" />;
}

// STEP 1 — draw background
function drawBackground(ctx: CanvasRenderingContext2D, img: HTMLImageElement) {
  const canvasWidth = 800;
  const canvasHeight = 450;

  const imgRatio = img.width / img.height;
  const canvasRatio = canvasWidth / canvasHeight;

  let width = canvasWidth;
  let height = canvasHeight;
  let offsetX = 0;
  let offsetY = 0;

  if (imgRatio > canvasRatio) {
    height = canvasHeight;
    width = imgRatio * height;
    offsetX = (canvasWidth - width) / 2;
  } else {
    width = canvasWidth;
    height = width / imgRatio;
    offsetY = (canvasHeight - height) / 2;
  }

  ctx.drawImage(img, offsetX, offsetY, width, height);
}

// STEP 2 — draw static text
function drawText(ctx: CanvasRenderingContext2D, text: TextOverlay) {
  ctx.font = `${text.fontSize}px ${text.fontFamily}`;
  ctx.fillStyle = text.color;
  ctx.textAlign = text.alignment;

  ctx.fillText(text.text, text.x, text.y);
}
