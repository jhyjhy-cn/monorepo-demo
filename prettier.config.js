// prettier.config.js

/**
 * @type {import('prettier').Config}
 * @see https://www.prettier.cn/docs/options.html
 */
export default {
  // 指定最大换行长度
  printWidth: 120,
  // 指定缩进空格数
  tabWidth: 2,
  // 是否使用制表符进行缩进
  useTabs: false,
  // 是否在语句末尾添加分号
  semi: true,
  // 是否使用单引号 (true:单引号,false:双引号)
  singleQuote: false,
  // 对象属性引用是否使用单引号
  quoteProps: "as-needed",
  // 在JSX中是否使用单引号 (true:单引号,false:双引号)
  jsxSingleQuote: false,
  // 多行时尽可能打印尾随逗号
  trailingComma: "none",
  // 在对象括号内使用空格
  bracketSpacing: true,
  // 在对象括号内使用空格
  bracketSameLine: false,
  // 箭头函数参数括号
  arrowParens: "avoid",
  requirePragma: false,
  insertPragma: false,
  proseWrap: "preserve",
  htmlWhitespaceSensitivity: "css",
  vueIndentScriptAndStyle: false,
  endOfLine: "auto",
  rangeStart: 0,
  rangeEnd: Infinity
};
