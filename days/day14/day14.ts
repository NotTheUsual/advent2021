import { createCounter, doTimes } from "../_utils";

type Rules = Record<string, string>;
interface ParsedInput {
  polymerTemplate: string;
  pairInsertionRules: Rules;

}
const parseInput = (input: string): ParsedInput => {
  const [polymerTemplate, rules] = input.split('\n\n');
  const pairInsertionRules = rules.split('\n').reduce((ruleMap: Rules, line: string) => {
    const [pair, rule] = line.split(' -> ');
    ruleMap[pair] = rule;
    return ruleMap;
  }, {});
  return { polymerTemplate, pairInsertionRules };
};

export const insertAtIndex = (string: string, substring: string, index: number): string => {
  return string.slice(0, index) + substring + string.slice(index);
};

const applyRules = (template: string, rules: Rules): string => {
  let result = template;
  let offset = 0;

  for (let index = 0; index < template.length - 1; index += 1) {
    const pair = template.slice(index, index + 2);
    if (rules[pair]) {
      result = insertAtIndex(result, rules[pair], index + offset);
      offset += 1;
    }
  }

  return result;
};

export function solvePart1 (input: string): number {
  const { polymerTemplate, pairInsertionRules } = parseInput(input);
  let result = polymerTemplate;

  doTimes(10, () => {
    result = applyRules(result, pairInsertionRules);
  });

  const counter = createCounter();
  for (const character of result) {
    counter[character] += 1;
  }
  
  const values = Object.values(counter).sort((countA, countB) => countA - countB);
  console.log(values);
  return (values.at(-1) as number) - values[0];
}
