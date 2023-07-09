// ! 1. Truthy and Falthy
// * ====
// In JavaScript, truthy and falsy values determine the boolean interpretation of non-boolean values. Here are some examples of truthy and falsy values in JavaScript:
//  Truthy values:
// - Non-empty strings
// - Numbers other than 0 (positive or negative)
// - Arrays with at least one element
// - Objects
// - The boolean value true
//  Falsy values:
// - An empty string ('')
// - The number 0
// - NaN (Not a Number)
// - null
// - undefined
// - The boolean value false
//  These truthy and falsy values are often used in conditional statements, such as if-else statements, to determine the flow of the program based on the evaluation of these values.
// ! 2. Conditional operator "if else"
// * ===
//  let user = "Azizbek"
//  if(user = "Azizbek"){
//   alert("Ruxsat")
// }else if(user = "azizbek"){
//   alert("Ozgina")
// }else{
//   alert("Error")
//  }
// ! 3. logical operators (&& and || or )
// * ===
// let cola = true;
// let pepsi = false;
// console.log(pepsi && cola);
// console.log(pepsi || cola);

// ! 4. Ternary operator
// * ===
// Sure! Here are some exercises and examples to help you practice using the ternary operator:
//  Exercise 1: Determine if a number is positive or negative
// Write a program that takes a number as input and uses the ternary operator to determine if it is positive or negative. Print the result.
//!  Example:
// let num = 7;
// let result = num >= 0 ? "Positive" : "Negative";
// console.log(result);
// Exercise 2: Check if a year is a leap year
// Write a program that takes a year as input and uses the ternary operator to check if it is a leap year. Print "Leap year" if it is, and "Not a leap year" otherwise.
// ! Example:
// let year = 2024;
// let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// let result = isLeapYear ? "Leap year" : "Not a leap year";
// console.log(result);
// Exercise 3: Determine the maximum of two numbers
// Write a program that takes two numbers as input and uses the ternary operator to determine the maximum of the two. Print the maximum.
//  !Example:
// let num1 = 10;
// let num2 = 7;
// let max = num1 > num2 ? num1 : num2;
// console.log(max);
// These exercises should help you get familiar with using the ternary operator in JavaScript. Feel free to modify them or come up with your own examples to practice further.

// ! 5. "switch" statement
// *  Switch case => vazifa bularni return bilan yozib chiqish
// let day = "Monday";
// switch (day) {
//   case "Monday":
//     console.log("It's Monday!");
//     break;
//   case "Tuesday":
//     console.log("It's Tuesday!");
//     break;
//   // ...
//   default:
//     console.log("It's another day.");
// }

// let fruit = "Apple";
// switch (fruit) {
//   case "Apple":
//     console.log("It's an apple!");
//     break;
//   case "Banana":
//     console.log("It's a banana!");
//     break;
//   // ...
//   default:
//     console.log("It's another fruit.");
// }
// let number = 3;
// switch (number) {
//   case 1:
//     console.log("The number is 1.");
//     break;
//   case 2:
//     console.log("The number is 2.");
//     break;
//   // ...
//   default:
//     console.log("The number is something else.");
// }
// let grade = "B";
// switch (grade) {
//   case "A":
//     console.log("Excellent!");
//     break;
//   case "B":
//     console.log("Good job!");
//     break;
//   // ...
//   default:
//     console.log("Keep working hard.");
// }
// let month = 5;
// switch (month) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("February");
//     break;
//   // ...
//   default:
//     console.log("Invalid month");
// }
// let language = "Java";
// switch (language) {
//   case "JavaScript":
//     console.log("It's JavaScript!");
//     break;
//   case "Python":
//     console.log("It's Python!");
//     break;
//   // ...
//   default:
//     console.log("It's another programming language.");
// }
// let option1 = 2;
// switch (option1) {
//   case 1:
//     console.log("Option 1 selected.");
//     break;
//   case 2:
//     console.log("Option 2 selected.");
//     break;
//   // ...
//   default:
//     console.log("Invalid option.");
// }
// let animal = "Dog";
// switch (animal) {
//   case "Dog":
//     console.log("It's a dog.");
//     break;
//   case "Cat":
//     console.log("It's a cat.");
//     break;
//   // ...
//   default:
//     console.log("It's another animal.");
// }
// let color = "Red";
// switch (color) {
//   case "Red":
//     console.log("The color is red.");
//     break;
//   case "Blue":
//     console.log("The color is blue.");
//     break;
//   // ...
//   default:
//     console.log("The color is something else.");
// }
// let option = "A";
// switch (option) {
//   case "A":
//     console.log("Option A selected.");
//     break;
//   case "B":
//     console.log("Option B selected.");
//     break;
//   // ...
//   default:
//     console.log("Invalid option.");
// }

