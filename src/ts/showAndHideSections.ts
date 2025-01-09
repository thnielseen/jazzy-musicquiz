const intro = document.querySelector('.intro') as HTMLElement;
const game = document.querySelector('.game') as HTMLElement;
const result = document.querySelector('.result') as HTMLElement;

/**
 * Shows the game section by hiding the intro section.
 * Manages visibility classes for transitioning from intro to active game state.
 *
 * @returns {void}
 */
export function showGameSection(): void {
  intro.classList.add('hidden');
  game.classList.remove('hidden');
}

/**
 * Toggles visibility between game and result sections.
 * Used for transitioning between active gameplay and displaying final results.
 *
 * @returns {void}
 */
export function switchHiddenGameAndResult(): void {
  game.classList.toggle('hidden');
  result.classList.toggle('hidden');
}

/**
 * Shows the start section by hiding the result section.
 * Used for resetting the game state to allow starting a new game.
 *
 * @returns {void}
 */
export function showStartSection(): void {
  intro.classList.remove('hidden');
  result.classList.add('hidden');
}