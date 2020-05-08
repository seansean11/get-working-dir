const path = require("path");
const process = require("process");
const cp = require("child_process");

const ip = path.join(__dirname, "index.js");

test("test runs", () => {
  process.env["INPUT_DEPTH"] = "2";
  console.log(cp.execSync(`node ${ip}`).toString());
});
