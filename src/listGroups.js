const ReadFile = require("./readFile.js");

const ListGroups = () => {
  const completedTodos = JSON.parse(ReadFile("completed")).todos;
  const todos = JSON.parse(ReadFile()).todos;

  let cGroups = completedTodos.map((todo) => todo.group);
  let tGroups = todos.map((todo) => todo.group);

  let allGroups = new Set([...cGroups, ...tGroups]);
  allGroups = [...allGroups].sort();
  allGroups.forEach((grp) => console.log(`- ${grp}`));
  console.log(`Total number of groups: ${allGroups.length}`);
};

module.exports = ListGroups;
