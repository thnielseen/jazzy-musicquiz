export function endGameButton(): void{

    const dialog = document.querySelector('dialog') as HTMLDialogElement;
    const finishGameBtn = document.querySelector('.js-finish') as HTMLButtonElement;
    const closeModalBtn = document.querySelector('#closeModal') as HTMLButtonElement;
    const openConfirmBtn = document.querySelector('#openConfirm') as HTMLButtonElement;

    // Kollar om HTML-elementen finns
    if (dialog && finishGameBtn && closeModalBtn) {

        // "Avsluta"-knappen på resultatsidan. Öppnar dialogruta.
        finishGameBtn.addEventListener("click", () => {
            dialog.showModal();
        });

        // "Ja"-knapp i första dialogrutan. Öppnar andra dialogrutan.
        openConfirmBtn.addEventListener("click", () => {

            // Andra dialogrutan
            const userConfirm = confirm("Är du verkligen säker på att du vill avsluta spelet?");
            if (userConfirm) { // Klick på "Ja"
                localStorage.clear();
                window.location.reload();
            } else { // Klick på "Nej"
                dialog.close(); 
            }

        });


        // "Nej"-knapp på första dialogrutan. Återgår till resultatsidan.
        closeModalBtn.addEventListener("click", () => {
            dialog.close();
        });

    } else {

        console.error("One or more elements were not found in the DOM.");

    }

}