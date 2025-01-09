export class Timer {
  private seconds: number;
  private intervalId: number | null;
  private timeDisplay: HTMLElement;

  constructor(timeDisplay: HTMLElement) {
    this.seconds = 0;
    this.intervalId = null;
    this.timeDisplay = timeDisplay;
  }

  start() {
    if (this.intervalId !== null) {
      this.stop(); // Stops the old timer if it's running
    }

    this.reset(); // Resets the timer when pressing the start game button again

    this.intervalId = setInterval(this.updateTimer.bind(this), 1000); // Update every second
  }

  stop() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.saveTime(); // Saves the value in localStorage when the timer is stopped
    }
  }

  // Resets the timer to its original state
  reset() {
    this.seconds = 0;
    this.displayTime();
  }

  private updateTimer() {
    this.seconds++;
    this.displayTime();

    // Stoppar timern efter 30 minuter
    if (this.seconds >= 1800) {
      // 30 min = 1800 sekunder
      this.stop();
    }
  }

  // Updates the timer in minutes and seconds on the screen
  private displayTime() {
    const minutes = Math.floor(this.seconds / 60);
    const remainingSeconds = this.seconds % 60;
    this.timeDisplay.textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }

  // Saves the new time in the list when the timer is stopped
  private saveTime() {
    let savedTimes: number[] = [];
    try {
      savedTimes = JSON.parse(localStorage.getItem('timerHistory') || '[]');
    } catch (e) {
      console.error('Failed to parse timer history from localStorage', e);
    }

    savedTimes.push(this.seconds);

    // If there are more than 10 items in local storage, remove the oldest (index 0)
    if (savedTimes.length > 10) {
      savedTimes.shift();
    }

    // Save the updated list back to localStorage
    localStorage.setItem('timerHistory', JSON.stringify(savedTimes));
  }
}
