const { readFileSync } = require("fs");
const path = require("path");
const BASE_DIR = global.BASE_DIR;

const ReadFile = (type) => {
  let FILE_PATH = path.resolve(BASE_DIR, "../data/todo");

  if (type && type.toLowerCase() === "completed") {
    FILE_PATH = path.resolve(BASE_DIR, "../data/completed");
    return readFileSync(FILE_PATH, "utf8");
  }

  return readFileSync(FILE_PATH, "utf8");
};

module.exports = ReadFile;
