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

// string methods :- allow us to manipultate and work with text (strings)

// let userName = "ShankarStudent";

// console.log(userName.charAt(4));
// console.log(userName.indexOf("n"));
// console.log(userName.lastIndexOf("n"));
// console.log(userName.length);

// console.log(userName);
// console.log(userName.trim());

// console.log(userName.toUpperCase());
// console.log(userName.toLowerCase());

// console.log(userName.repeat(3));

// let result1 = userName.startsWith(" ");

// console.log(result1);

// if(result1) {
//     console.log("Username starts with a space");
// } else {
//     console.log("Username does not start with a space");
//     console.log(userName);

// }
// let result2 = userName.endsWith(" ");

// console.log(result2);

// if(result2) {
//     console.log("Username ends with a space");
// } else {
//     console.log("Username does not ends with a space");
//     console.log(userName);

// }

// let result3 = userName.includes(" ");

// console.log(result3);

// if(result3) {
//     console.log("Username can't include a ' '");
// } else {
//     console.log(userName);
// // }

// let phoneNumber = "123-456-7890";

// phoneNumber = phoneNumber.replaceAll("-", "/");

// console.log(phoneNumber);

// phoneNumber = phoneNumber.padStart(20, "0");

// console.log(phoneNumber);

// phoneNumber = phoneNumber.padEnd(15, "0");

// console.log(phoneNumber);

// string slicing = creating a substring from a protion of another string

// string.slice(start, end)

// const fullName = "Balaji Student";

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// console.log(firstName);

// let lastName = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(lastName);

// slice - create a substring from a portion of another string

// let firstName = fullName.slice(0, 7);
// let lastName = fullName.slice(8);

// let firstChar = firstName.slice(0, 1);
// let lastChar = firstName.slice(-4);

// console.log(firstName);
// console.log(lastName);
// console.log(firstChar);
// console.log(lastChar);

// const email = "shankar@gmail.com";

// let userName = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1);

// console.log(userName);

// console.log(extension);

// method chaining - calling one method after another - in one continous line of code

// no method chaining

// let username = window.prompt("Enter your username");

// username = username.trim();

// let letter = username.charAt(0);

// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();

// username = letter + extraChars;

// console.log(username);

// method chaining

// let username = window.prompt("Enter your username");

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

// console.log(username);

// Logical Operators - Used t combine or manipulate boolean values (True or False)

// AND =   &&
// OR =    ||
// NOT =   !

// const temp = 25;

// if(temp > 0 && temp <= 30) {
//     console.log("The wheather is good");
// } else {
//     console.log("The weather is bad");
// }

// const temp = 10;

// if(temp <= 0 || temp > 30) {
//     console.log("The wheather is BAD");
// } else {
//     console.log("The weather is Good");
// }

// const isSunny = false;

// if(!isSunny) {
//     console.log("it is cloudy");
// } else {
//     console.log("it is sunny");
// }

// Strict Equality

// = assignment operator
// == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
// != inequality operator - return the true if twi values are not equal
// !== strict inequality operator

// const PI = 3.14;

// if(PI == "3.14") {
//     console.log("That is PI");
// } else {
//     console.log("That is not PI");
// }

// const PI = 3.14;

// if(PI != "3.14") {
//     console.log("That is NOT PI");
// } else {
//     console.log("That is PI");
// }

// const PI = 3.14;

// if(PI !== "3.14") {
//     console.log("That is NOT PI");
// } else {
//     console.log("That is PI");
// }

// Control statements or looping statements

// while loop - reapeat some code While some condition is true

// For loop - repeat some code a LIMITED amount of times

// for(let i = 0; i <= 3; i++) {
//     console.log(i);
// }

// functions - a section of resuable code
// declare code once, use it whenever we want, call the functions to execute that code.

// function add(x, y) {
//    let result = x + y;
//    return result;
// }
// function add(x, y) {
//    return x + y;
// }
// //              5
// let answer = add(2, 3);

// console.log(answer);
// console.log(add(2, 3));

// function isEven(number) {
//     if(number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// function isEven(number) {
//     return number % 2 === 0 ? true : false;
// }
// console.log(isEven(10));

// function isValidEmail(email) {
//    if(email.includes("@")) {
//     return true;
//    } else {
//      return false;
//    }

//    return email.includes("@") ? true : false;
// }

// console.log(isValidEmail("shankar@gmail.com"));

// Variable Scope - where a varaiable is recognized and accessible (local vs global)

// let x = 3;

// function func1() {
//     console.log(x);
// }

// function func2() {
//     console.log(x);
// }

// func2();

// Arrays - a varaible like structure that can hold more tha 1 value.

// let fruits = ["apple", "orange", "banana", "mango"];

// for (let i = fruits.length-1; i >= 0; i--) {
//   console.log(fruits[i]);
// }

