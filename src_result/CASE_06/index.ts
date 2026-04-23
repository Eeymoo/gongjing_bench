/*
CASE_06 Axios 配合后端延迟模拟接口
任务： 编写一个支持 AbortSignal 的后端接口，该接口会 setTimeout 3秒后才返回。

公瑾审视： 测试模型生成的后端代码是否能正确响应前端的取消信号，从而释放服务器资源。
*/

export interface DelayedResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  duration: number;
}

export function createDelayedEndpoint(port?: number): Promise<{
  server: any;
  url: string;
  close: () => void;
}>;

export function testAbortableRequest(endpointUrl: string): Promise<{
  aborted: boolean;
  duration: number;
  error?: Error;
}>;