/**
 * Timer class for tracking and displaying elapsed time.
 * Manages a countdown timer with display updates, localStorage persistence,
 * and automatic shutdown after 30 minutes.
 */
export class Timer {
    /** Number of elapsed seconds */
    private seconds: number;

    /** ID of the interval timer, null when stopped */
    private intervalId: number | null;

    /** DOM element that displays the current time */
    private timeDisplay: HTMLElement;

    /**
     * Creates a new Timer instance.
     * @param {HTMLElement} timeDisplay - DOM element where time will be displayed
     */
    constructor(timeDisplay: HTMLElement) {
        this.seconds = 0;
        this.intervalId = null;
        this.timeDisplay = timeDisplay;
    }

    /**
     * Starts or restarts the timer.
     * If a timer is already running, it will be stopped before starting a new one.
     * Updates the display every second.
     */
    start() {
        if (this.intervalId !== null) {
            this.stop();  // Stops the old timer if it's running
        }

        this.reset();  // Resets the timer when pressing the start game button again

    
        this.intervalId = setInterval(this.updateTimer.bind(this), 1000); // Update every second
    }

    /**
     * Stops the timer if it's running and saves the final time.
     * Cleans up the interval and triggers time storage in localStorage.
     */
    stop() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            this.saveTime(); // Saves the value in localStorage when the timer is stopped
        }
    }

    /**
     * Resets the timer to zero and updates the display.
     */
    reset() {
        this.seconds = 0;
        this.displayTime();
    }

    /**
     * Updates the timer by incrementing seconds and updating display.
     * Automatically stops after 30 minutes (1800 seconds).
     * @private
     */
    private updateTimer() {
        this.seconds++;
        this.displayTime();

        // Stoppar timern efter 30 minuter
        if (this.seconds >= 1800) { // 30 min = 1800 sekunder
            this.stop();
        }
    }
    
    /**
     * Formats and displays the current time in MM:SS format.
     * @private
     */
    private displayTime() {
        const minutes = Math.floor(this.seconds / 60);
        const remainingSeconds = this.seconds % 60;
        this.timeDisplay.textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    /**
     * Saves the current time to localStorage history.
     * Maintains a maximum of 10 entries, removing oldest when exceeded.
     * @private
     */
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