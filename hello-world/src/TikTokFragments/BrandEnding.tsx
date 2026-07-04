import React from "react";
import { AbsoluteFill, OffthreadVideo, staticFile } from "remotion";

// The brand logo reveal (sped up from ~6.3s to 4s), letterboxed instead of
// cropped since it's a horizontal animation and we don't want to cut off
// the light-ray effect. Its own background is already black, so a plain
// black AbsoluteFill behind it means no visible seam.
export const ENDING_DURATION = 122; // 4.0667s @ 30fps

export const BrandEnding: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <OffthreadVideo
        src={staticFile("ending-4s.mp4")}
        style={{ width: "100%", objectFit: "contain" }}
      />
    </AbsoluteFill>
  );
};
