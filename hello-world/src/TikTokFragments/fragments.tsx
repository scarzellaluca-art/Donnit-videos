import React from "react";
import { Fragment, getFragmentDuration, type FragmentClip } from "./Fragment";

// "El problema": the origin-story hook — Apple rejected our data, we kept
// rebuilding, nobody knows what's in their own neighborhood.
const PROBLEMA_CLIPS: FragmentClip[] = [
  { src: "donnit-clip-a.mp4", durationInFrames: 558 },
];
export const PROBLEMA_DURATION = getFragmentDuration(PROBLEMA_CLIPS);
export const Problema: React.FC = () => <Fragment clips={PROBLEMA_CLIPS} />;

// "La pregunta": cold open on "¿Qué es Donnit?", jump cut straight to the
// value-prop pitch.
const PREGUNTA_CLIPS: FragmentClip[] = [
  { src: "donnit-clip-hook.mp4", durationInFrames: 24 },
  { src: "donnit-clip-b.mp4", durationInFrames: 360 },
];
export const PREGUNTA_DURATION = getFragmentDuration(PREGUNTA_CLIPS);
export const Pregunta: React.FC = () => <Fragment clips={PREGUNTA_CLIPS} />;

// "La comunidad": the direct ask — we need 10,000 users to launch.
const COMUNIDAD_CLIPS: FragmentClip[] = [
  { src: "donnit-clip-comunidad.mp4", durationInFrames: 132 },
];
export const COMUNIDAD_DURATION = getFragmentDuration(COMUNIDAD_CLIPS);
export const Comunidad: React.FC = () => <Fragment clips={COMUNIDAD_CLIPS} />;

// "El CTA": short reminder — already available, help us build it.
const CTA_CLIPS: FragmentClip[] = [
  { src: "donnit-clip-cta.mp4", durationInFrames: 126 },
];
export const CTA_DURATION = getFragmentDuration(CTA_CLIPS);
export const Cta: React.FC = () => <Fragment clips={CTA_CLIPS} />;
