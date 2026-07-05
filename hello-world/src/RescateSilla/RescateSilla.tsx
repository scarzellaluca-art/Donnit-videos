import React from "react";
import { AbsoluteFill, OffthreadVideo, Sequence, staticFile } from "remotion";
import { KaraokeCaptions } from "../FusionDemo/KaraokeCaptions";
import { BrandEnding, ENDING_DURATION } from "../TikTokFragments/BrandEnding";
import {
  CTA_WORDS,
  HOOK_A_WORDS,
  HOOK_B_WORDS,
  SOLUCION_WORDS,
} from "./words";

// Real, unedited camera-roll footage: rescuing a chair from a junk truck as
// the visual metaphor for what Donnit does. Jump-cuts within the hook
// (silla-hook-a -> silla-hook-b) skip a dead pause in the same take.
export const HOOK_A_DURATION = 114; // 3.8s @ 30fps
export const HOOK_B_DURATION = 39; // 1.3s
export const SOLUCION_DURATION = 150; // 5.0s
export const CTA_DURATION = 78; // 2.6s

export const RESCATE_SILLA_DURATION =
  HOOK_A_DURATION +
  HOOK_B_DURATION +
  SOLUCION_DURATION +
  CTA_DURATION +
  ENDING_DURATION;

export const RescateSilla: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      <Sequence durationInFrames={HOOK_A_DURATION}>
        <AbsoluteFill>
          <OffthreadVideo
            src={staticFile("silla-hook-a.mp4")}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <KaraokeCaptions words={HOOK_A_WORDS} />
        </AbsoluteFill>
      </Sequence>

      <Sequence from={HOOK_A_DURATION} durationInFrames={HOOK_B_DURATION}>
        <AbsoluteFill>
          <OffthreadVideo
            src={staticFile("silla-hook-b.mp4")}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <KaraokeCaptions words={HOOK_B_WORDS} />
        </AbsoluteFill>
      </Sequence>

      <Sequence
        from={HOOK_A_DURATION + HOOK_B_DURATION}
        durationInFrames={SOLUCION_DURATION}
      >
        <AbsoluteFill>
          <OffthreadVideo
            src={staticFile("silla-solucion.mp4")}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <KaraokeCaptions words={SOLUCION_WORDS} />
        </AbsoluteFill>
      </Sequence>

      <Sequence
        from={HOOK_A_DURATION + HOOK_B_DURATION + SOLUCION_DURATION}
        durationInFrames={CTA_DURATION}
      >
        <AbsoluteFill>
          <OffthreadVideo
            src={staticFile("silla-cta.mp4")}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <KaraokeCaptions words={CTA_WORDS} />
        </AbsoluteFill>
      </Sequence>

      <Sequence
        from={
          HOOK_A_DURATION + HOOK_B_DURATION + SOLUCION_DURATION + CTA_DURATION
        }
        durationInFrames={ENDING_DURATION}
      >
        <BrandEnding />
      </Sequence>
    </AbsoluteFill>
  );
};
