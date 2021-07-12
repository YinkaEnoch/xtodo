const Logger = (data) => {
  // Expects all data to be an array
  if (!Array.isArray(data)) {
    console.log("Wrong data type");
    return false;
  }

  // Sort todo into groups first
  let sortedTodo = {};
  data.forEach((todo) => {
    if (!sortedTodo[todo.group]) {
      sortedTodo[todo.group] = [];
    }
    sortedTodo[todo.group] = [...sortedTodo[todo.group], todo];
  });

  // Sort
  let keys = Object.keys(sortedTodo).sort();

  keys.forEach((key) => {
    console.log(`- ${key}`);

    sortedTodo[key].forEach(({ todo, id, completed }) => {
      if (completed) {
        console.log(`  + ${todo} [${id}]`);
        return;
      }
      console.log(`  - ${todo} [${id}]`);
    });
  });
};

module.exports = Logger;
