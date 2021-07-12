const parser = (args) => {
  const output = {};

  args.forEach((arg) => {
    // Commands
    if (/^[a-zA-Z]/.test(arg)) {
      // Check for =
      if (arg.includes("=")) {
        arg = arg.split("=");
        // append to output
        output[arg[0]] = arg[1];
        return;
      }
      output[arg] = true;
      return;
    }

    // Parameters: Long version '--'
    if (arg.startsWith("--")) {
      // Check for =
      if (arg.includes("=")) {
        arg = arg.split("=");
        // append to output
        output[arg[0].slice(2)] = arg[1];
        return;
      }

      output[arg.slice(2)] = true;
      return;
    }

    // Flags / Parameters: Short version '-'
    if (/^-{1}\w/.test(arg)) {
      arg = arg.split("");
      let [, ...argArr] = arg;

      // push arg to output
      argArr.forEach((arg) => (output[arg] = true));
    }
  });

  return output;
};

module.exports = parser;
