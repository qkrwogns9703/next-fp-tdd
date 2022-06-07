export function* filter<T>(iterable: Iterable<T>, func: (value: T) => boolean) {
  for (const v of iterable) {
    if (func(v)) yield v;
  }
}
