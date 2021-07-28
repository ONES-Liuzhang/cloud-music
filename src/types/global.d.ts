/** 被immutable包裹的对象 */
interface ObjWithImmutable<P> {
  toJS: () => P;
  get: <K = any>(k: K) => P[K];
  set: <K = any>(k: K, value: P[K]) => ObjWithImmutable<P>;
  getIn: <K = any>(
    collection?: any,
    keyPath?: Iterable<any>,
    notSetValue?: any
  ) => P[K];
  size: number;
}
