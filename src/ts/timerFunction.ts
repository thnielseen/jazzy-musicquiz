/**
 X Skapa en platshållare för timern i html
 X Skapa en funktion för att starta timern med hjälp av starta spel knappen.
 X Skapa en funtkion som nollställer timern om starta spel knappen trycks en gång till.
 * Skapa funktionen counter och koppla denna till stop funktionen här.
 * Ändra timern nedan så att den stoppar efter 30 minter om inte ovan funktion utlöst ett stopp.  
 X Skapa en funktion som när timern stoppas så lagrar den det värdet i local storage. Efter 10 omgångar ska sen börja rensa det äldsta värdet.

 */

export class Timer {
    private seconds: number;
    private intervalId: number | null;
    private target: number;
    private timeDisplay: HTMLElement;

    constructor(target: number, timeDisplay: HTMLElement) {
        this.seconds = 0;
        this.intervalId = null;
        this.target = target;
        this.timeDisplay = timeDisplay;
    }

    start() {
        if (this.intervalId !== null) {
            this.stop();  // Stoppar den gamla timern om den är igång
        }

        this.reset();  // Nollstället timern om man trycker på starta spel igen

        this.intervalId = setInterval(() => {
            this.seconds++;
            this.displayTime();

            if (this.seconds >= this.target) {
                //console.log('Target reached! Timer stopped.'); //console.log för testning
                this.stop();
            }
        }, 1000); // Uppdatera varje sekund
    }


    stop() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            //console.log('Timer stopped.');//console.log för testning
            this.saveTime(); // Sparar värdet i localStorage när timern stoppas
        }
    }

    // Återställer timern till sitt ursprungliga tillstånd
    reset() {
        this.seconds = 0;
        this.displayTime();
    }

   // Uppdaterar timern i minuter och sekunder på skärmen 
    private displayTime() {
        const minutes = Math.floor(this.seconds / 60);
        const remainingSeconds = this.seconds % 60;
        //console.log(`Time updated: ${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`); //console.log för testning
        this.timeDisplay.textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    // Sparar ner den nya tiden i listan när timern stoppas
    private saveTime() {
        let savedTimes: number[] = [];
        try {
            savedTimes = JSON.parse(localStorage.getItem('timerHistory') || '[]');
        } catch (e) {
            console.error('Failed to parse timer history from localStorage', e);
        }

        savedTimes.push(this.seconds);

        // Om det finns fler än 10 objekt i local storage, ta bort det äldsta (index 0)
        if (savedTimes.length > 10) {
            savedTimes.shift();
        }

        // Spara den uppdaterade listan tillbaka i localStorage
        localStorage.setItem('timerHistory', JSON.stringify(savedTimes));

        // console.log('Timer saved:', savedTimes); //console.log för testning
    }
}