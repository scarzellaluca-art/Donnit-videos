import React from "react";
import { AbsoluteFill } from "remotion";
import { AnimatedLine } from "../EntregaVecinos/AnimatedLine";
import { COLORS, FONT_FAMILY } from "../EntregaVecinos/constants";

export const Outro: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        fontFamily: FONT_FAMILY,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 32,
          textAlign: "center",
        }}
      >
        <AnimatedLine startFrame={0} durationInFrames={15}>
          <span
            style={{
              fontSize: 140,
              fontWeight: 800,
              color: COLORS.textPrimary,
              letterSpacing: 3,
            }}
          >
            DONNIT
          </span>
        </AnimatedLine>

        <AnimatedLine startFrame={12} durationInFrames={15}>
          <span
            style={{
              fontSize: 52,
              fontWeight: 500,
              color: COLORS.textPrimary,
              maxWidth: 780,
              display: "inline-block",
              lineHeight: 1.3,
            }}
          >
            Ya disponible en App Store.
          </span>
        </AnimatedLine>

        <AnimatedLine startFrame={26} durationInFrames={15}>
          <span
            style={{
              fontSize: 60,
              fontWeight: 900,
              color: COLORS.donate,
            }}
          >
            Ayúdanos a construirlo.
          </span>
        </AnimatedLine>
      </div>
    </AbsoluteFill>
  );
};
