// Some settings automatically inherited from .editorconfig

module.exports = {
  printWidth        : 100,
  tabWidth          : 2,
  useTabs           : false,
  semi              : true,
  singleQuote       : false,
  quoteProps        : "as-needed",
  jsxSingleQuote    : false,
  trailingComma     : "all",
  bracketSpacing    : true,
  jsxBracketSameLine: false,
  overrides         : [
    {
      files  : ".editorconfig",
      options: { parser: "yaml" },
    },
  ],
};
