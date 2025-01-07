export function endGameButton(): void{

    const dialog = document.querySelector('dialog') as HTMLDialogElement | null;
    const finishGameBtn = document.querySelector('.js-finish') as HTMLButtonElement | null;
    const closeModalBtn = document.querySelector('#closeModal') as HTMLButtonElement | null;
    const openConfirmBtn = document.querySelector('#openConfirm') as HTMLButtonElement | null;

    // Checks if the HTML elements exist
    if (dialog && finishGameBtn && closeModalBtn && openConfirmBtn) {

        // "Finish" button on the results page. Opens a dialog box.
        finishGameBtn.addEventListener("click", () => {
            dialog.showModal();
        });

        // "Yes" button in the first dialog box. Opens a confirmation dialog.
        openConfirmBtn.addEventListener("click", () => {

            // Second dialog box
            const userConfirm = confirm("Är du verkligen säker på att du vill avsluta spelet?");
            if (userConfirm) {
                localStorage.clear();
                window.location.reload();
            } else {
                dialog.close(); 
            }
        });

        // "No" button on the first dialog box. Returns to the results page.
        closeModalBtn.addEventListener("click", () => {
            dialog.close();
        });
    } else {
        console.error("One or more HTML elements were not found.");
    }

}