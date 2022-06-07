export function* map<T, U>(iterable: Iterable<T>, func: (value: T) => U) {
  for (const v of iterable) {
    yield func(v);
  }
}