// fruits.sort();
// fruits.sort().reverse();

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// 0 to n-1, n = 3
// where is n is length of the array
// index = 0 to 2

// fruits[3] = "kiwi";
//fruits.push("kiwi"); // it will add new element in the last
// fruits.pop(); // remove the last element
// fruits.unshift("mango");
// fruits.shift();

// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("mango");
// console.log(numOfFruits);
// console.log(index);


// spread operator = ... allows an iterable such as an array or string to be expanded into seperate elements. (unpacks the elements)


// let numbers = [1, 2, 3, 4, 5, 6];

// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);

// console.log(maximum);
// console.log(minimum);
// console.log(numbers);

// let username = "Shankar Student";
// let letters = [...username].join("-");
// console.log(letters);

// let fruits = ["apple", "orange", "banana"];
// let veggies = ["carrots", "onion", "potato"];

// let newFruits = [...fruits];
// fruits.push("mango");
// let foods = [...fruits, ...veggies];
// let foods = [...fruits, ...veggies, "milk", "eggs"];

// console.log(fruits);
// console.log(foods);
// console.log(newFruits);


// rest parameters = (...rest) allow a function work with a variables number of aruguments by bundling them into array

// spread - expand an array into seperate elements
// rest - bundle seprate elements into an array


// function openFridge(...foods) {
//     console.log(...foods);  
// }

// function getFood(...foods) {
//    return foods;
// }

// const food1 = "dosa";
// const food2 = "idly";
// const food3 = "pongal";
// const food4 = "puri";
// const food5 = "idiyappam";

//openFridge(food1, food2, food3, food4, food5); // ["dosa", "idly", "pongal", "puri"]

// const foods = getFood(food1, food2, food3, food4, food5);
// console.log(foods);


// function sum(...numbers) {

//     let result = 0;
//     for (let number of numbers) {
//         result += number;
//     }

//     return result;
// }
// function getAverage(...numbers) {

//     let result = 0;
//     for (let number of numbers) {
//         result += number;
//     }

//     return result / numbers.length;
// }

// // const total = sum(1, 2, 3, 4);
// const total = getAverage(75, 100, 85, 50, 90);

// console.log(`Our total is ${total}`); 


// function combineStrings(...strings) {
//     return strings.join(" ");
// }

// const fullName = combineStrings("Mr.","Shankar","Student");

// console.log(fullName);


// Callbacks - a function that is passsed as an argument to another function


// reading the file
// network requests
// interacting with db

// hello(goodbye);
//hello(leave);
// hello(wait);

// function hello() {
//     setTimeout(function() {
//         console.log("Hello");
//     }, 3000);
// }

// function hello(callback) {
//     console.log("Hello");
//     callback();
// }

// function leave() {
//     console.log("Leaving");
// }

// function wait() {
//     console.log("waiting");
// }
 

// function goodbye() {
//     console.log("Good Bye");
// }


//    6
// sum((event) => {
//             //                                     6
//     document.getElementById("myH1").textContent = event;
// }, 2, 4);



// function sum(callback, x, y) {
//     let result = x + y;
//     //        6
//     callback(result)
// }


// add((param)=>{
//     document.getElementById("myH1").textContent = param;
// }, 2, 4)

// function add(workDone, x, y) {
//     result = x + y;
//     workDone(result);
// }

// function displayConsole(result){
//     console.log(result);
// }

// function displayDOM(result){
//     document.getElementById("myH1").textContent = result;
// }

// add(displayDOM, 2, 5);

// forEach - mathod used to iterate over the elements of an array and apply a specified functions (callback) to each element 

// array.forEach(callback)


// console.log("1");
// setTimeout(() => {
//     console.log("2");
// }, 2000);

// console.log("3");


// const names = ["ganesh", "siva", "murugan"];
// names.forEach((name) => console.log(name));



// let fruits = ["APPLE", "ORANGE", "COCONUT"];
// let fruits = ["orange", "apple", "coconut"];


//fruits.forEach(upperCase);
// fruits.forEach(lowerCase);
// fruits.forEach(capitalise);

// fruits.forEach(displayConsole);

// function displayConsole(workDone) {
//     console.log(workDone); 
// }

// function upperCase(element, index, array) {
//     array[index] = element.toUpperCase();
// }

// function lowerCase(element, index, array) {
//     array[index] = element.toLowerCase();
// }

// function capitalise(element, index, array) {
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// //  fruit[0] = O + range
// }

// .map() = accepts a callback and applies that function to each element of an array, that return a new array

// const numbers = [1 , 2, 3, 4, 5];

// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// console.log(squares);
// console.log(cubes);


// function square(element) {
//      return Math.pow(element, 2);
// }

// function cube(element) {
//     return Math.pow(element, 3);
// }

// const students = ["Ganesh", "Siva", "Murugan"];

