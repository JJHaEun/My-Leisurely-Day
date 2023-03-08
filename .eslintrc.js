module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "**/tsconfig.json",
  },
  plugins: ["react", "jest/globals"],
  rules: {
    "react/react-in-jsx-scope": "off",
    // "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/no-misused-promises": "off", // HOF를 배우고 나서 wrapAsync 함수로 해결 가능(그 전까지는 off 할 것)
    "react/display-name": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
  },
};
