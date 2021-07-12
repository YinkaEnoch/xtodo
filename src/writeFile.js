const { writeFileSync } = require("fs");
const path = require("path");
const BASE_DIR = global.BASE_DIR;

const WriteFile = ({ data, type }) => {
  let FILE_PATH = path.resolve(BASE_DIR, "../data/todo");

  if (type && type.toLowerCase() === "completed") {
    FILE_PATH = path.resolve(BASE_DIR, "../data/completed");

    writeFileSync(FILE_PATH, data);
  }

  writeFileSync(FILE_PATH, data);
};

module.exports = WriteFile;