// const studentsUpper = students.map(upperCase);

// console.log(studentsUpper);

// function upperCase(element) {
//     return element.toUpperCase();
// }

//.filter() - Creates a new array by filtering out elements.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// let evenNumbers = numbers.filter(isEven);


// console.log(evenNumbers);

// function isEven(element) {
//     return element % 2 === 0;
// }

// const ages = [16, 17, 18, 19, 50];

// const adults = ages.filter(isAdult);

// console.log(adults);

// function isAdult(element) {
//     return element >= 18;
// }


// const words = ["apple", "mango", "kiwi", "orange", "pomegrante"];

// const shortWords = words.filter(getShortWords);

// console.log(shortWords);

// function getShortWords(element) {
//     return element.length <= 6;
// }

// reduce() - reduce the elements of an array to single value

// const cartPrices = [5, 30.433, 10, 25, 15, 20];

// const cartTotal = cartPrices.reduce(sum);

// console.log(`cart total is ${cartTotal.toFixed(2)}`);

// function sum(accumulator, element) {
//     return accumulator + element;
// }
// function sum(preElement, nextElement) {
//     return preElement + nextElement;
// }


// const numGrades = [75, 50, 90, 80, 95, 66];

// const maximum = numGrades.reduce(getMax);

// console.log(maximum);

// function getMax(acc, ele) {
//     return Math.max(acc, ele)
// }



// function declaration - define a reusable block of code that performs a specific task

// function hello() {
//     console.log("hai, i am hello function");
// }

// function expression - way to define functions as values or variables

// const hello = function() {
//     console.log("hai, i am hello function");
    
// }

// setTimeout(function(){
//     console.log("hello");
// }, 3000);

// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(function (element) {
//     return Math.pow(element, 2);
// });

// console.log(squares);


// const evenNumbers = numbers.filter(function(element) {
//     return element % 2 === 0;
// })

// console.log(evenNumbers);

// const total = numbers.reduce(function (sum, element) {
//   return sum + element;
// });

// console.log(total);

// function square(element) {
//     return Math.pow(element, 2);
// }

// arrow functions- a concise way to write fuinction expressions, good for way for simple function that we use once 

// (parameter) = > some code

// function hello() {
//     console.log("hai, i am hello function");
// }

// hello();

// const hello = function() {
//     console.log("hai, i am hello function");
// }


// const hello = (name, age) => { console.log(`hello ${name}`)
//                           console.log(`You are ${age} old`)}

// hello("Shankar", 20);

// setTimeout(hello, 3000);

// function hello() {
//     console.log("Hello");
// }

// setTimeout(function () {
//     console.log("Hello");
// }, 3000);

// setTimeout(() => console.log("hello"), 3000);

// Javascripts Objects - collection of related properties and/or methods can represnt real world objects (people, products, places).

// object = { key : value, functions() }

// const person1 = {
//     firstName: "Shankar",
//     lastName: "Student",
//     age: 20,
//     isEmployed: true,
//     greet() {
//         console.log(`Hello, my name is ${this.firstName} and I am ${this.age} years old`);
//     }
// }

// const person2 = {
//     firstName: "Archana",
//     lastName: "Student",
//     age: 19,
//     isEmployed: false,
//     greet() {
//         console.log(`Hello, my name is ${this.firstName} and I am ${this.age} years old`);
//     }
// }


// console.log(person1.firstName + ' ' + person1.lastName  + ' ' + person1.age + ' ' + person1.isEmployed);

// person1.greet();

// console.log(person2.firstName +' '+ person2.lastName  +' '+ person2.age +' '+ person2.isEmployed);

// person2.greet();


// this - reference to the object where this is used.

// (the object depends on the immediate context)

// person.name = this.name

// const person1 = {
//     name: "Shankar",
//     favFood: "Dosa",
//     sayHello : function() {console.log(`Hi!! i am a ${this.favFood}`);
//     },
//     eat: function(){console.log(`${this.name} is eating ${this.favFood}`);
//     }
// }

// const person2 = {
//     name: "Archana",
//     favFood: "Idly",
//     sayHello : () => {console.log(`Hi!! i am a ${this.favFood}`);
//     },
//     eat: function(){console.log(`${this.name} is eating ${this.favFood}`);
//     }
// }

// person1.eat();
// person2.sayHello();
// person2.eat();

// console.log(this);

// Constructor - special method for defining the properties and methods of objects.


// function Car(make, model, year, color) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;

//     this.drive = function() {console.log(`You drive the ${this.model}`);
//     }
// }

// const car1 = new Car("Ford", "ecosport", 2020, "red");
// const car2 = new Car("Tata", "nexon", 2022, "black");
// const car3 = new Car("Maruthi", "swift", 2023, "blue");

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);
// car1.drive();

// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);
// car2.drive();

