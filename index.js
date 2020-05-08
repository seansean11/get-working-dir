const core = require("@actions/core");
const exec = require("@actions/exec");
const io = require("@actions/io");

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
    const hash = core.getInput("commit-hash");
    let myOutput = "";
    let myError = "";
    await exec.exec(
      `"${gitPath}" diff-tree --no-commit-id --name-only -r ${hash}`,
      [],
      {
        listeners: {
          stdout: (data) => {
            core.debug(data);
            myOutput += data.toString();
          },
          stderr: (data) => {
            core.debug(data);
            myError += data.toString();
          },
          stdline: (data) => {
            core.debug(data);
          },
          errline: (data) => {
            core.debug(data);
          },
          debug: (data) => {
            core.debug(data);
          },
        },
      }
    );
    core.debug(myError);
    core.debug(myOutput);
    core.setOutput("working-dir", myOutput);
  } catch (error) {
    core.error(error);
    core.setFailed(error.message);
  }
};

start();
