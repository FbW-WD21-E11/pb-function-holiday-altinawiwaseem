// test function
let isEven = (number) => {
  return `is this number even?: ${number % 2 === 0} `;
};
let result = isEven(4);
console.log(result);

// task 1

let isInRange = (number, min, max) => {
  if (number >= min && number <= max) {
    return `is this number ${number} in range between ${min} and ${max} ? true`;
  } else {
    return `is this number: ${number} in range between ${min} and ${max} ? false`;
  }
};
console.log(isInRange(4, 2, 4));

// task 2
let vowels = "a, e, i, o, u";
function containsVowel(str) {
  let array = []
  for (let i = 0; i < str.length; i++) {
    array.push(str[i])
    
  };
  
  /* return vowels.includes(string) ? true: false */
  return vowels.includes(array)
}
console.log(containsVowel("egfhesd")) ;


// task 3
