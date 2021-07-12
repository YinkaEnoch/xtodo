const ReadFile = require("./readFile.js");

const TodoInfo = (id) => {
  if (!id) return false;

  let data = JSON.parse(ReadFile());

  let index = data.todos.findIndex((todo) => todo.id == id);

  if (index > -1) {
    const todo = data.todos[index];
    log(todo);
    return;
  } else {
    // Check in completedTodos
    data = JSON.parse(ReadFile("completed"));
    index = data.todos.findIndex((todo) => todo.id == id);

    if (index > -1) {
      const todo = data.todos[index];
      log(todo);
      return;
    }

    console.log(`Todo with id [${id}] not found! :(`);
  }
};

const log = ({ id, completed, todo, createdAt, updatedAt, group }) => {
  console.log(`
  TODO: ${todo}
  ID: ${id},
  GROUP: ${group},
  COMPLETED: ${completed},
  CREATED: ${createdAt},
  LAST MODIFIED: ${updatedAt}
  `);
};

module.exports = TodoInfo;
