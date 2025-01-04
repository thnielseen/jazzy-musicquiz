import { Timer } from './timerFunction';

let gameTimer: Timer | null = null;

export function getGameTimer(timeDisplay: HTMLElement): Timer {
    if (!gameTimer) {
        gameTimer = new Timer(timeDisplay);
    }
    return gameTimer;
}