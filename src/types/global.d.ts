/** 被immutable包裹的对象 */
type ObjWithImmutable<P> = P & {
  toJS: () => P;
  get: (k: keyof P) => P[k];
  set: (k: keyof P, value: P[k]) => p[k];
};
