export function endGameButton(): void{

    const dialog = document.querySelector('dialog') as HTMLDialogElement | null;
    const finishGameBtn = document.querySelector('.js-finish') as HTMLButtonElement | null;
    const closeModalBtn = document.querySelector('#closeModal') as HTMLButtonElement | null;
    const openConfirmBtn = document.querySelector('#openConfirm') as HTMLButtonElement | null;

    // Kollar om HTML-elementen finns
    if (dialog && finishGameBtn && closeModalBtn && openConfirmBtn) {

        // "Avsluta"-knappen på resultatsidan. Öppnar dialogruta.
        finishGameBtn.addEventListener("click", () => {
            dialog.showModal();
        });

        // "Ja"-knapp i första dialogrutan. Öppnar andra dialogrutan.
        openConfirmBtn.addEventListener("click", () => {

            // Andra dialogrutan
            const userConfirm = confirm("Är du verkligen säker på att du vill avsluta spelet?");
            if (userConfirm) {
                localStorage.clear();
                window.location.reload();
            } else {
                dialog.close(); 
            }

        });

        // "Nej"-knapp på första dialogrutan. Återgår till resultatsidan.
        closeModalBtn.addEventListener("click", () => {
            dialog.close();
        });

    } else {
        console.error("En eller flera HTML-element hittades inte.");
    }

}