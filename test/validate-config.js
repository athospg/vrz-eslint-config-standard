const eslint = require("eslint");
const test = require("tape");

test("load config in eslint to validate all rule syntax is correct", async t => {
  const CLIEngine = eslint.ESLint;

  const cli = new CLIEngine({
    useEslintrc       : false,
    overrideConfigFile: ".eslintrc.js",
  });

  const code = `
const foo = 1;
const bar = function(fo) {
  return fo ** 2;
};
bar(foo);`;

  const lintResult = await cli.lintText(code);

  t.equal(lintResult.length, 1);
  t.equal(lintResult[0].errorCount, 0);
  t.end();
});
