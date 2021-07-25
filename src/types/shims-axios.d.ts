import { AxiosRequestConfig } from "axios";

/** 解决拦截器中定义返回了res.data导致request.then(data)无法获取正确值的问题 */
declare module "axios" {
  export interface AxiosInstance {
    <T = any>(config: AxiosRequestConfig): Promise<T>;
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  }
}
