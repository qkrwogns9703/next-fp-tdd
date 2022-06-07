export function reduce<T>(
  iterable: Iterable<T>,
  func: (prev: T, cur: T) => T
): T;
export function reduce<T>(
  iterable: Iterable<T>,
  func: (prev: T, cur: T) => T,
  init: T
): T;
export function reduce<T, U>(
  iterable: Iterable<T>,
  func: (prev: U, cur: T) => U,
  init: U
): U;
export function reduce<T, U>(
  iterable: Iterable<T>,
  func: (prev: T | U, cur: T) => T | U,
  init?: any
) {
  let result = init;

  for (const cur of iterable) {
    if (!result) result = cur;
    else result = func(result as T | U, cur);
  }

  return result;
}
