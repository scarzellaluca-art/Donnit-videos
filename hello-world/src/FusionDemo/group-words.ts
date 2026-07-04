import type { Word } from "./words";

export type WordLine = {
  readonly words: Word[];
  readonly start: number;
  readonly end: number;
};

// Greedily groups words into readable caption lines, breaking on max word
// count or a natural pause (gap to the next word) so lines don't span
// silences awkwardly.
export const groupWordsIntoLines = (
  words: Word[],
  maxWordsPerLine = 5,
  pauseBreakSeconds = 0.6,
): WordLine[] => {
  const lines: WordLine[] = [];
  let current: Word[] = [];

  words.forEach((word, i) => {
    current.push(word);
    const nextWord = words[i + 1];
    const gapToNext = nextWord ? nextWord.start - word.end : Infinity;
    const shouldBreak =
      current.length >= maxWordsPerLine || gapToNext >= pauseBreakSeconds;

    if (shouldBreak) {
      lines.push({
        words: current,
        start: current[0].start,
        end: current[current.length - 1].end,
      });
      current = [];
    }
  });

  if (current.length > 0) {
    lines.push({
      words: current,
      start: current[0].start,
      end: current[current.length - 1].end,
    });
  }

  return lines;
};
