#!/bin/bash

# 1. 严格检查环境变量
if [ -z "$MODEL_NAME" ]; then
    echo "[Gongjing_Bench] 系统异常: 必需的环境变量 MODEL_NAME 未正确配置"
    exit 1
fi

# 2. 生成基于模型和时间的唯一 ID
TIMESTAMP=$(date +"%Y_%m_%d_%H_%M_%S")
BRANCH_NAME="bench_${MODEL_NAME}_${TIMESTAMP}"

echo "[Gongjing_Bench] 实验环境初始化中..."
echo "[Gongjin_Bench] 待测模型标识: $MODEL_NAME"

# 3. 确保从最新的主分支（基准测试集）切出
git checkout main
git pull origin main

# 4. 创建新分支
git checkout -b "$BRANCH_NAME"

# 5. 记录元数据
echo "{\"model\": \"$MODEL_NAME\", \"branch\": \"$BRANCH_NAME\", \"start_time\": \"$TIMESTAMP\"}" > metadata.json

echo "[Gongjing_Bench] 实验环境配置完成: $BRANCH_NAME"