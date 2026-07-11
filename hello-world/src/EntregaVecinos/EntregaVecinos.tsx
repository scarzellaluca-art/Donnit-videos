import React from "react";
import { AbsoluteFill } from "remotion";
import { AnimatedLine } from "./AnimatedLine";
import { COLORS, FONT_FAMILY } from "./constants";

const LINE_ENTRY_DURATION = 18;

const TIMING = {
  brand: 0,
  subtitle: 24,
  emphasis: 52,
};

export const EntregaVecinos: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.background,
        fontFamily: FONT_FAMILY,
        justifyContent: "center",
        alignItems: "center",
        padding: "0 80px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 48,
          textAlign: "center",
        }}
      >
        <AnimatedLine
          startFrame={TIMING.brand}
          durationInFrames={LINE_ENTRY_DURATION}
        >
          <span
            style={{
              fontSize: 168,
              fontWeight: 800,
              color: COLORS.textPrimary,
              letterSpacing: 4,
              lineHeight: 1,
            }}
          >
            DONNIT
          </span>
        </AnimatedLine>

        <AnimatedLine
          startFrame={TIMING.subtitle}
          durationInFrames={LINE_ENTRY_DURATION}
        >
          <span
            style={{
              fontSize: 62,
              fontWeight: 500,
              color: COLORS.textPrimary,
              lineHeight: 1.3,
              maxWidth: 820,
              display: "inline-block",
            }}
          >
            TU VECINO YA TIENE LO QUE NECESITAS.
          </span>
        </AnimatedLine>

        <AnimatedLine
          startFrame={TIMING.emphasis}
          durationInFrames={LINE_ENTRY_DURATION}
        >
          <span
            style={{
              fontSize: 132,
              fontWeight: 900,
              color: COLORS.donate,
              letterSpacing: 2,
            }}
          >
            GRATIS.
          </span>
        </AnimatedLine>
      </div>
    </AbsoluteFill>
  );
};
