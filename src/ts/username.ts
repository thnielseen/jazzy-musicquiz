// Hämta knapp och input-fält
const startButton = document.getElementById('start-game-button') as HTMLButtonElement;
const usernameInput = document.getElementById('username') as HTMLInputElement;

// Kontrollera att elementen faktiskt hittas innan vi använder dem
if (startButton && usernameInput) {
  // Funktion för att spara användarnamn
  function saveUsernameToLocalStorage() {
    const username = usernameInput.value.trim(); // Trimma för att ta bort onödiga mellanslag
    if (username) {
      localStorage.setItem('username', username);
      console.log('Användarnamn sparades:', username);
    } else {
      console.error('Användarnamn är tomt. Skriv in ett giltigt namn.');
    }
  }

  // Event listener för att lyssna efter klick på startas-spel-knappen
  startButton.addEventListener('click', saveUsernameToLocalStorage);
} else {
  console.error('Ett eller flera element hittades inte i DOM.');
}