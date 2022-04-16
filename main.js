// test function
let isEven = (number) => {
  return number % 2 === 0;
};

console.log(isEven(4));

// task 1

let isInRange = (number, min, max) => {
  return number >= min && number <= max;
};
console.log(isInRange(3, 2, 4));

// task 2
console.log("\n task 2");
function containsVowel(string) {
  let vowels = "aeiou";
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      return true;
    }
  }
  return false;
}
console.log(containsVowel("table")); // true
console.log(containsVowel("bcdfg")); // false
console.log(containsVowel("a")); // true
console.log(containsVowel("aeiou")); // true
console.log(containsVowel("AEIOU")); // true
console.log(containsVowel("")); // false
console.log(containsVowel("Abc")); // true
console.log(containsVowel("z,z")); //false
console.log(containsVowel("z z z")); // false

// task 3

console.log("\n task number 3");
function containsNumber(number) {
  for (let i = 0; i < number.length; i++) {
    if (!isNaN(parseFloat(number[i]))) {
      return true;
    }
  }
  return false;
}

console.log(containsNumber("123")); // true
console.log(containsNumber("dg")); // false
console.log(containsNumber("a2c")); // true
console.log(containsNumber("100px")); // true
console.log(containsNumber("1")); // true
console.log(containsNumber("0")); // true
console.log(containsNumber("$23.00")); // true
console.log(containsNumber("T-shirts x2")); // true

console.log("\n task 4");

function isFirstLetterUpperCase(word) {
  if (typeof word !== "string" || word.length === 0) {
    return false;
  } else if (word[0] === word[0].toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(isFirstLetterUpperCase("hello"));
console.log(isFirstLetterUpperCase("Hello"));
console.log(isFirstLetterUpperCase(""));
console.log(isFirstLetterUpperCase("A"));
console.log(isFirstLetterUpperCase("Bianca"));
console.log(isFirstLetterUpperCase("jim"));

// task 5
console.log("\n task 5");

function cheaperThan(prices, number) {
  let array = [];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < number) {
      array.push(prices[i]);
    }
  }
  return array;
}
console.log(cheaperThan([19.99, 29.87, 12.99, 5.0, 2.9, 100], 20));
console.log(cheaperThan([19.99, 29.87, 12.99, 5.0, 2.9, 100], 90));
console.log(cheaperThan([19.99, 29.87, 12.99, 5.0, 2.9, 100], 0));
console.log(cheaperThan([19.99, 29.87, 12.99, 5.0, 2.9, 100], 5));

// task 6
console.log("\n task 6");

function wordsThatEndWithIng(word) {
  let ingArray = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase().endsWith("ing")) {
      ingArray.push(word[i]);
    }
  }
  return ingArray;
}

console.log(
  wordsThatEndWithIng(["table", "jeans", "working", "ping", "small"])
);
console.log(wordsThatEndWithIng(["table", "jeans", "small"]));
console.log(wordsThatEndWithIng(["walking", "ing"]));

//task 7
console.log("\n task 7");

function numbersDivisibleBy3(arrayOfNumbers) {
  let arrayDivisibleBy3 = [];
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] % 3 === 0) {
      arrayDivisibleBy3.push(arrayOfNumbers[i]);
    }
  }
  return arrayDivisibleBy3;
}

console.log(numbersDivisibleBy3([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(numbersDivisibleBy3([2, 4, 8]));
console.log(numbersDivisibleBy3([9]));

// task 8
console.log("\n task 8");

function onlyLongWords(string) {
  let newString = "";
  let array = string.split(" ");
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 4) {
      newString += array[i] + " ";
    }
  }
  return newString;
}

console.log(
  onlyLongWords(
    "Welcome to Wikipedia the free encyclopedia that anyone can edit"
  )
);
console.log(onlyLongWords("The cat is on the table"));
console.log(onlyLongWords("not many long ones here"));

// task 9
console.log("\n task 9");

let addLeadingZero = (numbers) => {
  let array = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 10) {
      array.push(`0${numbers[i]}`);
    } else {
      array.push(`${numbers[i]}`);
    }
  }
  return array;
};

console.log(addLeadingZero([0, 1, 2, 3, 10, 11, 12]));
console.log(addLeadingZero([1, 100]));
console.log(addLeadingZero([1, 2, 3]));

// task 10
console.log(`\n task 10`);

function cutStrings(array, number) {
  newArray = [];

  for (let i = 0; i < array.length; i++) {
    let spl = array[i].split("");
    newArray.push(array[i].slice(0, number) + "...");
  }

  return newArray;
}
console.log(
  cutStrings(
    [
      "Hello my name is Max",
      "Today is quite sunny outside",
      "Cats are the best",
      "This movie is boring",
    ],
    10
  )
);

// task 11
console.log("\n task 11");

let durationInHours = (duration) => {
  newArray = [];
  for (let i = 0; i < duration.length; i++) {
    newArray.push(Math.floor(duration[i] / 60));
  }
  return newArray;
};

console.log(durationInHours([120, 60, 80, 90, 100]));
console.log(durationInHours([50, 20, 180]));


// task 12
console.log("\n task 12");

function reverseWords(words){
  
  let newArray = []
  for (let i = 0; i < words.length; i++){

      newArray.push(words[i].split("").reverse().join(""))
  }
  
  return newArray

  
}

console.log(reverseWords(["cat", "shoe", "one", "sos", "hello"]))