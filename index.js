const core = require("@actions/core");
const exec = require("@actions/exec");

const args = [
  "diff-tree",
  "--no-commit-id",
  "--name-only",
  "-r",
  core.getInput("commit-hash"),
];

const start = async () => {
  try {
    const gitPath = await io.which("git", true);
    const depth = core.getInput("depth");
    core.setOutput("working-dir", "test");
    const test = await exec.exec(`"${gitPath}"`, args);
    core.debug(test);
    core.debug(process.env);
    core.debug(`Hello ${depth}!`);
  } catch (error) {
    core.error(error);
    core.setFailed(error.message);
  }
};

start();
