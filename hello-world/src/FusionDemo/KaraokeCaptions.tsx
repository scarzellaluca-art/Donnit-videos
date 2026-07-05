import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONT_FAMILY } from "../EntregaVecinos/constants";
import { groupWordsIntoLines } from "./group-words";
import type { Word } from "./words";

// A word stays "active" (highlighted) for at most this long, even if the
// transcript reports a longer duration because a silence trails the word.
const MAX_ACTIVE_WORD_SECONDS = 0.5;
// How long the pop-in scale animation takes once a word becomes active.
const POP_DURATION_SECONDS = 0.15;

export const KaraokeCaptions: React.FC<{
  readonly words: Word[];
}> = ({ words }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentTime = frame / fps;

  const lines = groupWordsIntoLines(words);
  const activeLine = lines.find(
    (line) => currentTime >= line.start && currentTime < line.end,
  );

  if (!activeLine) {
    return null;
  }

  return (
    <div
      style={{
        position: "absolute",
        bottom: 460,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        padding: "0 56px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0 16px",
          maxWidth: 940,
        }}
      >
        {activeLine.words.map((word, i) => {
          const isActive =
            currentTime >= word.start &&
            currentTime < word.start + MAX_ACTIVE_WORD_SECONDS;

          const scale = interpolate(
            currentTime - word.start,
            [0, POP_DURATION_SECONDS],
            [1.18, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );

          return (
            <span
              key={i}
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 68,
                fontWeight: 800,
                lineHeight: 1.25,
                color: isActive ? COLORS.primary : "#FFFFFF",
                WebkitTextStroke: "2.5px #10231A",
                textShadow: "0 3px 10px rgba(0,0,0,0.45)",
                display: "inline-block",
                transform: `scale(${isActive ? scale : 1})`,
              }}
            >
              {word.text}
            </span>
          );
        })}
      </div>
    </div>
  );
};
