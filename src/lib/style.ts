import type { CSSProperties } from 'react';

/** Staggers a `[data-reveal]` entrance animation. */
export function revealDelay(seconds: number): CSSProperties {
  return { '--reveal-delay': `${seconds}s` } as CSSProperties;
}