// !1. Loops: while and for ( while, do..while and for(..;..;..) )
// Sure! Here's some information about while, do..while, and for loops, along with 5 sample exercises:
//  1. While Loop:
// The while loop executes a block of code repeatedly as long as a specified condition is true. The syntax is as follows:
// while (condition) {
//   // code to be executed
// }
// The condition is checked before each iteration, and if it evaluates to true, the code inside the loop is executed.
//  2. Do..While Loop:
// The do..while loop is similar to the while loop, but it checks the condition after executing the code block. This means the code block is always executed at least once. The syntax is as follows:
// do {
//   // code to be executed
// } while (condition);
// 3. For Loop:
// The for loop is commonly used when you know the number of iterations in advance. It consists of three parts: initialization, condition, and increment/decrement. The syntax is as follows:
// for (initialization; condition; increment/decrement) {
//   // code to be executed
// }
// The initialization is executed once at the beginning, the condition is checked before each iteration, and the increment/decrement is executed after each iteration.
//  Now, let's move on to the sample exercises:
// ! Exercise 1: Print numbers from 1 to 10 using a while loop.
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// !Exercise 2: Print even numbers from 1 to 20 using a do..while loop.
// let i = 1;
// do {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// } while (i <= 20);
// !Exercise 3: Calculate the sum of numbers from 1 to 100 using a for loop.
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);
// !Exercise 4: Print the multiplication table of a given number using a while loop.
// let number = 5;
// let i = 1;
// while (i <= 10) {
//   console.log(number + " x " + i + " = " + (number * i));
//   i++;
// }
// !Exercise 5: Print a countdown from 10 to 1 using a for loop.
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }
// These exercises should help you practice while, do..while, and for loops in JavaScript. Feel free to modify them or come up with your own examples to further strengthen your understanding.
// !2. Function and function types
// Sure! Here's some information about functions and function types, as well as a few challenging exercises and their solutions:
//  1. Functions:
// Functions are blocks of code that perform a specific task. They allow you to organize your code into reusable modules, making it easier to read, debug, and maintain. Functions can take input parameters, perform operations, and return a value.
//  2. Function Types:
// a. Named Functions:
//    - Named functions are defined using the "function" keyword followed by a name.
//    - They can be invoked by calling their name followed by parentheses.
//    - Example:
// function greet(name) {
//        console.log("Hello, " + name + "!");
//      }
//      greet("John"); // Output: Hello, John!
// b. Anonymous Functions:
//    - Anonymous functions, also known as function expressions, do not have a name.
//    - They are typically assigned to a variable or used as a callback function.
//    - Example:
// let greet = function(name) {
//        console.log("Hello, " + name + "!");
//      };
//      greet("John"); // Output: Hello, John!
// c. Arrow Functions:
//    - Arrow functions provide a concise syntax for writing functions.
//    - They are commonly used for one-liner functions or as callbacks.
//    - Example:
// let greet = (name) => console.log("Hello, " + name + "!");
//      greet("John"); // Output: Hello, John!
// 3. Challenging Exercises and Solutions:
// Exercise 1: Write a function to calculate the factorial of a number.
// Solution:
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
// console.log(factorial(5)); // Output: 120
// Exercise 2: Write a function to check if a string is a palindrome.
// Solution:
// function isPalindrome(str) {
//   let reversed = str.split("").reverse().join("");
//   return str === reversed;
// }
// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("hello")); // Output: false
// Exercise 3: Write a function to find the maximum value in an array.
// Solution:
// function findMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax([5, 2, 9, 1, 7])); // Output: 9
// These exercises should challenge your understanding of functions and provide an opportunity to practice your problem-solving skills. Feel free to modify them or come up with your own examples to further enhance your knowledge.
// !3. Function  arrow func / func expression / func declaration
//! Function declaration
// function addUser(a, b) {
//   return a + b;
// }

// addUser(3, 4);

//! Function expression
// var addUser = function (a, b) {
//   return a + b;
// };

// addUser(3, 4);

