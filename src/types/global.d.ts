/** 被immutable包裹的对象 */
interface ObjWithImmutable<P> {
  toJS: () => P;
  get: <K extends keyof P>(k: K) => ObjWithImmutable<P[K]>;
  set: <K extends keyof P>(k: K, value: P[K]) => ObjWithImmutable<P>;
  getIn: <K = any>(
    collection?: any,
    keyPath?: Iterable<any>,
    notSetValue?: any
  ) => P[K] | ObjWithImmutable<P[K]>;
  size: number;
}
