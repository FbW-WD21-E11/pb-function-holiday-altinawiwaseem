// test function
let isEven = number => `is this number even?: ${number % 2 === 0} `;

let result = isEven(2);
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
  let str = "table"
 // for (let i = 0; i < str.length; i++){
    if (str.toLowerCase().includes(vowels)){
      console.log(true)
    }else {
      console.log(false)
    }
  
  
  
  


// task 3
let numbers;
let containsNumber = string =>{
  
  for (let i = 0; i < string.length; i++){
    
      if(typeof parseInt(string[i]) === "number")
       numbers += parseInt(string[i])
       console.log(string[i])
       return numbers
    
  }
  
   
}

console.log(containsNumber("123")); // true
//console.log(containsNumber("dg")); // false
// containsNumber("a2c"); // true
// containsNumber("100px"); // true
// containsNumber("1"); // true
// containsNumber("0"); // true
// containsNumber("$23.00"); // true
// containsNumber("T-shirts x2"); // true