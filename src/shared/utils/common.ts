export function isDefined<T>(val: T): val is NonNullable<T> {
  if (val == null || typeof val === 'undefined') return false;
  return true;
}

export function curryr2(fn: (a: unknown, b: unknown) => any) {
  return (b: unknown) => (a: unknown) => fn.apply(null, [a, b]);
}

export const eq = curryr2((a: unknown, b: unknown) => a === b);
