/*
CASE_03 特定排序算法标准实现 (严谨性)
任务： 指定实现 快速排序 (Quick Sort) 或 归并排序 (Merge Sort)。

公瑾审视： 测算其在处理"已排序数组"、"逆序数组"和"大量重复元素数组"时的耗时与稳定性。
*/

export function quickSort<T>(arr: T[], compareFn?: (a: T, b: T) => number): T[];

export function mergeSort<T>(arr: T[], compareFn?: (a: T, b: T) => number): T[];

export function testSortPerformance<T>(
  sortFn: (arr: T[], compareFn?: (a: T, b: T) => number) => T[],
  testCases: {
    sorted: T[];
    reversed: T[];
    duplicates: T[];
  }
): {
  sortedTime: number;
  reversedTime: number;
  duplicatesTime: number;
  isStable: boolean;
};