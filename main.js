// test function
function isEven(number){
    if (number % 2 === 0){
        return `is this number: ${number} even? true`
    } else {
        return `is this number: ${number} even? false`
    }
    
}
let result = isEven(4)
console.log(result)

// task 1

function isInRange(number, min, max){
     if (number >= min && number <=max){
        return `is this number ${number} in range between ${min} and ${max} ? true`
    } else {
        return `is this number: ${number} in range between ${min} and ${max} ? false`
    } 
      
}
console.log (isInRange(4,2,4)) 