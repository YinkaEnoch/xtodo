const ReadFile = require("../readFile.js");

const GetCompletedTodo = ({ id, group }) => {
  const { todos: data } = JSON.parse(ReadFile("completed"));

  if (id) {
    const todo = data.filter((todo) => todo.id == id);
    return todo;
  }

  if (group) {
    const gTodos = data.filter((todo) => todo.group == group.toUpperCase());
    return gTodos;
  }

  return data;
};

module.exports = GetCompletedTodo;
