// $ npm i -D @ginpei/eslintrc @typescript-eslint/eslint-plugin eslint eslint-config-prettier eslint-plugin-import eslint-plugin-prettier prettier

module.exports = {
  extends: [
    "./node_modules/@ginpei/eslintrc/.eslintrc.js",
    "next",
    "next/core-web-vitals",
  ],
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.test.{ts,tsx}",
          "**/*.spec.{ts,tsx}",
          "**/*.stories.{ts,tsx}",
        ],
      },
    ],
  },
};
