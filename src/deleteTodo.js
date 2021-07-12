const ReadFile = require("./readFile.js");
const WriteFile = require("./writeFile.js");

const DeleteTodo = (id) => {
  if (!id) return false;

  let data = JSON.parse(ReadFile());

  let index = data.todos.findIndex((todo) => todo.id == id);

  if (index > -1) {
    const delTodo = data.todos[index];

    data.todos.splice(index, 1);
    WriteFile({ data: JSON.stringify(data) });
    console.log("Todo successfully deleted");
    console.log(delTodo);
    //logger(todo);
    return;
  } else {
    // Check in completedTodos
    data = JSON.parse(ReadFile("completed"));
    index = data.todos.findIndex((todo) => todo.id == id);

    const delTodo = data.todos[index];

    data.todos.splice(index, 1);
    WriteFile({ data: JSON.stringify(data), type: "completed" });
    console.log("Todo successfully deleted");
    console.log(delTodo);
    //logger(todo);
    return;
  }

  console.log(`Todo with id [${id}] not found! :(`);
};

module.exports = DeleteTodo;
