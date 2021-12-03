type Direction = 'forward' | 'down' | 'up';
interface Instruction {
  direction: Direction;
  amount: number;
}

const processInput = (input: String): Instruction[] => {
  return input.split('\n').map(instruction => {
    const [direction, amount] = instruction.split(' ');
    return {
      direction: direction as Direction,
      amount: parseInt(amount)
    };
  });
};

export function solvePart1 (input: string): number {
  const instructions = processInput(input);
  const position = { x: 0, depth: 0 };
  instructions.forEach(instruction => {
    switch (instruction.direction) {
      case 'forward':
        position.x += instruction.amount;
        return;
      case 'down':
        position.depth += instruction.amount;
        return
      case 'up':
        position.depth -= instruction.amount;
        return;
    }
  });
  return position.x * position.depth;
}

export function solvePart2 (input: string): number {
  const instructions = processInput(input);
  const position = { x: 0, depth: 0, aim: 0 };
  instructions.forEach(instruction => {
    switch (instruction.direction) {
      case 'forward':
        position.x += instruction.amount;
        position.depth += (position.aim * instruction.amount);
        return;
      case 'down':
        position.aim += instruction.amount;
        return
      case 'up':
        position.aim -= instruction.amount;
        return;
    }
  });
  return position.x * position.depth;
}