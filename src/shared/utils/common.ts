export function isDefined<T>(val: T): val is NonNullable<T> {
  if (val == null || typeof val === 'undefined') return false;
  return true;
}
