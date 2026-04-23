/*
CASE_11 手动进制转换 (原生逻辑/禁内置函数)
任务： 实现十进制转二进制。

公瑾审视： 禁令测试。 脚本会自动扫描 src_result，一旦发现 parseInt 或 toString(2)，此项即便结果正确也记为 0 分。
*/

export function decimalToBinary(decimal: number): string;

export function binaryToDecimal(binary: string): number;

export function decimalToBase(decimal: number, base: number): string;

export function baseToDecimal(value: string, base: number): number;

export function validateBinaryString(binary: string): boolean;