type Keyable = string | number | symbol;
export const safeIncrement = <TKey extends Keyable>(collection: Record<TKey, number>, key: TKey) => {
  collection[key] ||= 0;
  collection[key] += 1;
};
