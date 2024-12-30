const intro = document.querySelector('.intro') as HTMLElement;
const game = document.querySelector('.game') as HTMLElement;
const result = document.querySelector('.result') as HTMLElement;

export function showGameSection(): void{
    intro.classList.add('hidden');
    game.classList.remove('hidden');
}

export function switchHiddenGameAndResult(): void{
    game.classList.toggle('hidden');
    result.classList.toggle('hidden');
}

export function showStartSection(): void{
    intro.classList.remove('hidden');
    result.classList.add('hidden');
}