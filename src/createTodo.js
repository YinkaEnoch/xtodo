const ReadFile = require("./readFile.js");
const WriteFile = require("./writeFile.js");

const CreateTodo = ({ todo, group }) => {
  if (!todo) {
    console.log("You can't create an empty todo! :(");
    return;
  }
  let data = JSON.parse(ReadFile());

  const id = data.lastID + 1;
  const d = new Date();
  const newTodo = {
    id,
    todo,
    group: "UNCATEGORIZED",
    completed: false,
    createdAt: `${d.toDateString()}, ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
  };

  if (group) {
    newTodo.group = group.toUpperCase();
  }

  data.lastID = id;
  data.todos.unshift(newTodo);
  data = JSON.stringify(data);

  WriteFile({ data });
  console.log("Todo created! :)");
};

module.exports = CreateTodo;
