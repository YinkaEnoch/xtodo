/**
 * Completed todos cannot be updated:
 *   they have to be "uncompleted" - --un - before they can
 *   be updated
 * */

const ReadFile = require("./readFile.js");
const WriteFile = require("./writeFile.js");

const UpdateTodo = ({ id, newGroup, newTodo }) => {
  if (!id) return false;
  if (!newTodo && !newGroup) return false;

  let data = JSON.parse(ReadFile());

  let index = data.todos.findIndex((todo) => todo.id == id);

  if (index > -1) {
    if (newTodo) data.todos[index].todo = newTodo;

    if (newGroup) data.todos[index].group = newGroup;

    const d = new Date();
    data.todos[
      index
    ].updatedAt = `${d.toDateString()}, ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

    WriteFile({ data: JSON.stringify(data) });
    console.log("Todo successfully updated");
    console.log(data.todos[index]);
    //logger(todo);
    return;
  }
  console.log(`Todo with id [${id}] not found! :(`);
  return;
};

module.exports = UpdateTodo;
