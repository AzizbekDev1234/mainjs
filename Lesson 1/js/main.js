// ! Age calculator
// const btnEl = document.getElementById("btn");
// const birthdayEl = document.getElementById("birthday");
// const resultEl = document.getElementById("result");

// function calculateAge() {
//   const birthdayValue = birthdayEl.value;
//   if (birthdayValue === "") {
//     alert("Please enter your birthday");
//   } else {
//     const age = getAge(birthdayValue);
//     resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
//   }
// }

// function getAge(birthdayValue) {
//   const currentDate = new Date();
//   const birthdayDate = new Date(birthdayValue);
//   let age = currentDate.getFullYear() - birthdayDate.getFullYear();
//   const month = currentDate.getMonth() - birthdayDate.getMonth();

//   if (
//     month < 0 ||
//     (month === 0 && currentDate.getDate() < birthdayDate.getDate())
//   ) {
//     age--;
//   }

//   return age;
// }

// btnEl.addEventListener("click", calculateAge);


// btnEl.addEventListener("click", calculatorAge);
// !Amaliyot
// * var
// var username = "Azizbek"; // ! bu ma'lum bir qiymatni o'zgaruvchiga saqlash deyiladi
// var num = 3;
// var isMarried = true;
// * alert
// alert("Hello World");
// * promt
// prompt("Ismingizni kiriting");
// *confirm
// confirm("Are you man ???");
// *document.write()
// document.write("Assalomu Alaykom")
// *innerHtml
// var myDivContent = document.querySelector("#myDiv").innerHTML;
// var myBtn = document.querySelector("#btn");
// myBtn.onclick = function () {
//   document.querySelector("#myDiv").innerHTML =
//     "<h1>Bu yangi</h1> <p>bu ham yangi</p>";
// };
// * Template literal

// var names = "Azizbek";
// var edu = "Najot Ta'lim";
// console.log("Salom" +  name  + edu)//! bu xato
// console.log(`"Mening ismim"  ${names}  ${edu}`)

//* Matematik operatorlar
// ? + / * \ / -
// let x = 5;
// let y = 3;
// let addition = x + y;
// let subtraction = x - y;
// let multiplication = x * y;
// let division = x / y;
// let modulo = x % y;
// let exponentiation = x ** y;
// console.log(addition); // Output: 8
// console.log(subtraction); // Output: 2
// console.log(multiplication); // Output: 15
// console.log(division); // Output: 1.6666666666666667
// console.log(modulo); // Output: 2
// console.log(exponentiation); // Output: 125
