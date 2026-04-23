/*
CASE_10 SVG 路径解析与几何长度计算
任务： 输入一段 SVG Path（如 M0 0 L10 10），计算其物理长度。

公瑾审视： 考察对字符串指令的 Lexing 能力以及基本的勾股定理数学实现。
*/

export interface SVGCommand {
  type: 'M' | 'L' | 'H' | 'V' | 'C' | 'S' | 'Q' | 'T' | 'A' | 'Z';
  args: number[];
  absolute: boolean;
}

export interface Point {
  x: number;
  y: number;
}

export function parseSVGPath(pathString: string): SVGCommand[];

export function calculatePathLength(pathString: string): number;

export function getPathPoints(pathString: string, resolution?: number): Point[];

export function validateSVGPath(pathString: string): { valid: boolean; errors: string[] };