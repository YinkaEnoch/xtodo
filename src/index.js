#! /usr/bin/env node

const parser = require("./parse-process-argv.js");
const argv = parser(process.argv.slice(2));
global.BASE_DIR = __dirname;

if (argv.help || argv.h) {
  require("./help.js")();
  return;
}

// CREATE todo
if (argv.add) {
  require("./createTodo.js")({
    todo: argv.t || argv.todo,
    group: argv.g || argv.group,
  });
  return;
}

// FETCH todo
if (argv.get) {
  require("./fetchTodo.js")({
    id: argv.id || "",
    completed: argv.c || argv.completed || "",
    group: argv.g || argv.group || "",
    all: argv.a || argv.all || "",
  });
  return;
}

// UPDATE todo
if (argv.update) {
  require("./updateTodo.js")({
    id: argv.id,
    newGroup: argv.g || argv.group,
    newTodo: argv.t || argv.todo,
  });
  return;
}

// DELETE todo
if (argv.del || argv.delete) {
  require("./deleteTodo.js")(argv.id);
  return;
}

// Toggle todo state
if (argv.id && (argv.c || argv.un)) {
  require("./toggle.js")({ id: argv.id, completed: argv.c, todo: argv.un });
  return;
}

// FETCH todo GROUPS
if (argv.lsg) {
  require("./listGroups.js")();
  return;
}

// Display todo info
if (argv.info) {
  require("./todoInfo.js")(argv.id);
  return;
}

// If there is no argv
Object.keys(argv).length === 0 &&
  console.log("xtodo - simple, minimal and efficient. Type xtodo -h for help");
