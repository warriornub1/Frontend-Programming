// Push and Pop
let topSongs = [
    'First Time Ever I Saw Your Face',
    'God only Knows',
    'A Day In The Life',
    'Life On Mars',
];

console.log( topSongs.push('Fortunate Son') );

console.log( topSongs.pop() );

// Shift - remove from the start
// Unshift - add to start
let dishesToDo = ['big platter']
dishesToDo.unshift('large plate');
dishesToDo.unshift('small plate');
console.log(dishesToDo);
dishesToDo.shift();
console.log(dishesToDo);

// ConCat
let fruits = ['apple', 'banana'];
let veggies = ['aspargus', 'brussel sprouts'];
console.log(fruits.concat(veggies));

// Includes
let ingredients = ['water', 'corn sarch', 'flour', 'cheese', 'brown sugar', 'shrimp', 'eel'. 'butter'];
console.log(ingredients.includes('fish'));
console.log(ingredients.includes('water', 3));

ingredients.indexOf('eel');
ingredients.indexOf('cheese', 5);

//From
// https://www.youtube.com/watch?v=SR3RK0XZYkM
let sr = "techsith";
console.log([...str]);
console.log(Array.from[str]);

const fromScratch = Array.from({length:5}, (v, i) => i)

//New Arrays