const ReadFile = require("./readFile.js");
const WriteFile = require("./writeFile.js");

const ToggleTodo = ({ id, completed, todo }) => {
  if (!id) return false;

  // Complete a todo
  // Move todo to completed
  if (completed) {
    let data = JSON.parse(ReadFile());

    let index = data.todos.findIndex((todo) => todo.id == id);

    if (index > -1) {
      const d = new Date();

      let todo = data.todos[index];
      todo.completed = true;
      todo.updatedAt = `${d.toDateString()}, ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

      // Remove todo from uncompleted todos
      data.todos.splice(index, 1);
      // Write changes to todos file
      WriteFile({ data: JSON.stringify(data) });

      // Append to completed todos
      let completedTodos = JSON.parse(ReadFile("completed")).todos;
      completedTodos.unshift(todo);

      // Write to completed todos
      WriteFile({
        data: JSON.stringify({ todos: completedTodos }),
        type: "completed",
      });
      console.log("Todo state changed to completed");
      return true;
    }
    console.log(`Todo with id [${id}] not found! :(`);
    return true;
  }

  // Undone a completed todo
  if (todo) {
    let data = JSON.parse(ReadFile("completed"));

    let index = data.todos.findIndex((todo) => todo.id == id);

    if (index > -1) {
      const d = new Date();

      let todo = data.todos[index];
      todo.completed = false;
      todo.updatedAt = `${d.toDateString()}, ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

      // Remove todo from completed todos
      data.todos.splice(index, 1);
      // Save changes to file
      WriteFile({ data: JSON.stringify(data), type: "completed" });

      // Append to todos
      let TODOS = JSON.parse(ReadFile());
      TODOS.todos.unshift(todo);

      // Write to completed todos
      WriteFile({ data: JSON.stringify(TODOS) });
      console.log("Todo state changed to uncompleted");
      return true;
    }
    console.log(`Todo with id [${id}] not found! :(`);
    return true;
  }

  return false;
};

module.exports = ToggleTodo;
