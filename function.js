// const colors = ['red', 'green', 'blue'];

// colors.forEach(function(color, idx) {
//   console.log(`${idx + 1} - ${color}`);
// });

// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// function compute(a, b, op) {
//   return op(a, b);
// }

// let result1 = compute(10, 5, add);
// let result2 = compute(10, 5, subtract);

// const flowers = ['rose', 'orchid', 'daisy'];

// flowers.forEach(function(flower, idx) {
//   console.log(`${idx + 1}) ${flower}`);
// });

// const colors = ['red', 'green', 'blue'];

// console.log('BEFORE the forEach...');

// colors.forEach(function(color, idx) {
//     console.log(`${idx + 1} - ${color}`);
// });

// console.log('AFTER the forEach...');

// Synchronous function
// function getFriends() {
//   return ['Fred', 'Barney'];
// }

// // Get the friends
// let friends = getFriends();

// // The friends array is ready to work with because getFriends
// // is synchronous and returned the array of friends we wanted
// friends.forEach(function(friend) {
//   console.log(friend);
// });

// asynchronous function
function getFriendsAsync() {
  // Using setTimeout to make getFriendsAsync
  // behave like a long-running database operation
  setTimeout(function () {
    return ['Fred', 'Barney'];
  }, 0);
}



// regular function
let squares = [1, 2, 3].map(function (x) { return x * x });
// arrow function
let squares = [1, 2, 3].map(x => x * x);

// Will friends have an array after this line of code runs?
let friends = getFriendsAsync();

// The following will cause an error because
// friends is not an array yet
friends.forEach(function (friend) {
  console.log(friend);
})

//Refactor to accept a callback function
// to be called when the data is ready
function getFriendsAsync(cb) {
  setTimeout(function () {
    // pass the results to the provided callback
    cb(['Fred', 'Barney']);
  }, 0);
}

// Execute and provide it with an anonymous callback function
// to be called by the getFriendsAsync function
getFriendsAsync(function (friends) {
  friends.forEach(function (friend) {
    console.log(friend);
  });
});


// const getGrade = score => {
//   if (score === 100) return 'A+';
//   score = Math.floor(score / 10);
//   return ['F', 'F', 'F', 'F', 'F', 'F', 'D', 'C', 'B', 'A'][score];
// };

const add = (x, y) => { return x + y };

// Ideal single-statement arrow function
const add = (x, y) => x + y;

// Returns undefined (blocks are like reg functions)
const add = (x, y) => { x + y };

// Syntax error, must be an expression
const add = (x, y) => return x + y;

  let todos = ['Buy milk', 'Mow lawn'];

  // Below line of code won't work - looks like a statement block
  // let todoObjects = todos.map(todo => {todo: todo, done: false});

  // Wrap the implicit returned object in parens
  let todoObjects = todos.map(todo => ({ todo: todo, done: false }));
