// ==== Callbacks ====

/* Step 1: Create a higher-order function that accepts a callback
 * Create a higher-order function named consume that can take 3 parameters.
 * The first two parameters can accept any argument
 * The last parameter accepts a callback
 * In the body of the function return the callback with the two parameters that you created
 */

function consume(par1, par2, cb) {
  console.log(cb(par1, par2));
}

consume("Hello", "Mike", (a, b) => {
  return `${a}, my name is ${b}.`;
});

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function greeting(a, b) {
  return `Hello ${a} ${b}, nice to meet you!`;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2, 2, add); // 4
consume(10, 16, multiply); // 160
consume("Mary", "Poppins", greeting); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:

// The variables that nestedFunction can access is a matter of scope. A function can reach outside of its scope to access a variable. What a function can't do is reach inside of a function to access a variable. That is why nestedFunction can access internal but myFunction would not be able to access a variable inside nestedFunction

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();
