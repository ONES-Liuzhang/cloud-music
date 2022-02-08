export function noop() {}

export function getCount(count: number): string {
  if (count < 0) return "0";
  if (count < 10000) {
    return count + "";
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 10000) / 10 + "万";
  } else {
    return Math.floor(count / 10000000) / 10 + "亿";
  }
}

export function getAlbumCreatorName(arr: Array<{ name: "string" }>) {
  return arr.map((item) => item.name).join("/");
}

/** 防抖 */
export function debounce(fn: any, duration = 300) {
  if (!fn) return noop;
  if (typeof fn !== "function") {
    throw new Error("debounce 参数必须是一个函数！");
  }
  let startTime = Date.now();
  return (...args: any) => {
    let currTime = Date.now();
    if (currTime - startTime >= duration) {
      fn.apply(fn, args);
    }
    startTime = currTime;
  };
}

export function isEmptyObj(obj: any): boolean {
  if(!obj || Object.keys(obj).length === 0) return true

  return false
}