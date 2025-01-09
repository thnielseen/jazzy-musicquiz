/**
 * Sets up end game functionality including confirmation dialogs and game reset.
 * Manages dialog interactions for game completion and data clearing.
 *
 * @returns {void}
 * @throws {Error} Logs error if required DOM elements are not found
 *
 * @example
 * endGameButton(); // Initialize end game functionality
 */
export function endGameButton(): void {
  /** Get required DOM elements */
  const dialog = document.querySelector('dialog') as HTMLDialogElement | null;
  const finishGameBtn = document.querySelector(
    '.js-finish',
  ) as HTMLButtonElement | null;
  const closeModalBtn = document.querySelector(
    '#closeModal',
  ) as HTMLButtonElement | null;
  const openConfirmBtn = document.querySelector(
    '#openConfirm',
  ) as HTMLButtonElement | null;

  /** Validate all required elements exist */
  if (dialog && finishGameBtn && closeModalBtn && openConfirmBtn) {
    /**
     * Handle finish game button click
     * Opens initial confirmation dialog
     */
    finishGameBtn.addEventListener('click', () => {
      dialog.showModal();
    });

    /**
     * Handle confirmation button click
     * Opens second confirmation dialog and handles game reset
     */
    openConfirmBtn.addEventListener('click', () => {
      // Second dialog box
      const userConfirm = confirm(
        'Är du verkligen säker på att du vill avsluta spelet?',
      );
      if (userConfirm) {
        localStorage.clear(); // Clear all saved game data
        window.location.reload(); // Reset game state
      } else {
        dialog.close(); // Close dialog if user cancels
      }
    });

    /**
     * Handle dialog close button click
     * Closes dialog without any game state changes
     */
    closeModalBtn.addEventListener('click', () => {
      dialog.close();
    });
  } else {
    console.error('One or more HTML elements were not found.');
  }
}