document.addEventListener('DOMContentLoaded', () => {
  const usernameInput = document.getElementById('username') as HTMLInputElement;

  // Försök att hämta användarnamnet från localStorage
  const savedUsername = localStorage.getItem('username');

  // Om vi har ett sparat användarnamn, sätt det i inputfältet
  if (usernameInput) {
    if (savedUsername) {
      // Om vi har ett sparat användarnamn, sätt det som värde i inputfältet
      usernameInput.value = savedUsername;  // Här sätts sparat användarnamn som värde
      console.log('Sparat användarnamn visas:', savedUsername);
    } else {
      // Om inget sparat namn finns, sätt till default-värde
      usernameInput.value = "Jazzonymous";  // Om inget sparat namn, sätt standard
      console.log('Inget sparat användarnamn, standardnamn sätts.');
    }
  }
});
