import { Timer } from './timerFunction';

/** Singleton instance of game timer */
let gameTimer: Timer | null = null;

/**
 * Gets or creates the game timer instance.
 * Implements singleton pattern to ensure only one timer exists.
 *
 * @param {HTMLElement} timeDisplay - DOM element to show timer
 * @returns {Timer} Single game timer instance
 *
 * @example
 * const timer = getGameTimer(document.getElementById('timer'));
 * timer.start();
 */
export function getGameTimer(timeDisplay: HTMLElement): Timer {
  if (!gameTimer) {
    gameTimer = new Timer(timeDisplay);
  }
  return gameTimer;
}