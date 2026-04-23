/*
CASE_07 自创结构化语言解析器 (DSL to JSON)
任务： 解析一种特定格式（如：用 > 表示层级的字符串），将其转为嵌套 JSON。

公瑾审视： 考察模型对递归逻辑的理解，以及对缩进/特殊符号的鲁棒性。
*/

export interface ParsedNode {
  name: string;
  level: number;
  children: ParsedNode[];
  parent?: ParsedNode;
}

export function parseDSL(input: string): ParsedNode[];

export function dslToJSON(dsl: string): any;

export function validateDSLSyntax(input: string): { valid: boolean; errors: string[] };