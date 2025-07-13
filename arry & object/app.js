// Given the array ["apple", "banana", "cherry", "date"], destructure the first and third elements, skipping the second and fourth. What would the destructured variables be?
let furits = ["apple", "banana", "cherry", "date"];
let [,f2,,f4]  = furits
document.write(`this 2nd ${f2} & this 4th ${f4}`)
// const user = { name: "John", age: 28 };
// Destructure the name and age properties, and set a default value of "Not Provided" for location if it is missing.
const user = { name: "John", age: 28 };
let {name, age , locati = "Not Provided"} = user;
document.write(`<br> <br><br> ${name} you are ${age} year old but your location is ${locati}`)