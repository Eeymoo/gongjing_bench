/*
CASE_05 Axios 深度封装 (竞速取消/Abort)
任务： 封装一个 Axios 实例，当同一个 API 被触发第二次时，如果第一次还没返回，则自动调用 AbortController.abort() 取消第一次。

公瑾审视： 必须在 src_result 中真实检测到 AbortError 抛出。
*/
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface AxiosWrapper {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
}

export function createAxiosWithAutoAbort(baseURL?: string): AxiosWrapper;

export function testAbortBehavior(): Promise<{ abortDetected: boolean; error?: Error }>;