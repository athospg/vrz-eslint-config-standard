module.exports = {
  rules: {
    // Possible Errors
    "no-extra-parens"            : [ "error", "all", { nestedBinaryExpressions: false }],
    "no-extra-semi"              : "error",
    "no-template-curly-in-string": "error",
    "no-unreachable-loop"        : "error",

    // Best Practices
    "block-scoped-var"      : "error",
    "consistent-return"     : "error",
    curly                   : "error",
    "default-case-last"     : "error",
    "default-param-last"    : [ "error" ],
    "grouped-accessor-pairs": "error",
    "max-classes-per-file"  : [ "error", 1 ],
    "no-constructor-return" : "error",
    "no-empty-function"     : "error",
    "no-eq-null"            : "error",
    "no-eval"               : "error",
    "no-extend-native"      : "error",
    "no-extra-bind"         : "error",
    "no-implicit-coercion"  : "error",
    "no-implied-eval"       : "error",
    "no-invalid-this"       : "error",
    "no-iterator"           : "error",
    "no-labels"             : "error",
    "no-lone-blocks"        : "error",
    "no-loop-func"          : "error",
    "no-new"                : "error",
    "no-new-func"           : "error",
    "no-octal-escape"       : "error",
    "no-param-reassign"     : [
      "error",
      {
        props: false,
      },
    ],
    "no-proto"                    : "error",
    "no-redeclare"                : "error",
    "no-return-assign"            : [ "error", "always" ],
    "no-return-await"             : "error",
    "no-script-url"               : "error",
    "no-self-compare"             : "error",
    "no-sequences"                : "error",
    "no-throw-literal"            : "error",
    "no-unused-expressions"       : "error",
    "no-useless-call"             : "error",
    "no-useless-return"           : "error",
    "prefer-promise-reject-errors": "error",
    radix                         : "error",
    "require-await"               : "warn",
    yoda                          : [
      "error",
      "never",
      {
        exceptRange: true,
      },
    ],

    // Strict Mode
    strict: "error",

    // Variables
    "no-shadow"     : "off",
    "no-undef"      : "off",
    "no-unused-vars": "error",

    // Stylistic Issues
    "array-bracket-newline": [ "error", "consistent" ],
    "array-bracket-spacing": [
      "error",
      "always",
      {
        arraysInArrays : false,
        objectsInArrays: false,
      },
    ],
    "array-element-newline": [ "error", "consistent" ],
    "block-spacing"        : "error",
    "brace-style"          : [
      "error",
      "1tbs",
      {
        allowSingleLine: true,
      },
    ],
    "capitalized-comments": [ "off" ],
    "comma-dangle"        : [
      "error",
      {
        arrays   : "always-multiline",
        objects  : "always-multiline",
        imports  : "always-multiline",
        exports  : "always-multiline",
        functions: "never",
      },
    ],
    "comma-spacing"                 : [ "error", { before: false, after: true }],
    "func-call-spacing"             : [ "error", "never" ],
    "function-call-argument-newline": [ "error", "consistent" ],
    indent                          : [ "error", 2 ],
    "jsx-quotes"                    : [ "error", "prefer-double" ],
    "key-spacing"                   : [
      "error",
      {
        align: {
          on: "colon",
        },
      },
    ],
    "keyword-spacing"            : [ "error" ],
    "lines-between-class-members": [ "error", "always", { exceptAfterSingleLine: true }],
    "max-len"                    : [
      "error",
      {
        code         : 120,
        tabWidth     : 2,
        comments     : 120,
        ignorePattern: "^import\\s.+\\sfrom\\s.+;$",
        ignoreUrls   : true,
      },
    ],
    "max-lines"              : [ "error", 300 ],
    "max-lines-per-function" : "error",
    "max-statements-per-line": [
      "error",
      {
        max: 1,
      },
    ],
    "multiline-ternary"       : [ "error", "always-multiline" ],
    "new-parens"              : "error",
    "newline-per-chained-call": [
      "error",
      {
        ignoreChainWithDepth: 2,
      },
    ],
    "no-array-constructor": "error",
    "no-lonely-if"        : "error",
    "no-mixed-operators"  : [
      "error",
      {
        groups: [
          [ "+", "-", "*", "/", "%", "**" ],
          [ "&", "|", "^", "~", "<<", ">>", ">>>" ],
          [ "==", "!=", "===", "!==", ">", ">=", "<", "<=" ],
          [ "&&", "||" ],
          [ "in", "instanceof" ],
        ],
        allowSamePrecedence: true,
      },
    ],
    "no-multiple-empty-lines"         : "error",
    "no-trailing-spaces"              : "error",
    "no-unneeded-ternary"             : "error",
    "no-whitespace-before-property"   : "error",
    "nonblock-statement-body-position": [ "error", "below" ],
    "object-curly-newline"            : [
      "error",
      {
        consistent: true,
      },
    ],
    "object-curly-spacing": [
      "error",
      "always",
      {
        arraysInObjects : false,
        objectsInObjects: false,
      },
    ],
    "object-property-newline": [
      "error",
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    "operator-assignment": [ "error", "always" ],
    "operator-linebreak" : [
      "error",
      "after",
      {
        overrides: {
          "?": "before",
          ":": "before",
        },
      },
    ],
    "prefer-exponentiation-operator": "error",
    "quote-props"                   : [ "error", "as-needed" ],
    quotes                          : [ "error", "double" ],
    semi                            : [ "error", "always" ],
    "semi-style"                    : [ "error", "last" ],
    "space-before-blocks"           : "error",
    "space-before-function-paren"   : [ "error", "never" ],
    "space-in-parens"               : [ "error", "never" ],
    "space-infix-ops"               : "error",
    "space-unary-ops"               : [
      "error",
      {
        words   : true,
        nonwords: false,
      },
    ],

    // ECMAScript 6
    "arrow-body-style"       : [ "error", "as-needed" ],
    "arrow-parens"           : [ "error", "as-needed" ],
    "arrow-spacing"          : "error",
    "no-class-assign"        : "error",
    "no-confusing-arrow"     : "error",
    "no-const-assign"        : "error",
    "no-dupe-class-members"  : "error",
    "no-duplicate-imports"   : "error",
    "no-new-symbol"          : "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor" : "error",
    "no-useless-rename"      : [
      "error",
      {
        ignoreDestructuring: false,
        ignoreImport       : false,
        ignoreExport       : false,
      },
    ],
    "no-var"                 : "error",
    "object-shorthand"       : "error",
    "prefer-arrow-callback"  : "error",
    "prefer-const"           : "error",
    "prefer-numeric-literals": "error",
    "prefer-rest-params"     : "error",
    "prefer-spread"          : "error",
    "prefer-template"        : "error",
    "require-yield"          : "error",
    "rest-spread-spacing"    : [ "error", "never" ],

    "import/export"                  : "error",
    "import/first"                   : "error",
    "import/no-absolute-path"        : [ "error", { esmodule: true, commonjs: true, amd: false }],
    "import/no-duplicates"           : "error",
    "import/no-named-default"        : "error",
    "import/no-webpack-loader-syntax": "error",

    "node/handle-callback-err"  : [ "error", "^(err|error)$" ],
    "node/no-callback-literal"  : "error",
    "node/no-deprecated-api"    : "error",
    "node/no-exports-assign"    : "error",
    "node/no-new-require"       : "error",
    "node/no-path-concat"       : "error",
    "node/process-exit-as-throw": "error",

    "promise/param-names": "error",
  },
};