//! Arrow function
// var addUser = (a, b) => a + b;
// var addUser = (a) => a ** a;
// var addUser = (a, b) => {
//   return a + b;
// };
// console.log(addUser(2));
// !4. function parametrs
// Certainly! Here's some information about function parameters and a few challenging exercises along with their solutions:
//  1. Function Parameters:
// Function parameters are placeholders within a function's parentheses that define the input values the function expects to receive when it is called. These parameters allow us to pass data into a function and use it within the function's body. Parameters are optional and can be of any data type.
//  2. Challenging Exercises and Solutions:
//  Exercise 1: Write a function to find the average of an array of numbers.
// Solution:
// function calculateAverage(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum / numbers.length;
// }
//  console.log(calculateAverage([1, 2, 3, 4, 5])); // Output: 3
// Exercise 2: Write a function to find the second smallest number in an array.
// Solution:
// function findSecondSmallest(numbers) {
//   let smallest = Infinity;
//   let secondSmallest = Infinity;
//    for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < smallest) {
//       secondSmallest = smallest;
//       smallest = numbers[i];
//     } else if (numbers[i] < secondSmallest && numbers[i] !== smallest) {
//       secondSmallest = numbers[i];
//     }
//   }
//    return secondSmallest;
// }
//  console.log(findSecondSmallest([5, 2, 9, 1, 7])); // Output: 2
// Exercise 3: Write a function to count the number of vowels in a string.
// Solution:
// function countVowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;
//    for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i].toLowerCase())) {
//       count++;
//     }
//   }
//    return count;
// }
//  console.log(countVowels('Hello World')); // Output: 3
// These exercises should challenge your understanding of function parameters and provide an opportunity to practice your problem-solving skills. Feel free to modify them or come up with your own examples to further enhance your knowledge.
// - Default parametr
// Certainly! Here's some information about default settings and a few challenging exercises along with their solutions in JavaScript:
//  1. Default Setting:
// In JavaScript, a default setting refers to a value or behavior that is automatically used when no other value or behavior is explicitly specified. It acts as a fallback option that is applied when no specific choice is made.
//  2. Challenging Exercises and Solutions:
//  Exercise 1: Write a function to find the longest word in a sentence.
// Solution:
// function findLongestWord(sentence) {
//   const words = sentence.split(" ");
//   let longestWord = "";
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: jumps
// Exercise 2: Write a function to check if a string is an anagram of another string.
// Solution:
// function isAnagram(str1, str2) {
//   const sortedStr1 = str1.toLowerCase().split("").sort().join("");
//   const sortedStr2 = str2.toLowerCase().split("").sort().join("");
//   return sortedStr1 === sortedStr2;
// }
// console.log(isAnagram("listen", "silent")); // Output: true
// console.log(isAnagram("hello", "world")); // Output: false
// Exercise 3: Write a function to calculate the nth Fibonacci number.
// Solution:
// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }
// console.log(fibonacci(6)); // Output: 8
// These exercises should challenge your problem-solving skills in JavaScript and provide an opportunity to apply your knowledge. Feel free to modify them or come up with your own examples to further enhance your understanding.
//! - SyntaxError, ReferenceError, TypeError
// ! Syntax Error
// Sintaksis xatosi - bu kod dasturlash tili sintaksisi qoidalarini buzganida dasturlashda yuzaga keladigan xato turi. Bu kod to'g'ri yozilmaganligini va kompyuter tomonidan bajarilmasligini anglatadi.
//   Pythonda sintaksis xatosiga misol:
//! alert("Salom, dunyo!" => xato
// Ushbu misolda yopish qavslari yo'q, bu sintaksis xatosiga olib keladi. Buni tuzatish uchun siz yopish qavsni qo'shishingiz kerak:
//  !alert("Salom, dunyo!") => Bu togri
// Sintaksis xatolar har qanday dasturlash tilida paydo bo'lishi mumkin va ularning o'ziga xos tafsilotlari foydalanilayotgan tilga qarab farq qilishi mumkin. Uni ishga tushirishdan oldin kodingizni diqqat bilan ko'rib chiqish va sintaktik xatolarni tuzatish muhimdir.
//   Muayyan dasturlash tilida sintaksis xatolarini aniqlash va tuzatishni mashq qilish uchun namunali mashqlarni xohlasangiz, o'zingizni qiziqtirgan tilni belgilang.
// ? Reference Error
// E'lon qilinmagan yoki amaldan tashqarida bo'lgan o'zgaruvchiga yoki funksiyaga kirishga harakat qilganingizda dasturlashda mos yozuvlar xatosi paydo bo'ladi. Bu shuni anglatadiki, dastur siz foydalanmoqchi bo'lgan identifikatorga havolani topa olmaydi.
//   JavaScript-da havola xatosiga misol:
// !console.log(myVariable);
// Ushbu misolda "myVariable" o'zgaruvchisi e'lon qilinmagan yoki qiymat tayinlanmagan. Unga kirishga urinish havola xatosiga olib keladi. Buni tuzatish uchun siz o'zgaruvchini ishlatishdan oldin e'lon qilishingiz va ishga tushirishingiz kerak:
//* var myVariable = "Salom, dunyo!";
//* console.log(myVariable);
// Yo'naltiruvchi xatolar, aniqlanmagan yoki amaldan tashqarida bo'lgan funksiya yoki usulga kirishga harakat qilganingizda ham paydo bo'lishi mumkin. Mana bir misol:
// !myFunction();
// Agar `myFunction` aniqlanmagan bo'lsa yoki ko'rib chiqilmasa, siz havola xatosiga duch kelasiz. Buni tuzatish uchun funktsiyani chaqirishdan oldin uni aniqlashingiz kerak:
// funktsiya myFunction() {
//    console.log("Salom, dunyo!");
// }
//   myFunction();
// Malumot xatolarini aniqlash va tuzatishni mashq qilish uchun kichik kodlash mashqlari yoki loyihalari ustida ishlash tavsiya etiladi. Ushbu mashqlar siz foydalanayotgan dasturlash tiliga qarab farq qilishi mumkin. Agar sizda ma'lum bir dasturlash tili bo'lsa, iltimos, menga xabar bering, men sizga o'sha tilda namunali mashqlarni taqdim etaman.
// Sure! Here are some sample exercises to practice identifying and fixing reference errors in JavaScript:
//  Exercise 1:
// console.log(myVariable);
// var myVariable = "Hello, world!";
// In this exercise, there is a reference error. Try to identify the issue and fix it.
//  Exercise 2:
// function greet() {
//   console.log("Hello, " + name);
// }
//  greet();
// In this exercise, there is a reference error. Can you figure out what's causing it and how to resolve it?
//  Exercise 3:
// var x = 5;
//  function multiplyByTwo() {
//   console.log(x * 2);
// }
//  multiplyByTwo();
// In this exercise, there is no reference error, but the output may not be what you expect. Can you modify the code to fix the issue and get the desired output?
//  Remember, reference errors occur when variables or functions are not declared or are out of scope. Analyze the code, identify the problematic areas, and make the necessary adjustments to fix the errors.
//  Feel free to ask for further clarification or assistance with these exercises!
// * TypeError
// Noto'g'ri ma'lumotlar turining qiymati bo'yicha operatsiya bajarilganda dasturlashda tip xatosi paydo bo'ladi. Bu shuni anglatadiki, dastur qiymatdan ma'lumotlar turi tomonidan qo'llab-quvvatlanmaydigan tarzda foydalanishga harakat qilmoqda.
//   Mana Python-da turdagi xatoliklarga misol:
// soni = 5
// natija = son + "10"
// chop etish (natija)
// Ushbu misolda biz satrni ("10") butun son (num) bilan birlashtirishga harakat qilmoqdamiz. Bu tur xatosiga olib keladi, chunki "+" operatori ushbu ikki turdagi ma'lumotlar uchun aniqlanmagan. Buni tuzatish uchun ikkala operand ham mos turlarga ega ekanligiga ishonch hosil qilishingiz kerak:
// soni = 5
// natija = str(num) + "10"
// chop etish (natija)
// Turi xatoliklari boshqa dasturlash tillarida ham sodir bo'lishi mumkin va ularning o'ziga xos tafsilotlari farq qilishi mumkin. Siz foydalanayotgan tilda ma'lumotlar turlarini va ularning cheklovlarini tushunish muhimdir.
//   Agar siz ma'lum bir dasturlash tilida turdagi xatolarni aniqlash va tuzatish uchun mashq namunalarini olishni istasangiz, iltimos, sizni qiziqtirgan tilni belgilang.
// *Understood! Here are some sample exercises to practice identifying and fixing type errors in JavaScript:
// ! Exercise 1:
// var num = 5;
// var result = num + "10";
// console.log(result);
// In this exercise, there is a type error. Try to identify the issue and fix it.
//  !Exercise 2:
// var x = 10;
// var y = "5";
// var result = x - y;
// console.log(result);
// In this exercise, there is a type error. Can you figure out what's causing it and how to resolve it?
// ! Exercise 3:
// var str = "15";
// var num = parseInt(str);
// console.log(num + 5);
// In this exercise, there is no type error, but the output may not be what you expect. Can you modify the code to fix the issue and get the desired output?
//  Remember, type errors occur when operations are performed on incompatible data types. Analyze the code, identify the problematic areas, and make the necessary adjustments to fix the errors.
//  Feel free to ask for further c




// ! # Day 3
// 0. Template literal 
// 1. Truthy and Falthy
// 2. Conditional operator "if else"
// 3. logical operators (&& and || or )
// 4. Ternary operator 
// 5. "switch" statement
