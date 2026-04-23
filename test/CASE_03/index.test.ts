import { sort } from '../../src_result/CASE_03/index';
import { expect, it, describe } from "bun:test";

describe("[CASE_03](10) 动态多轨折返重排算法 深度审计", () => {

  it("试题示例测试", () => {
    const arr = [1, 19, 13, 12, 16, 17, 2, 3, 4,6, 7, 9, 8, 18, 5, 15, 14, 10, 11, 20];
    const tracks = 5;
    expect(sort(arr, tracks)).toEqual([1, 17, 3, 19, 5, 6, 12, 8, 14, 10, 11, 7, 13, 9, 15, 16, 2, 18, 4, 20]);
  });

  it("空数组测试", () => {
    const arr: number[] = [];
    const tracks = 3;
    expect(sort(arr, tracks)).toEqual([]);
  })

});