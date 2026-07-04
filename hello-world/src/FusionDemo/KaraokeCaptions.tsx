import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONT_FAMILY } from "../EntregaVecinos/constants";
import { groupWordsIntoLines } from "./group-words";
import type { Word } from "./words";

// A word stays "active" (highlighted) for at most this long, even if the
// transcript reports a longer duration because a silence trails the word.
const MAX_ACTIVE_WORD_SECONDS = 0.5;

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
        bottom: 220,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        padding: "0 64px",
      }}
    >
      <div
        style={{
          backgroundColor: COLORS.textPrimary,
          borderRadius: 24,
          padding: "28px 40px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0 14px",
          maxWidth: 980,
        }}
      >
        {activeLine.words.map((word, i) => {
          const isActive =
            currentTime >= word.start &&
            currentTime < word.start + MAX_ACTIVE_WORD_SECONDS;

          return (
            <span
              key={i}
              style={{
                fontFamily: FONT_FAMILY,
                fontSize: 56,
                fontWeight: 800,
                lineHeight: 1.3,
                color: isActive ? COLORS.primary : COLORS.background,
                opacity: isActive ? 1 : 0.75,
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
