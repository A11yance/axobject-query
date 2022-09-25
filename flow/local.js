/**
 * @flow
 */

type TAXObjectQueryMap<E, K, V> = {
  entries: () => E,
  forEach: ((V, K, E) => void) => void,
  get: (key: K) => ?V,
  has: (key: K) => boolean,
  keys: () => Array<K>,
  values: () => Array<V>,
  @@iterator?: () => Iterator<E>,
};