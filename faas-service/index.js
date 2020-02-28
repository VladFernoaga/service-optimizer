function myAction(args) {
  console.log("vlad was here");
  const leftPad = require("left-pad");
  const lines = args.lines || [];
  return { result: "CLI updated", padded: lines.map(l => leftPad(l, 30, ".")) };
}

global.main = myAction;
