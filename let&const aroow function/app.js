// Create a const array fruits = ["apple", "banana", "cherry"], then try changing one of its elements. Will it work?
const fruits = ["apple", "banana", "cherry"];
const ans1 = document.getElementById("ans1");
const h1 = document.querySelector("h1");
ans1.addEventListener("click",()=>{
    const real = `Q no.1  Create a const array fruits  then try changing one of its elements. Will it work? <br> Ans: ${fruits[2]}`
       h1.innerHTML = real;
})


// Create an arrow function that takes two numbers as parameters and returns their sum. Call the function with two numbers.

const sum_Tow_number = (num1 , num2)=>{
    const ans =  num1 + num2;
    return(ans) 
    

}
console.log(sum_Tow_number(2,2))
// Declare a constant birthMonth and assign the current month name to it. Display the message "I was born in [birthMonth]" using document.write.
 let date = new Date;
 date  = date.getMonth();
 let months = ["jan" , "feb", "march" , "april" ,"may","june" , "july"]
 console.log(`I was born in ${months[date]} `)
