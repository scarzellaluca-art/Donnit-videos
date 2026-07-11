import React from "react";
import { AbsoluteFill, OffthreadVideo, Sequence, staticFile } from "remotion";
import { COLORS } from "../EntregaVecinos/constants";
import { IntroFlash } from "./IntroFlash";
import { KaraokeCaptions } from "./KaraokeCaptions";
import { Outro } from "./Outro";
import { CLIP_A_WORDS, CLIP_B_WORDS } from "./words";

export const INTRO_DURATION = 15;
export const CLIP_A_DURATION = 558;
export const CLIP_B_DURATION = 360;
export const OUTRO_DURATION = 90;

export const FUSION_DEMO_DURATION =
  INTRO_DURATION + CLIP_A_DURATION + CLIP_B_DURATION + OUTRO_DURATION;

export const FusionDemo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      <Sequence durationInFrames={INTRO_DURATION}>
        <IntroFlash />
      </Sequence>

      <Sequence from={INTRO_DURATION} durationInFrames={CLIP_A_DURATION}>
        <AbsoluteFill>
          <OffthreadVideo
            src={staticFile("donnit-clip-a.mp4")}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <KaraokeCaptions words={CLIP_A_WORDS} accentColor={COLORS.donate} />
        </AbsoluteFill>
      </Sequence>

      <Sequence
        from={INTRO_DURATION + CLIP_A_DURATION}
        durationInFrames={CLIP_B_DURATION}
      >
        <AbsoluteFill>
          <OffthreadVideo
            src={staticFile("donnit-clip-b.mp4")}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <KaraokeCaptions words={CLIP_B_WORDS} accentColor={COLORS.donate} />
        </AbsoluteFill>
      </Sequence>

      <Sequence
        from={INTRO_DURATION + CLIP_A_DURATION + CLIP_B_DURATION}
        durationInFrames={OUTRO_DURATION}
      >
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};
