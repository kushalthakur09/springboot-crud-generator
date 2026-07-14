"use client";

import { useCallback, useRef, useState } from "react";

export function useResizable(initialWidth: number, min = 220, max = 700) {
  const [width, setWidth] = useState(initialWidth);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const startResize = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();

      const rect = containerRef.current?.getBoundingClientRect();

      const left = rect?.left ?? 0;

      const move = (event: MouseEvent) => {
        const newWidth = event.clientX - left;

        let maxAllowed = max;

        if (containerRef.current) {
          // Explorer resize
          maxAllowed = Math.min(max, containerRef.current.clientWidth - 400);
        } else {
          // Generator resize
          maxAllowed = Math.min(max, window.innerWidth - 650);
        }

        setWidth(Math.max(min, Math.min(maxAllowed, newWidth)));
      };

      const up = () => {
        window.removeEventListener("mousemove", move);
        window.removeEventListener("mouseup", up);
      };

      window.addEventListener("mousemove", move);
      window.addEventListener("mouseup", up);
    },
    [min, max],
  );

  return {
    width,
    startResize,
    containerRef,
  };
}
