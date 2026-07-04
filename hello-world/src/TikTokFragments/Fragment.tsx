import React from "react";
import { AbsoluteFill, OffthreadVideo, Sequence, staticFile } from "remotion";
import { BrandEnding, ENDING_DURATION } from "./BrandEnding";

export type FragmentClip = {
  readonly src: string;
  readonly durationInFrames: number;
};

// Plays a sequence of source clips back to back, then appends the shared
// brand ending. Used to assemble each standalone TikTok fragment from the
// same pool of trimmed source clips.
export const Fragment: React.FC<{ readonly clips: FragmentClip[] }> = ({
  clips,
}) => {
  let cursor = 0;

  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      {clips.map((clip) => {
        const from = cursor;
        cursor += clip.durationInFrames;

        return (
          <Sequence
            key={clip.src}
            from={from}
            durationInFrames={clip.durationInFrames}
          >
            <OffthreadVideo
              src={staticFile(clip.src)}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Sequence>
        );
      })}

      <Sequence from={cursor} durationInFrames={ENDING_DURATION}>
        <BrandEnding />
      </Sequence>
    </AbsoluteFill>
  );
};

export const getFragmentDuration = (clips: FragmentClip[]): number =>
  clips.reduce((total, clip) => total + clip.durationInFrames, 0) +
  ENDING_DURATION;
