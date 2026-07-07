import React from "react";
import { AbsoluteFill, Freeze, OffthreadVideo, staticFile } from "remotion";
import { COLORS, FONT_FAMILY } from "../EntregaVecinos/constants";

// Recurring series cover, modeled on the "[brand word] y [city/topic]"
// stacked title cards used by lifestyle creators like @tc__tc__ (a script
// word + a bold blocky word). Freezes on a frame of the episode's own
// footage instead of a separate still image, so future episodes only need
// a new `city` and `freezeSrc`.
export const SeriesTitleCard: React.FC<{
  readonly city: string;
  readonly freezeSrc: string;
}> = ({ city, freezeSrc }) => {
  return (
    <AbsoluteFill>
      <Freeze frame={5}>
        <OffthreadVideo
          src={staticFile(freezeSrc)}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Freeze>
      <AbsoluteFill style={{ backgroundColor: "rgba(16,35,26,0.55)" }} />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span
            style={{
              fontFamily: FONT_FAMILY,
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: 64,
              color: COLORS.primary,
            }}
          >
            Donnit
          </span>
          <span
            style={{
              fontFamily: FONT_FAMILY,
              fontWeight: 800,
              fontSize: 100,
              letterSpacing: 2,
              color: COLORS.background,
            }}
          >
            {city}
          </span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
