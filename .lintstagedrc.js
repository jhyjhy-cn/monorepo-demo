export default {
  "*.{js,ts,mjs,json,tsx,css,less,scss,vue,html,md}": ["cspell lint"],
  "*.{js,ts,tsx,vue}": ["prettier --write", "eslint"],
  "*.{json,css,less,scss,html,md}": ["prettier --write"]
};
