const core = require("@actions/core");
const exec = require("@actions/exec");

const gitPath = await io.which("git", true);
const args = [
  "diff-tree",
  "--no-commit-id",
  "--name-only",
  "-r",
  core.getInput("commit-hash"),
];

try {
  const depth = core.getInput("depth");
  core.setOutput("working-dir", "test");
  const test = exec.exec(`"${gitPath}"`, args);
  core.info(test);
  core.info(process.env);
  core.info(`Hello ${depth}!`);
} catch (error) {
  core.info(error);
  core.setFailed(error.message);
}
