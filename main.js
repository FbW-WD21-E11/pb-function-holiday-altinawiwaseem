// test function
let isEven = number => { 
  return number % 2 === 0;
}

console.log(isEven(4));

// task 1

let isInRange = (number, min, max) => {
  
    return number >= min && number <= max
  
};
console.log(isInRange(3, 2, 4));

// task 2

function containsVowel (string){
  let vowels = "aeiou";
  for (let i = 0; i < string.length; i++){
   if( vowels.includes(string[i].toLowerCase())){
      return true
   }
   }
   return false
  }
  console.log(containsVowel("table")); // true
  console.log(containsVowel("bcdfg")); // false
  console.log(containsVowel("a")); // true
  console.log(containsVowel("aeiou")); // true
  console.log(containsVowel("AEIOU")); // true
  console.log(containsVowel("")); // false
  console.log(containsVowel("Abc")); // true
  console.log(containsVowel("z,z")) //false
  console.log(containsVowel("z z z")) // false
  
  


// task 3
 /* console.log("\n task number 3")
 function containsNumber(number){

 
  for (let i = 0; i < number.length; i++){
        if(!isNaN(number[i])){   
        return true
    }
   }
     return false
  } */
  
  console.log("\n task number 3")
  function containsNumber(number){
 
  
   for (let i = 0; i < number.length; i++){
         if(!isNaN(parseFloat(number[i]))){   
         return true
     }
    }
      return false
   }
  
    
  
  

console.log(containsNumber("123")); // true 
console.log(containsNumber("dg")); // false
console.log(containsNumber("a2c")); // true
console.log(containsNumber("100px")) ; // true
console.log(containsNumber("1")) ; // true
console.log(containsNumber("0")) ; // true
console.log(containsNumber("$23.00")) ; // true
console.log( containsNumber("T-shirts x2")); // true 