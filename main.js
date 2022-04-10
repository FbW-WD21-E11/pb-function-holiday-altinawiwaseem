function isEven(number){
    if (number % 2 === 0){
        return `is this number: ${number} even? true`
    } else {
        return `is this number: ${number} even? false`
    }
    
}
let result = isEven(4)
console.log(result)