// console.log(car3.make);
// console.log(car3.model);
// console.log(car3.year);
// console.log(car3.color);
// car3.drive();

// Classes - ES6 feature prvides a more structured and cleaner way to work with objects coampared to traditional constructor functions 

// eccapsulation, inheritance, static keywords 


// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
   
//     }

//    displayProduct() {
//         console.log(`Product Name: ${this.name}`);
//         console.log(`Price: ${this.price.toFixed(2)}`);
//     }

//    calculateTotal(salesTax) {
//     return this.price + (this.price * salesTax);
//    }

// }

// const salesTax = 0.18;

// const product1 = new Product("Phone", 10000.789, 2);
// const product2 = new Product("Laptop", 30000.3456, 1);
// const product3 = new Product("Shoe", 1000, 1);

// product1.displayProduct();
// product2.displayProduct();
// product3.displayProduct();

// const total = product1.calculateTotal(salesTax);

// console.log(`The total price with tax ${total.toFixed(2)}`);


// cgst 
// sgst


//Static = keyword that defines properties and methods that belong to a class itself rather than the objects created from that class (class owns anything, not the objects)


// class MathUtil {
//     static PI = 3.14159;
//     static getDiameter(radius) {
//        return radius * 2;
//     }
//     static getCircumference(radius) {
//        return Math.PI * 2 * radius;
//     }
//     static getArea(radius) {
//        return Math.PI * Math.pow(radius, 2);
//     }
// }



// console.log(MathUtil.PI);

// console.log(MathUtil.getDiameter(10));

// console.log(MathUtil.getCircumference(10));

// console.log(MathUtil.getArea(10));


// class User {
//     static userCount = 0;

//     constructor(username) {
//         this.username = username;
//         User.userCount++;
//     }

//     sayHello() {
//         console.log(`Helloe my username is  ${this.username}`);   
//     }

//     static getUserCount() {
//         console.log(`There are ${this.userCount} users online`);
        
//     }
// }

// const user1 = new User("john");
// const user2 = new User("jane");

// user1.sayHello();
// console.log(user1.username);
// user2.sayHello();
// console.log(user2.username);
// console.log(User.userCount);
// User.getUserCount();


// inheritance = allows a new class to inherit properties
// and methods from an exiting class (parent -> child)
// help with code reusabibility


// class Animal {
//     alive = true;
//     eat() {
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep() {
//         console.log(`This ${this.name} is sleeping`);
//     }
// }

// class Rabbit extends Animal {
//     name = 'Rabbit';

//     run() {
//         console.log(`This ${this.name} is running`);
//     }
// }
// class Fish extends Animal {
//     name = 'Fish';
//     swim() {
//         console.log(`This ${this.name} is swimming`);
//     }
// }
// class Eagle extends Animal {
//     name = 'Eagle';
//     fly() {
//         console.log(`This ${this.name} is flying`);
//     }
// }

// const rabbit = new Rabbit();

// console.log(rabbit.name);
// rabbit.eat();
// rabbit.sleep();
// console.log(rabbit.alive);
// rabbit.run();

// const fish = new Fish();
// console.log(fish.name);
// fish.eat();
// fish.sleep();
// console.log(fish.alive);
// fish.swim();


// const eagle = new Eagle();
// console.log(eagle.name);
// eagle.eat();
// eagle.sleep();
// console.log(eagle.alive);
// eagle.fly();


// Super Keyword - which is used in the class to call the constructor or access the properties and methods of parent (superclass)

// super = parent


// class Animal {

//      constructor(name, age) {
//         this.name = name;
//         this.age = age;
//      }
// }

// class Rabbit extends Animal {
 
   
//     constructor(name, age, runSpeed) {
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }

// }
// class Fish extends Animal {

//     constructor(name, age,swimSpeed) {
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }
// }
// class Eagle extends Animal {
  
//     constructor(name, age,flySpeed) {
//         super(name,age);
//         this.flySpeed = flySpeed;
//     }
// }

// const rabbit = new Rabbit("Micky", 1, 25);
// const fish = new Fish("nemo", 2, 12);
// const eagle = new Eagle("exii", 3, 50);


// console.log(rabbit.runSpeed);
// console.log(fish.swimSpeed);
// console.log(eagle.flySpeed);

// Getters and Setters


// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth) {
//         if(newWidth > 0) {
//             this._width = newWidth;
//         } else {
//             console.error("Width must be +ve number");            
//         }
//     }
//     set height(newheight) {
//         if(newheight > 0) {
//             this._height = newheight;
//         } else {
//             console.error("height must be +ve number");            
//         }
//     }

//     get width() {
//         return this._width;
//     }
//     get height() {
//         return this._height;
//     }
// }

// const rectangle = new Rectangle(3, 4);

// console.log(rectangle.width);
// console.log(rectangle.height);























