/**
 * Randomly shuffles the elements of an array using the Fisher-Yates algorithm and returns the shuffled array.
 *
 * @param {Array} array - The input array to be shuffled. This array will be modified in place.
 * @returns {Array} - The shuffled array with its elements in random order.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * const shuffledNumbers = shuffleArray(numbers);
 */
export function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at indices i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}