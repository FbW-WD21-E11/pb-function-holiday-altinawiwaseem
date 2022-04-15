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
    str = false
  for (let i = 0; i < string.length; i++){
   let vowels = "a, e, i, o, u";
   if( vowels.includes(string[i].toLowerCase())){
      str = true
   }
   }
   return str
  }

 
 console.log(containsVowel("tbl"))
  
  


// task 3
/* let numbers;
let containsNumber = string =>{
  
  for (let i = 0; i < string.length; i++){
    
      if(typeof parseInt(string[i]) === "number")
       numbers += parseInt(string[i])
       console.log(string[i])
       return numbers
    
  }
  
   
}

console.log(containsNumber("123")); // true */
//console.log(containsNumber("dg")); // false
// containsNumber("a2c"); // true
// containsNumber("100px"); // true
// containsNumber("1"); // true
// containsNumber("0"); // true
// containsNumber("$23.00"); // true
// containsNumber("T-shirts x2"); // true