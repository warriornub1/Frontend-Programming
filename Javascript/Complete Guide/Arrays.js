// Create Arrauss
const numbers = [1, 2, 3];

const moreNumbers = new Array("Hi!", "Welcome!");

let moreMoreNumbers = new Array(5); // 5 empty items
console.log(moreMoreNumbers);
moreMoreNumbers = new Array(5, 2); //[5, 2]
console.log(moreMoreNumbers);

const yetMoreNumbers = Array.of(1, 2);
console.log(yetMoreNumbers);

const moreMoreMoreNumbers = Array.from('Hi!');
console.log(moreMoreMoreNumbers);

// Adding & Removing Elements
const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading');
hobbies.unshift('Coding');

// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

console.log(hobbies);
hobbies.splice(1, 0, 'Good Food');
console.log(hobbies);

hobbies.splice(1); // spare index 1 but delete all iitems
console.log(hobbies);
