import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";

export default [
  // Базовые правила ESLint
  js.configs.recommended,

  // Настройки для TypeScript/JSX
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: "./tsconfig.json"
      }
    }
  },

  // Правила для React
  {
    files: ["**/*.{tsx,jsx}"],
    plugins: {
      react: reactPlugin
    },
    rules: {
      // Правила из jsx-runtime
      ...reactPlugin.configs["jsx-runtime"].rules,

      // Ваши кастомные правила
      "react/jsx-filename-extension": [
        "error",
        {
          extensions: [".js", ".jsx", ".tsx"]  // Исправленный формат
        }
      ],
      "import/no-unresolved": "off",
      "import/prefer-default-export": "off",
      "no-unused-vars": "warn",  // Исправлено опечатку (было no-unused-wars)
      "react/require-default-props": "off",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",

      // Дополнительные рекомендуемые правила
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "off",
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function"
        }
      ]
    }
  }
];