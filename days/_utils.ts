type Keyable = string | number | symbol;
export const safeIncrement = <TKey extends Keyable>(collection: Record<TKey, number>, key: TKey) => {
  collection[key] ||= 0;
  collection[key] += 1;
};

export const doTimes = (times: number, predicate: () => void): void => {
  [...new Array(times)].forEach(predicate);
};

export const createCounter = () => new Proxy<Record<string, number>>({}, { get: (target, name: string) => name in target ? target[name] : 0 });
