import { temporalSort } from '../../src_result/CASE_04/index';
import { expect, it, describe } from "bun:test";

describe("[CASE_04](10) 时空倒流排序 (Retroactive Temporal Sort) 深度审计", () => {

  it("基础逻辑：验证 XOR 运算与奇数插入副作用", () => {
    // 逻辑：[10, 20, 30] -> 20^5=17(奇) -> 插入0 -> [10, 17, 0, 30]
    const input = [10, 20, 30, { offset: -2, value: 5 }];
    expect(temporalSort(input)).toEqual([10, 17, 0, 30]);
  });

  it("副作用拦截：验证偶数删除后续元素逻辑", () => {
    // 逻辑：[10, 21, 30] -> 21^5=16(偶) -> 删除30 -> [10, 16]
    const input = [10, 21, 30, { offset: -2, value: 5 }];
    expect(temporalSort(input)).toEqual([10, 16]);
  });

  it("边界容错：offset 指向越界时应静默忽略", () => {
    // 逻辑：offset -5 在当前长度为 2 的结果集里是非法的
    const input = [10, 20, { offset: -5, value: 100 }];
    expect(temporalSort(input)).toEqual([10, 20]);
  });

  it("链式反应：多重指令连续修改验证索引稳定性", () => {
    /**
     * 推演逻辑：
     * 1. [10, 20] 
     * 2. offset -1(指20), 20^1=21(奇), 插入0 -> [10, 21, 0]
     * 3. offset -2(指21), 21^4=17(奇), 插入0 -> [10, 17, 0, 0]
     */
    const input = [10, 20, { offset: -1, value: 1 }, { offset: -2, value: 4 }];
    expect(temporalSort(input)).toEqual([10, 17, 0, 0]);
  });

  it("极端情况：空输入或仅包含指令", () => {
    expect(temporalSort([])).toEqual([]);
    expect(temporalSort([{ offset: -1, value: 10 }])).toEqual([]);
  });

  it("大数处理：验证 XOR 在较大数值下的表现", () => {
    // 逻辑：[1024] -> 1024^1=1025(奇) -> [1024, 1025, 0]
    const input = [1024, { offset: -1, value: 1 }];
    expect(temporalSort(input)).toEqual([1025, 0]);
  });
});