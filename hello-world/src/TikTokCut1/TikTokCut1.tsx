import React from "react";
import { AbsoluteFill, OffthreadVideo, Sequence, staticFile } from "remotion";
import { Outro } from "../FusionDemo/Outro";

// Cold-open jump cut: skip straight to the question, skip straight to the
// answer, skip all the dead air (tripod setup, retakes, pauses) in between.
export const HOOK_DURATION = 24; // 0.8s @ 30fps
export const PITCH_DURATION = 360; // 12s @ 30fps
export const OUTRO_DURATION = 90; // 3s @ 30fps

export const TIKTOK_CUT_1_DURATION =
  HOOK_DURATION + PITCH_DURATION + OUTRO_DURATION;

export const TikTokCut1: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      <Sequence durationInFrames={HOOK_DURATION}>
        <OffthreadVideo
          src={staticFile("donnit-clip-hook.mp4")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Sequence>

      <Sequence from={HOOK_DURATION} durationInFrames={PITCH_DURATION}>
        <OffthreadVideo
          src={staticFile("donnit-clip-b.mp4")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Sequence>

      <Sequence
        from={HOOK_DURATION + PITCH_DURATION}
        durationInFrames={OUTRO_DURATION}
      >
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};
