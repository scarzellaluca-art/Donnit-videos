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
  // COLORS.donate or COLORS.rent depending on what the episode is about.
  readonly accentColor: string;
}> = ({ city, freezeSrc, accentColor }) => {
  return (
    <AbsoluteFill>
      <Freeze frame={5}>
        <OffthreadVideo
          src={staticFile(freezeSrc)}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Freeze>
      {/* A light scrim, not a dark one — brand guidance is a bright,
      daylight look, never dark or cold. */}
      <AbsoluteFill style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
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
              color: accentColor,
              textShadow: "0 2px 14px rgba(255,255,255,0.85)",
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
              color: COLORS.textPrimary,
              textShadow: "0 2px 14px rgba(255,255,255,0.85)",
            }}
          >
            {city}
          </span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
