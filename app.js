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
const numsTimesTwo = nums.map((num) => {
  return num * 2;
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

const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];

// Your code here:
const [firstIngredient, secondIngredient] = pizzaToppings;

console.log(firstIngredient);
console.log(secondIngredient);

// ! Exercise 3:
// a. Given the provided `car` object, use destructuring to create two
//    variables named `make` and `model` that hold the respective values.
//
// b. Console log the `make` and `model` variables.
//
// Starting code (don't modify this):

const car = {
  make: "Audi",
  model: "Q5",
};

// Your code here:
const { make, model } = car;

console.log(make);
console.log(model);

// ! Exercise 4:
// a. Duplicate the provided `morePizzaToppings` array using the spread
//    operator and assign it to a variable named `uncontroversialPizzaToppings`.
//
// b. Console log the `uncontroversialPizzaToppings` variable.
//
// Starting code (don't modify this):

const morePizzaToppings = ["Cheese", "Sauce"];

// Your code here:
const uncontroversialPizzaToppings = [...morePizzaToppings];

console.log(uncontroversialPizzaToppings);

// ! Exercise 5:
// a. Duplicate the provided `myCar` object and spread its values into a 
//    new variable named `newCar`.
//
// b. Change the `make` and `model` properties of the `myCar` object to new 
//    values.
//
// c. Console log both objects and observe the results.
//
// Starting code (don't modify this):

const myCar = {
  make: 'Mazda',
  model: '3',
};

// Your code here:
const newCar = { ...myCar };

myCar.make = 'Toyota';
myCar.model = 'Camry';

console.log(myCar);
console.log(newCar);

// ! Exercise 6:

// a. Define a variable named `mySportsTeam` and assign a string (like 
//    'warriors', 'lakers', or 'celtics') to it.
//
// b. Create an object named `sportsProfile`.
//
// c. Use `mySportsTeam` as a dynamic key in `sportsProfile`. Assign it a 
//    relevant value.
//
// d. Console log the `sportsProfile` object to see the result.

// Your code here:
const mySportsTeam = 'celtics';

const sportsProfile = {
  [mySportsTeam]: 'Boston Celtics',
};

console.log(sportsProfile);