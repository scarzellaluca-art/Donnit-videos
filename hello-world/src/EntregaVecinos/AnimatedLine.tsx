import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";

export const AnimatedLine: React.FC<{
  readonly startFrame: number;
  readonly durationInFrames?: number;
  readonly style?: React.CSSProperties;
  readonly children: React.ReactNode;
}> = ({ startFrame, durationInFrames = 18, style, children }) => {
  const frame = useCurrentFrame();
  const localFrame = frame - startFrame;

  const opacity = interpolate(localFrame, [0, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(localFrame, [0, durationInFrames], [24, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
