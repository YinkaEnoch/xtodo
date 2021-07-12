const ReadFile = require("./readFile.js");
const GetAllTodos = require("./fetch-todo/allTodos.js");
const GetCompletedTodo = require("./fetch-todo/completed.js");
const GetTodo = require("./fetch-todo/todo.js");
const Logger = require("./fetch-todo/logger.js");

const FetchTodo = ({ id, group, completed, all }) => {
  if (all && group) {
    Logger(GetAllTodos({ group }));
    return;
  }

  if (all) {
    Logger(GetAllTodos({}));
    return;
  }

  if (id && completed) {
    Logger(GetCompletedTodo({ id }));
    return;
  }

  if (group && completed) {
    Logger(GetCompletedTodo({ group }));
    return;
  }

  if (completed) {
    Logger(GetCompletedTodo({}));
    return;
  }

  if (id) {
    Logger(GetTodo({ id }));
    return;
  }

  if (group) {
    Logger(GetTodo({ group }));
    return;
  }

  Logger(GetTodo({}));
};

module.exports = FetchTodo;
