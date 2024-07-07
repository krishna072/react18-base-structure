module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "react", "react-hooks", "prettier"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "no-restricted-imports": [2, { "patterns": ["../*"] }],
    "no-tabs": ["error", { "allowIndentationTabs": true }],
    "key-spacing": [0, { "mode": "minimum" }],
    "quotes": [2, "double", "avoid-escape"],
    "no-multi-spaces": [
      "error",
      {
        "exceptions": {
          "ImportDeclaration": true,
          "VariableDeclarator": true
        }
      }
    ],
    "no-underscore-dangle": ["error", { "allow": ["_id"] }],
    "func-names": ["error", "always"],
    "max-len": [
      "error",
      {
        "code": 120,
        "ignoreComments": true
      }
    ],
    "object-curly-newline": ["error", { "consistent": true }],

    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prop-types": 0,
    "react/forbid-prop-types": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        "aspects": ["invalidHref"]
      }
    ]
  },
};
