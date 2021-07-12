const Help = () => {
  const help = `
xtodo: Simple terminal todo application
=======================================
-a: all
-c: completed
--g: group
lsg: list group
--t: todo
--un: uncomplete
---------------------

xtodo add [--g=HMS] --t="Smart Contract"

xtodo id=1 [-c | --un] (toggle todo state)

xtodo [del | delete] id=n

xtodo update id=n [--g="new group"] [--t="new todo"]

xtodo lsg (list all todo groups)

xtodo info id=n (get todo info)

xtodo get [-a | -c]

xtodo get id=1 [-c]

xtodo get --g=HMS [-a | -c]
`;

  console.log(help);
};

module.exports = Help;
