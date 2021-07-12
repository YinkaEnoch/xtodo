const ReadFile = require("../readFile.js");

const GetTodo = ({ id, group }) => {
  const { todos: data } = JSON.parse(ReadFile());

  // Return a todo with a given id
  if (id) {
    const todo = data.filter((todo) => todo.id == id);
    return todo;
  }

  // Return all todos in a group
  if (group) {
    const gTodos = data.filter((todo) => todo.group == group.toUpperCase());
    return gTodos;
  }

  return data;
};

module.exports = GetTodo;
