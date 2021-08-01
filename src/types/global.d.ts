/** 被immutable包裹的对象 */
interface ObjWithImmutable<P> {
  toJS: () => P;
  get: <K extends keyof P>(k: K) => ObjWithImmutable<P[K]>;
  set: <K extends keyof P, V extends P[K]>(
    k: K,
    value: V
  ) => ObjWithImmutable<P>;
  getIn: (path: any[], notSetValue?: any) => any;
  // getIn: <K1 extends keyof P, K2 extends keyof P[K1]>(
  //   keys: [K1, K2]
  // ) => P[K1][K2] | ObjWithImmutable<P[K1][K2]>;
  size: number;
}
