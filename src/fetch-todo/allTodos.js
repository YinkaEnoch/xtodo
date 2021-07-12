const GetCompletedTodo = require("./completed.js");
const GetTodo = require("./todo.js");

const GetAllTodos = ({ group }) => {
  if (group) {
    return [...GetCompletedTodo({ group }), ...GetTodo({ group })];
  }

  return [...GetCompletedTodo({}), ...GetTodo({})];
};

module.exports = GetAllTodos;
