#!/bin/bash

# 确保脚本能拿到环境变量
MODEL_NAME=${MODEL_NAME:-"unknown_model"}

echo "[Gongjing_Bench] 执行测试评估并生成分析报告..."

# 2. 执行标准化测试：运行 test/ 目录下的基准测试套件
echo "[Gongjing_Bench] 启动基准测试执行引擎..."
bun test ./test/*.test.ts --reporter json --reporter-option output=result.json || true

# 3. 运行评分引擎生成 Markdown
if [ -f "./scripts/score_parser.ts" ]; then
    bun run ./scripts/score_parser.ts
else
    echo "[Gongjing_Bench] 系统异常: 评估脚本 scripts/score_parser.ts 缺失"
    exit 1
fi

# 4. 获取当前得分（由 score_parser.ts 写入此临时文件）
FINAL_SCORE=$(cat .current_score 2>/dev/null || echo "N/A")

# 5. Git 提交存档
git add .
git commit -m "evaluation: $MODEL_NAME 基准测试完成 | 性能得分: $FINAL_SCORE"

# 6. 如果在云端环境，自动推送到远端仓库
# git push origin $(git rev-parse --abbrev-ref HEAD)

echo "[Gongjing_Bench] 基准测试评估完成。实验分支: $(git rev-parse --abbrev-ref HEAD)"
echo "[Gongjing_Bench] 综合性能得分: $FINAL_SCORE"