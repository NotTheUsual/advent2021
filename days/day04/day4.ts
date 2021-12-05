import { safeIncrement } from '../_utils';

interface Cell {
  called: boolean;
  row: number;
  column: number;
}

type Board = Record<number, Cell>;

const parseDrawnNumbers = (numbers: string): number[] => {
  return numbers.split(',').map(number => parseInt(number));
}

const parseBoards = (boardBlueprints: string[]): Board[] => {
  return boardBlueprints.map(boardBlueprint => {
    const board: Board = {};
    const numbers = boardBlueprint.split(/\s+/);
    numbers.filter(Boolean).forEach((number, index) => {
      board[parseInt(number)] = {
        called: false,
        row: Math.floor(index / 5),
        column: index % 5
      };
    });
    return board;
  });
};

type Accumulator = Record<string, number>;

const hasWon = (board: Board): boolean => {
  const accumulator: Accumulator = {};
  for (let number in board) {
    const cell = board[number];
    if (cell.called) {
      safeIncrement(accumulator, `r${cell.row}`);
      safeIncrement(accumulator, `c${cell.column}`);
    }
  };
  return Object.values(accumulator).some(total => total === 5);
};

const calculateScoreFor = (board: Board, finalNumber: number): number => {
  const uncalledNumbers = Object.keys(board).reduce((total: number, numberKey: string) => {
    const number = parseInt(numberKey);
    return (board[number].called) ? total : total + number;
  }, 0);
  return uncalledNumbers * finalNumber;
};

export function solvePart1 (input: string): number {
  const [drawnNumberStrings, ...boardBlueprints] = input.split('\n\n');
  const drawnNumbers = parseDrawnNumbers(drawnNumberStrings);
  const boards = parseBoards(boardBlueprints);
  
  for (let number of drawnNumbers) {
    for (let board of boards) {
      if (number in board) {
        board[number].called = true
        if (hasWon(board)) return calculateScoreFor(board, number);
      }
    }
  }

  return 0;
}

export function solvePart2 (input: string): number {
  const [drawnNumberStrings, ...boardBlueprints] = input.split('\n\n');
  const drawnNumbers = parseDrawnNumbers(drawnNumberStrings);
  const boards = parseBoards(boardBlueprints);
  const winners = new Set<number>();
  
  for (let number of drawnNumbers) {
    for (let index = 0; index < boards.length; index += 1) {
      if (winners.has(index)) continue;
      const board = boards[index];
      if (number in board) {
        board[number].called = true
        if (hasWon(board)) {
          winners.add(index);
          if (winners.size === boards.length) {
            return calculateScoreFor(board, number);
          }
        }
      }
    }
  }

  return 0;
}
