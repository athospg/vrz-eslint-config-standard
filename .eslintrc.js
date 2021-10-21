const { rules: baseRules } = require("./lib/base-rules");

module.exports = {
  extends: [ "./lib/base-rules" ],

  parserOptions: {
    ecmaVersion : 2021,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },

  env: {
    es2021: true,
    node  : true,
  },

  plugins: [ "import", "node", "promise", "@typescript-eslint" ],

  globals: {
    document : "readonly",
    navigator: "readonly",
    window   : "readonly",
  },

  rules: baseRules,

  overrides: [
    {
      files: [ "*.js", "*.jsx" ],
      rules: baseRules,
    },
    {
      files: [ "*.ts", "*.tsx" ],

      parser       : "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion : 2021,
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: "module",
        project   : "./tsconfig.json",
      },

      rules: {
        "constructor-super"   : "off",
        "getter-return"       : "off",
        "no-const-assign"     : "off",
        "no-dupe-args"        : "off",
        "no-dupe-keys"        : "off",
        "no-func-assign"      : "off",
        "no-new-symbol"       : "off",
        "no-obj-calls"        : "off",
        "no-this-before-super": "off",
        "no-undef"            : "off",
        "no-unreachable"      : "off",
        "no-unsafe-negation"  : "off",
        "valid-typeof"        : "off",
        "import/named"        : "off",
        "import/no-unresolved": "off",

        "brace-style"                   : "off",
        "@typescript-eslint/brace-style": baseRules["brace-style"],

        camelcase                             : "off",
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "variable",
            format  : [ "camelCase", "PascalCase", "UPPER_CASE" ],
          },
          {
            selector: "function",
            format  : [ "camelCase", "PascalCase" ],
          },
          {
            selector: "typeLike",
            format  : [ "PascalCase" ],
          },
        ],

        "comma-dangle"                   : "off",
        "@typescript-eslint/comma-dangle": [
          baseRules["comma-dangle"][0],
          {
            ...baseRules["comma-dangle"][1],
            enums   : baseRules["comma-dangle"][1].arrays,
            generics: baseRules["comma-dangle"][1].arrays,
            tuples  : baseRules["comma-dangle"][1].arrays,
          },
        ],

        "comma-spacing"                   : "off",
        "@typescript-eslint/comma-spacing": baseRules["comma-spacing"],

        "func-call-spacing"                   : "off",
        "@typescript-eslint/func-call-spacing": baseRules["func-call-spacing"],

        indent                     : "off",
        "@typescript-eslint/indent": baseRules.indent,

        "keyword-spacing"                   : "off",
        "@typescript-eslint/keyword-spacing": baseRules["keyword-spacing"],

        "lines-between-class-members"                   : "off",
        "@typescript-eslint/lines-between-class-members": baseRules["lines-between-class-members"],

        "no-array-constructor"                   : "off",
        "@typescript-eslint/no-array-constructor": baseRules["no-array-constructor"],

        "no-dupe-class-members"                   : "off",
        "@typescript-eslint/no-dupe-class-members": baseRules["no-dupe-class-members"],

        "no-empty-function"                   : "off",
        "@typescript-eslint/no-empty-function": baseRules["no-empty-function"],

        "no-extra-parens"                   : "off",
        "@typescript-eslint/no-extra-parens": baseRules["no-extra-parens"],

        "no-extra-semi"                   : "off",
        "@typescript-eslint/no-extra-semi": baseRules["no-extra-semi"],

        "no-implied-eval"                   : "off",
        "no-new-func"                       : "off",
        "@typescript-eslint/no-implied-eval": baseRules["no-implied-eval"],

        "no-loop-func"                   : "off",
        "@typescript-eslint/no-loop-func": baseRules["no-loop-func"],

        "no-redeclare"                   : "off",
        "@typescript-eslint/no-redeclare": baseRules["no-redeclare"],

        "no-shadow"                   : "off",
        "@typescript-eslint/no-shadow": baseRules["no-shadow"],

        "no-throw-literal"                   : "off",
        "@typescript-eslint/no-throw-literal": baseRules["no-throw-literal"],

        "no-unused-expressions"                   : "off",
        "@typescript-eslint/no-unused-expressions": baseRules["no-unused-expressions"],

        "no-unused-vars"                   : "off",
        "@typescript-eslint/no-unused-vars": baseRules["no-unused-vars"],

        "no-useless-constructor"                   : "off",
        "@typescript-eslint/no-useless-constructor": baseRules["no-useless-constructor"],

        quotes                     : "off",
        "@typescript-eslint/quotes": baseRules.quotes,

        semi                     : "off",
        "@typescript-eslint/semi": baseRules.semi,

        "space-before-function-paren"                   : "off",
        "@typescript-eslint/space-before-function-paren": baseRules["space-before-function-paren"],

        "require-await"                   : "off",
        "@typescript-eslint/require-await": baseRules["require-await"],

        "no-return-await"                : "off",
        "@typescript-eslint/return-await": baseRules["no-return-await"],

        "space-infix-ops"                   : "off",
        "@typescript-eslint/space-infix-ops": baseRules["space-infix-ops"],

        "object-curly-spacing"                   : "off",
        "@typescript-eslint/object-curly-spacing": baseRules["object-curly-spacing"],
      },
    },
    {
      files: [ "*.spec.ts" ],
      rules: {
        "max-lines"             : "off",
        "max-lines-per-function": "off",
        "max-classes-per-file"  : "off",

        "no-empty-function"                   : "off",
        "@typescript-eslint/no-empty-function": "off",
      },
    },
  ],
};
