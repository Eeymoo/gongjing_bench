/*
CASE_08 特定符号嵌套层级提取与内容解析
任务： 提取类似 [text[inner]] 这种自定义括号内的内容，并标记其深度。

公瑾审视： 重点考察 栈 (Stack) 算法的应用。
*/

export interface NestedContent {
  content: string;
  depth: number;
  startIndex: number;
  endIndex: number;
  children: NestedContent[];
}

export function parseNestedBrackets(text: string): NestedContent[];

export function extractContentAtDepth(text: string, targetDepth: number): string[];

export function validateBracketBalance(text: string): { balanced: boolean; errors: string[] };