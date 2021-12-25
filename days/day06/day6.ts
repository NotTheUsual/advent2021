import { doTimes } from "../_utils";

export function solvePart1 (input: string): number {
  let fish = input.split(',').map(number => parseInt(number));
  doTimes(80, () => {
    let newFish = [];
    for (let index = 0; index < fish.length; index += 1) {
      const selectedFish = fish[index];
      if (selectedFish === 0) {
        fish[index] = 6;
        newFish.push(8);
      } else {
        fish[index] = selectedFish - 1;
      }
    }
    fish = fish.concat(newFish);
  });
  return fish.length;
}
