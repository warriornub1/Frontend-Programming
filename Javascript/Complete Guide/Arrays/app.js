// const numbers = [1,2,3];
// console.log(numbers);

// const moreNumbers = Array(5); // [ <5 empty items> ]
// const moreNumbers1 = Array(5, 2);  //[5, 2]
// console.log(moreNumbers);
// console.log(moreNumbers1);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading');
hobbies.unshift('Coding');
const poppedValue = hobbies.pop();
hobbies.shift();

//hobbies[5] = "Reading";

console.log(hobbies);
hobbies.splice(0, 0, 'Good Food'); // specify start index, delete no. of items, insert
console.log(hobbies);