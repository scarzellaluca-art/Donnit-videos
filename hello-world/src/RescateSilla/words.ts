import type { Word } from "../FusionDemo/words";

// Transcribed locally (faster-whisper) from real camera-roll footage, then
// shifted relative to each trimmed clip's frame 0. No burned-in captions
// to work around this time — these are the first genuinely raw clips.

// silla-hook-a.mp4 (trimStart 1.3s into 945a0880-IMG_0919.mov)
export const HOOK_A_WORDS: Word[] = [
  { text: "Evitemos", start: 0.18, end: 0.62 },
  { text: "que", start: 0.62, end: 0.76 },
  { text: "esto", start: 0.76, end: 0.86 },
  { text: "pase,", start: 0.86, end: 1.16 },
  { text: "así", start: 1.5, end: 1.7 },
  { text: "como", start: 1.7, end: 1.92 },
  { text: "con", start: 1.92, end: 2.08 },
  { text: "esta", start: 2.08, end: 2.22 },
  { text: "silla", start: 2.22, end: 2.48 },
  { text: "pasa", start: 2.48, end: 2.92 },
  { text: "con", start: 2.92, end: 3.14 },
  { text: "miles", start: 3.14, end: 3.28 },
  { text: "de", start: 3.28, end: 3.42 },
  { text: "objetos.", start: 3.42, end: 3.62 },
];

// silla-hook-b.mp4 (trimStart 7.2s into 945a0880-IMG_0919.mov)
export const HOOK_B_WORDS: Word[] = [
  { text: "Termina", start: 0.18, end: 0.62 },
  { text: "de", start: 0.62, end: 0.76 },
  { text: "la", start: 0.76, end: 0.82 },
  { text: "basura.", start: 0.82, end: 1.1 },
];

// silla-solucion.mp4 (trimStart 6.0s into 7565ab41-IMG_0920.mov)
export const SOLUCION_WORDS: Word[] = [
  { text: "Hemos", start: 0.16, end: 0.62 },
  { text: "creado", start: 0.62, end: 0.92 },
  { text: "Donnit", start: 0.92, end: 1.24 },
  { text: "para", start: 1.24, end: 1.48 },
  { text: "que", start: 1.48, end: 1.58 },
  { text: "puedas", start: 1.58, end: 1.8 },
  { text: "compartir", start: 1.8, end: 2.14 },
  { text: "los", start: 2.14, end: 2.38 },
  { text: "objetos", start: 2.38, end: 2.66 },
  { text: "que", start: 2.66, end: 2.84 },
  { text: "ya", start: 2.84, end: 2.98 },
  { text: "no", start: 2.98, end: 3.04 },
  { text: "usas", start: 3.04, end: 3.38 },
  { text: "con", start: 3.38, end: 4.02 },
  { text: "todos", start: 4.02, end: 4.26 },
  { text: "tus", start: 4.26, end: 4.44 },
  { text: "vecinos.", start: 4.44, end: 4.76 },
];

// silla-cta.mp4 (trimStart 2.0s into 8d4f50eb-IMG_0922.mov)
export const CTA_WORDS: Word[] = [
  { text: "Descárgala", start: 0.16, end: 0.64 },
  { text: "y", start: 0.64, end: 0.96 },
  { text: "empecemos", start: 0.96, end: 1.28 },
  { text: "a", start: 1.28, end: 1.46 },
  { text: "limpiar", start: 1.46, end: 1.7 },
  { text: "juntos", start: 1.7, end: 1.94 },
  { text: "la", start: 1.94, end: 2.14 },
  { text: "ciudad.", start: 2.14, end: 2.32 },
];
