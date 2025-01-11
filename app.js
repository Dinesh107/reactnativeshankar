// console.log("Welcome to js world");
// console.log("Welcome to fullstack");
// console.log("Welcome to React");
// console.log("Welcome");

// window.alert("Welcome to js world");

// document.getElementById("myH1").textContent = "Welcome to js";
// document.getElementById("myP").textContent = "React and i like food";


// variables - a container taht stores a value, behaves as if it were the value it contains.

// 1) declare let x;
// 2) x = 10;
// 3) let x = 10;


// let age = 25; 

// let price = 99.22;

// let gpa = 9.2;

// console.log(age + " is young");
// console.log(`${age} is eligible for vote, ${price} is very high, ${gpa} is very good`);
// console.log(typeof price);
// console.log(gpa);

// let firstName = "Shankar";

// console.log(firstName);
// console.log(typeof firstName);
// let isOnline = false;
// console.log(typeof isOnline);
// let isOffline = false;

// document.getElementById("p1").textContent = firstName
// document.getElementById("p2").textContent = `the price is ${price}`
// document.getElementById("p3").textContent = `isOnline: ${isOnline}`
// template literals


// + - / * % 

// let students = 29; 

// students = students + 1;
// students += 1;
// students = students - 1;
// students  -= 1;
// students = students / 2;
// students /= 2;
// students = students % 2;
// students %= 2;
// students *= 2;

// console.log(students);

// let var const 


//user Input

// Easy way - window prompt

// let username;

// username = window.prompt("What's your username?");

// console.log(username);


// Professional way - HTML textbox

// let username;

// document.getElementById("mySubmit").onclick = function() {
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`;
//     console.log(typeof username); 
// }

// type covserion - change the data type of a value to another (strings, number, boolean)


// let age = window.prompt("How old arw you?");
// console.log(typeof age);
// age = Number(age);
// age += 1;

// console.log(age);
// console.log(typeof age);

// let x = "idly";

// let y = "Pongal";

// let z = "Dosa";

// let x = "3";

// let y = "3";

// let z = "3";

// let x = "";

// let y = "";

// let z = "";

// let x;

// let y;

// let z;

// x = Number(x);

// y = String(y);

// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// constants = a variable that can,t be changed.

// const PI = 3.14159;

// let radius;
// let circumference;

// PI = 434.4;
// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);

// circumference = 2 * PI * radius;

// console.log(circumference);


// Math - builtin object that provides a collection of properties and methods

// console.log(Math.PI);
// console.log(Math.E);


// let x = 16;
// let y = 2;
// let z = 78;

// z = Math.round(x);
// console.log(z);

// z = Math.floor(x);
// console.log(z);

// z = Math.ceil(x);
// console.log(z);

// z = Math.trunc(x);
// console.log(z);

// z = Math.pow(x, y);
// console.log(z);

// z = Math.pow(y, x);
// console.log(z);

// z = Math.sqrt(x);
// console.log(z);


// let max = Math.max(x, y, z);
// console.log(max);

// let min = Math.min(x, y, z);
// console.log(min);

// Conditional statements

// if statemants - if a statetment is true, execute some code, if not, do something else

// let age = 10;

// if(age >= 18) {
//     console.log("You are old enough to enter this site");
// } else {
//     console.log("You must 18+ to enter this site"); 
// }


// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// let resultElement = document.getElementById("resultElem");
// let age;

// mySubmit.onclick = function() {

//     age = myText.value;

//     age = Number(age);

//     if(age >= 100) {
//         resultElement.textContent = `You are too old to enter this site`;
//     } else if(age == 0) {
//         resultElement.textContent = `You are not yet born`
//     } else if(age >= 18) {
//         resultElement.textContent = `You are old enough to enter this site`
//     } else if(age < 0) {
//         resultElement.textContent = `Your age cant be below 0`
//     } else {
//         resultElement.textContent = `You must 18+ to enter this site`
//     }
// }

// if(age >= 100) {
//     console.log("You are too old to enter this site");
// } else if(age == 0) {
//     console.log("You are not yet born");
// } else if(age >= 18) {
//     console.log("You are old enough to enter this site");
// } else if(age < 0) {
//     console.log("Your age cant be beloiw 0");
// } else {
//     console.log("You must 18+ to enter this site");
// }

// checked property 

// const myCheckbox = document.getElementById("myCheckbox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const rupayBtn = document.getElementById("rupayBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");



// mySubmit.onclick = function() {
//     if(myCheckbox.checked) {
//         subResult.textContent = `you are subscribed`;
//     } else {
//         subResult.textContent = `you are NOT subscribed`;
//     }

//     if(visaBtn.checked) {
//         paymentResult.textContent = `You are paying with visa`;
//     } else if(masterCardBtn.checked) {
//         paymentResult.textContent = `You are paying with mastercard`;
//     }
//     else if(rupayBtn.checked) {
//         paymentResult.textContent = `You are paying with rupay`;
//     } else {
//         paymentResult.textContent = `Please select a payment method`;
//     }
// }


// ternary operator = a shortcut to if{} statements helps to assign a variable based on a condition

// condition ? codeIfTrue : codeIfFalse;

// let age = 10;

// let message = age >= 18 ? "you are an adult" : "You are a minor";

// console.log(message);

// let time = 6;

// let greeting = time < 12 ? "Good morning" : "Good night";

// console.log(greeting);


// let time = 1;

// let greeting = time >= 6 && time < 12 ? "Good Morning" : time >= 12 && time < 18? "Good Afternoon" : time >= 18 && time < 22? "Good Evening" : "Good Night";

// console.log(greeting);

// let isOnline = false;

// let message = isOnline ? "Your are in online" : "Your are offline";

// console.log(message);

// let purchaseAmount = 10;

// let discount = purchaseAmount >= 100 ? 10 : 0;

// console.log(`Your Total is ${purchaseAmount - purchaseAmount * (discount/100)}`);

// switch statement - a control flow statement that allows a program to choose between multiple blocks of code based on different conditions  or can be efficeient replacement to many else if statements 

// let day = "Sayfuykfturday";

// switch(day) {
//     case "Monday":
//         console.log("Today is Monday");
//         break;
//     case "Tuesday":
//         console.log("Today is Tuesday");
//         break;
//     case "Wednesday":
//         console.log("Today is Wednesday");
//         break;
//     case "Thursday":
//         console.log("Today is Thursday");
//         break;
//     case "Friday":
//         console.log("Today is Friday");
//         break;
//     case "Saturday":
//         console.log("Today is Saturday");
//         break;
//     case "Sunday":
//         console.log("Today is Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }

