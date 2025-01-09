document.addEventListener('DOMContentLoaded', () => {
  const usernameInput = document.getElementById('username') as HTMLInputElement;

  // Attempt to get the username from localStorage
  const savedUsername = localStorage.getItem('username');

  // If we have a saved username, set it in the input field
  if (usernameInput) {
    if (savedUsername) {
      // If we have a saved username, set it as the value in the input field
      usernameInput.value = savedUsername; // Saved username is set as the value
    } else {
      // If no saved name is set, set the default value "Jazzonymous"
      usernameInput.value = 'Jazzonymous';
    }
  }
});
