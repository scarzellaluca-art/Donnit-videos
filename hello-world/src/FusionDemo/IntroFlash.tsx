import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS, FONT_FAMILY } from "../EntregaVecinos/constants";

export const IntroFlash: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 4, 11, 15], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.textPrimary,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span
        style={{
          opacity,
          fontFamily: FONT_FAMILY,
          fontSize: 150,
          fontWeight: 800,
          letterSpacing: 4,
          color: COLORS.background,
        }}
      >
        DONNIT
      </span>
    </AbsoluteFill>
  );
};
