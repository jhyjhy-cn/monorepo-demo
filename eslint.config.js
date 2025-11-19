import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginVue from "eslint-plugin-vue";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";

const ignores = ["**/dist/**", "**/node_modules/**", ".*", "scripts/**", "**/*.d.ts"];

export default [
  // 忽略项配置
  {
    ignores
  },
  // 通用基础配置
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  // 通用配置
  {
    plugins: {
      prettier: eslintPluginPrettier
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tseslint.parser
    },
    rules: {
      // 自定义
      "no-var": "error",
      "prettier/prettier": "warn"
    }
  },
  // 前端配置
  ...eslintPluginVue.configs["flat/recommended"],
  {
    files: ["apps/frontend/**/*.{ts,js,tsx,jsx,vue}", "packages/components/**/*.{ts,js,tsx,jsx,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    }
  },
  // 后端配置
  {
    files: ["apps/backend/**/*.{ts,js}"],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },
  // Prettier 配置（必须放在最后）
  eslintConfigPrettier
];
