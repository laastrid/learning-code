// Fist of all, need to understand the difference between the variables.
let x = "Your gf is just like her, or should I say your gf was just like her"; // This is "let", she's nice and can change a lot =>
console.log(x);

x = "see that she can change? Not like your x-gf";
console.log(x);

// We also have "const", he's a fact and just like a fact, cannot be changed, no matter what.
const y = "We all know why you dumped her. Richard is much better!";
console.log(y);

// What happens if we try to change the value of a const variable? Try to lie into a fact?
// y = "Patricia's very sorry. She can love you.";
// console.log(y);
// It show us an error =>
// y = "Patricia's very sorry. She can love you.";
// ^
// TypeError: Assignment to constant variable.

// And finally we have "var", this is an old type os defining a variable, so... It shouldn't be for use.
var z = "Just like your alchool addiction, this is old and not trust worthy";
console.log(z);