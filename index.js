const core = require("@actions/core");
const exec = require("@actions/exec");

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
  const gitPath = await io.which("git", true);
  exec.exec(`"${this.gitPath}"`, args);
  const test = await exec.exec("git     ${{ github.sha }}");
  // console.log(test);
  console.log(process.env);
  console.log(`Hello ${depth}!`);
} catch (error) {
  console.log(error);
  core.setFailed(error.message);
}
