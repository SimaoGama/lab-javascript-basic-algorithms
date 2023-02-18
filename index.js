// Iteration 1: Names and Input

let hacker1 = 'Drivers Name';
const hacker2 = 'Navigators Name';

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1 > hacker2) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} charcters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, both have equally long names, ${hacker2.length} characters`
  );
}

// Iteration 3: Loops

// for (let char in hacker1) {
//   console.log(` ${hacker1[char]}`);
// }
