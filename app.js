// ! Exercise 1:
// a. Use the `map()` method to iterate over the provided `nums` array
//
// b. Use the callback function of the `map()` method you wrote to
//    create a new array where each value is multiplied by 2.
//    Name the new array `numsTimesTwo`.
//
// c. Console log the new array.
//
// Starting code (don't modify this):

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Your code here:
// Exercise 1 🐼

// map = transform each item into a new one
const numsTimesTwo = nums.map((num) => {
  return num * 2; // multiply each number by 2
});

console.log(numsTimesTwo);



// ! Exercise 2:
// a. Given the provided `pizzaToppings` array, use destructuring to extract 
//    the first and second values and place them into variables. Name the 
//    variable that corresponds to the first value `firstIngredient`. Name the 
//    variable that corresponds to the second value `secondIngredient`.
//
// b. Console log the `firstIngredient` and `secondIngredient` variables.
//
// Starting code (don't modify this):


// starting array
const pizzaToppings = ["pepperoni", "cheese", "mushroom"];

// Your code here:

// destructuring = pull values out of array into variables
const [firstIngredient, secondIngredient] = pizzaToppings;

console.log(firstIngredient);
console.log(secondIngredient);