const options = {
  year: {
    alias: "y",
    type: "number",
    description: "Show future date in the specified years",
  },
  month: {
    alias: "m",
    type: "number",
    description: "Show future date in the specified months",
  },
  date: {
    alias: "d",
    type: "number",
    description: "Show future date in the specified days",
  },
};

const builder = (yargs) => {
  yargs.options("year", options.year);
  yargs.options("month", options.month);
  yargs.options("date", options.date);
};

const handler = (argv) => {
  const date = new Date();

  if (argv.year) {
    date.setFullYear(date.getFullYear() + argv.year);
  }

  if (argv.month) {
    date.setMonth(date.getMonth() + argv.month);
  }

  if (argv.date) {
    date.setDate(date.getDate() + argv.date);
  }

  console.log(date);
};

module.exports = {
  command: "add [args]",
  description: "Show future date",
  builder,
  handler,
};
