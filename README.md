# Monorepo Demo

一个基于 PNPM Workspace 的 Monorepo 项目示例，演示前后端代码共享与统一管理。

## 项目结构

```
monorepo-demo/
├── apps/              # 应用目录
│   ├── backend/       # 后端服务 (Node.js + TypeScript)
│   └── frontend/      # 前端应用 (Vue + TypeScript)
├── packages/          # 共享包目录
│   ├── components/    # UI 组件库
│   └── utils/         # 工具函数库
```

## 技术栈

- **包管理**: PNPM >= 10.14.0
- **语言**: TypeScript 5.9+
- **运行环境**: Node.js >= 22.12.0
- **代码规范**: ESLint 9 + Prettier + CSpell
- **提交规范**: Commitizen + Commitlint

## 快速开始

```bash
# 安装依赖
pnpm install

# 代码格式化
pnpm lint:prettier

# 代码检查
pnpm lint:eslint

# 拼写检查
pnpm lint:cspell

# 规范化提交
pnpm commit
```

## 特性

- ✅ Monorepo 架构，统一管理多个项目
- ✅ 跨包依赖共享，减少重复代码
- ✅ 统一的代码规范和质量检查
- ✅ TypeScript 严格模式，类型安全
- ✅ 规范化的 Git 提交流程
