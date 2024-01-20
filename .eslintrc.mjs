export default {
  extends: ["plugin:astro/recommended", "plugin:astro/jsx-a11y-recommended"],
  ignorePatterns: ["node_modules", "cms", "public"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {},
    },
    {
      files: ["**/*.tsx", "**/*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        project: "./tsconfig.json",
      },
      extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
      ],
      settings: {
        react: {
          version: "detect",
        },
        "import/resolver": {
          typescript: {
            project: "./tsconfig.json",
          },
        },
      },
      plugins: ["import"],
      rules: {
        "no-undef": "off",
        "react/prop-types": "off",
        "no-anonymous-exports-page-templates": "warn",
        "limited-exports-page-templates": "warn",
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "@typescript-eslint/consistent-type-exports": "error",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/no-floating-promises": "error",
        quotes: [
          "error",
          "double",
          { avoidEscape: true, allowTemplateLiterals: false },
        ],
        "import/order": [
          "error",
          {
            groups: [
              "builtin",
              "external",
              "internal",
              "parent",
              "sibling",
              "index",
            ],
            "newlines-between": "always",
          },
        ],
      },
    },
  ],
};
