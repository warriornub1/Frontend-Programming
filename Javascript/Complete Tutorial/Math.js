Math.PI

//Rounding a number:
Math.round(4.9) // 5

//Absolute value:
Math.abs(-456); // 456

//Raises 2 to the 5th power:
Math.pow(2,5); //32

//Removes decimal:
Math.floor(3.999) // 3

//Random Numbers
Math.random(); //guies us a random decimal between 0 and 1 (non-inclusive)

// Generate random number s between 1 and 10
const step1 = Math.random(); // 0.596
const step2 = step1 * 10; // 5.596
const step3 = Math.floor(step2); // 5
const step4 = step3 + 1; // 6

Math.floor(Math.random() * 10) + 1;