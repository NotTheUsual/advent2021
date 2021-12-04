#! /usr/bin/env node
const shell = require('shelljs');
const theredoc = require('theredoc');
const flags = require('minimist')(process.argv.slice(2));

const [dayNumber] = flags._;

if (!dayNumber) {
  console.error('No day provided');
  process.exitCode = 1;
  return;
}

const day = `${dayNumber}`.padStart(2, '0');
shell.exec(`mkdir days/day${day}`);
shell.exec(`touch days/day${day}/day${dayNumber}{.input.,.spec.,.}ts`);

const starterCode = theredoc`
export function solvePart1 (input: string): number {
  return 0;
}
`;
shell.exec(`echo "${starterCode}" >> days/day${day}/day${dayNumber}.ts`);

const starterInput = theredoc`
const input = '';
export default input;
`;
shell.exec(`echo "${starterInput}" >> days/day${day}/day${dayNumber}.input.ts`);

const starterTest = theredoc`
import theredoc from 'theredoc';
import { solvePart1 } from './day${dayNumber}';
import day${dayNumber}Input from './day${dayNumber}.input';

describe('Day ${dayNumber}', () => {
  describe('part 1', () => {
    test('test case', () => {
      // const input = theredoc
      // expect(solvePart1(input)).toBe(198);
    });

    test.skip('real puzzle', () => {
      const result = solvePart1(day${dayNumber}Input);
      expect(result).toBe(2954600);
    });
  });
});
`;
shell.exec(`echo "${starterTest}" >> days/day${day}/day${dayNumber}.spec.ts`);
