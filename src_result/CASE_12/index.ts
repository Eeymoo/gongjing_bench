/*
CASE_12 特定规则 URL 协议解析 (Params/Action)
任务： 解析类似 myapp://open?id=123&data={} 的自定义协议。

公瑾审视： 考察对 URL 编码（decodeURIComponent）的处理以及对非法格式的容错能力。
*/

export interface ParsedURL {
  protocol: string;
  action: string;
  params: Record<string, any>;
  rawQuery: string;
}

export function parseCustomProtocol(url: string): ParsedURL | null;

export function buildCustomProtocolURL(
  protocol: string,
  action: string,
  params: Record<string, any>
): string;

export function validateCustomURL(url: string): { valid: boolean; errors: string[] };

export function extractJSONParams(url: string): Record<string, any>;