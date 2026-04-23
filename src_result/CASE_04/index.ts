/*
CASE_04 时空倒流排序 (Retroactive Temporal Sort)
任务： 实现一个序列处理器。从左到右遍历混合数组 Array<number | {offset, value}>。遇到 number 直接存入结果集。遇到 修正对象 则根据 offset 回溯修改结果集中的旧元素（执行 XOR 运算）。触发副作用： 修改后若为偶数，删除其后紧邻的一个元素；若为奇数，在其后插入一个 0。
公瑾审视： 这是高阶逻辑推理与指令遵循测试。记忆拦截： 由于该逻辑在公开语料中极少见，模型无法通过“背书”通关。索引陷阱： 考察模型在动态修改数组（删除/插入）时，是否能保持后续指令的索引指向正确。违规判定： * 若模型因索引计算混乱导致最终数组长度错误，直接扣除 70% 分数。若完全忽略了“副作用（奇偶判定）”逻辑，计 0 分。完美通关（Perfect Bonus）： 逻辑丝滑且处理了 offset 越界等边缘情况，分值 $\times 1.25$。
*/

type CorrectionObject = { offset: number; value: number };
type TemporalInput = number | CorrectionObject;

function isCorrectionObject(el: TemporalInput): el is CorrectionObject {
  return typeof el === "object" && el !== null && "offset" in el && "value" in el;
}

export function temporalSort(arr: TemporalInput[]): number[] {
  const result: number[] = [];

  for (const el of arr) {
    if (isCorrectionObject(el)) {
      const { offset, value } = el;
      const targetIndex = result.length - offset;

      // 边缘情况：offset 越界，跳过
      if (targetIndex < 0 || targetIndex >= result.length) continue;

      // XOR 运算
      result[targetIndex] ^= value;
      const modified = result[targetIndex];

      if (modified % 2 === 0) {
        // 偶数：删除其后紧邻的一个元素
        if (targetIndex + 1 < result.length) {
          result.splice(targetIndex + 1, 1);
        }
      } else {
        // 奇数：在其后插入一个 0
        result.splice(targetIndex + 1, 0, 0);
      }
    } else {
      result.push(el);
    }
  }

  return result;
}