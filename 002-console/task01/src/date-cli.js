const getYargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const current = require("./commands/current");
const add = require("./commands/add");
const sub = require("./commands/sub");

const app = () => {
  const yargs = getYargs(hideBin(process.argv));

  yargs
    .scriptName("date")
    .usage("$0 <cmd> [args]")
    .command(
      current.command,
      current.description,
      current.builder,
      current.handler
    )
    .command(add.command, add.description, add.builder, add.handler)
    .command(sub.command, sub.description, sub.builder, sub.handler)
    .parse();
};

module.exports = { app };
