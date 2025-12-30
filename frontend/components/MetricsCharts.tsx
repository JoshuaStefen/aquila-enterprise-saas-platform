"use client";

import { useEffect, useState } from "react";

export default function MetricsChart({ values }: { values: number[] }) {
  const max = Math.max(...values, 1);

  return (
    <svg width="100%" height="120">
      {values.map((v, i) => (
        <rect
          key={i}
          x={i * 30}
          y={120 - (v / max) * 100}
          width="20"
          height={(v / max) * 100}
          fill="#6366f1"
        />
      ))}
    </svg>
  );
}
