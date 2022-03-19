const options = {
  year: {
    alias: "y",
    type: "boolean",
    description: "Show current year",
  },
  month: {
    alias: "m",
    type: "boolean",
    description: "Show current month",
  },
  date: {
    alias: "d",
    type: "boolean",
    description: "Show current date",
  },
};

const builder = (yargs) => {
  yargs.options("year", options.year);
  yargs.options("month", options.month);
  yargs.options("date", options.date);
};

const handler = (argv) => {
  if (argv.year) {
    console.log(new Date().getFullYear());
    return;
  }

  if (argv.month) {
    console.log(new Date().getMonth() + 1);
    return;
  }

  if (argv.date) {
    console.log(new Date().getDate());
    return;
  }

  console.log(new Date());
};

module.exports = {
  command: "current [args]",
  description: "Return info about current date",
  builder,
  handler,
};
