/*
CASE_09 CSS 颜色格式转换器 (Hex/RGBA)
任务： 实现 #FFFFFF 到 rgba(255,255,255,1) 的互转，需支持 3 位和 8 位 Hex。

公瑾审视： 考察正则表达式的精度，尤其是对 alpha 通道（透明度）的计算。
*/

export interface RGBAColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface HSLColor {
  h: number;
  s: number;
  l: number;
  a: number;
}

export function hexToRgba(hex: string): RGBAColor;

export function rgbaToHex(rgba: RGBAColor): string;

export function rgbaToHsl(rgba: RGBAColor): HSLColor;

export function hslToRgba(hsl: HSLColor): RGBAColor;

export function formatRgbaString(rgba: RGBAColor): string;

export function parseColorString(colorString: string): RGBAColor | null;