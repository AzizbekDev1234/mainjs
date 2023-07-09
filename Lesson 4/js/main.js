// 1. ### String methods

// - String.length
// - String.trim()
// - String.toUpperCase();
// - String.toLowerCase();
// - String.substring(x,y);
// - String.search();
// - String.trim();
// - String.match();
// - String.split();
// - charAt(n)
// ! String methods
// * Length
// let userName = "Azizbek";
// console.log(userName.length)
// * Trim()

// let user = "    Azizbek";
// console.log(user.trim())

// * trimStart() vs trimEnd()
// let user = "    Azizbek";
// let users = "Azizbek     ";
// console.log(user.trimStart());
// console.log(user.trimEnd());
// *toUpporCase() vs toLowerCase()
// let user = "Azizbek";
// console.log(user.toLowerCase())
// console.log(user.toUpperCase())
// * Substring()
// let part1 = "Azizbek";
// console.log(part1.substring(3 , 5))

// * Search()
// let info = "Azizbek front end devoloper";
// console.log(info.search("front"), "front".length + info.search("front"));
// ? Amaliyot
// var info = "Azizbek bakhtiyarovich the best of front devoloper";
// var searchingPart = prompt("Izlagan sozni kiriting").toLocaleLowerCase();
// var startingPart = info.toLocaleLowerCase().search();
// var endingPart = startingPart + searchingPart.length;
// console.log(startingPart, endingPart);

// * splite()
// let demo = "My name is Azizbek";
// console.log(demo.split(" "))
// * charAt()
// var userName = "Azizbek";
// console.log(userName.charAt(2)

// * Functions
// function sayHello(a, b) {
//   let result = a ** b;
//   return result;
// }
// let num = sayHello(3, 4) + 3;
// console.log(num);

//  ! Amalyotcha
//  let double = function number(type, x) {
//   if (type === "cube") {
//     return x ** 3;
//   } else if (type === "kvadrat") {
//     return x ** 2;
//   } else {
//      return x;
//   }
// }
//  console.log(double("cube", 4))


// !1. charAt():
// let str = "Hello";
// console.log(str.charAt(0)); // Output: H
// *let str1 = "Azizbek";
// *console.log(str1.charAt(3));
//! 2. concat():
//    let str1 = "Hello";
//    let str2 = "World";
//    console.log(str1.concat(" ", str2)); // Output: Hello World
// *let str1 = "Azizbek";
// *let str2 = "Devoloper";
// *console.log(str1.concat(" " , str2));
// !3. endsWith():
//    let str = "Hello World";
//    console.log(str.endsWith("World")); // Output: true
// *let str = "Azizbek Devoloper";
// *console.log(str.endsWith("Azizbek"));
//! 4. includes():
//    let str = "Hello World";
//    console.log(str.includes("World")); // Output: true
//* let str = "HelloWorld";
// *console.log(str.includes("HelloWorld"));
// !5. indexOf():
//    let str = "Hello World";
//    console.log(str.indexOf("World")); // Output: 6
// *let str = "Hello World";
// *console.log(str.indexOf("Hello"));
// !6. lastIndexOf():
//    let str = "Hello World";
//    console.log(str.lastIndexOf("o")); // Output: 7
// let str = "Azizbek Devoloper";
// console.log(str.lastIndexOf("r"));
// !7. match():
//    let str = "Hello World";
//    console.log(str.match(/o/g)); // Output: ["o", "o"]
// let str = "Azizbek devoloper";
// console.log(str.match(/A/g));
//! 8. repeat():
//    let str = "Hello";
//    console.log(str.repeat(3)); // Output: HelloHelloHello
// let str = " Aziz";
// console.log(str.repeat(3));
//! 9. replace():
//    let str = "Hello World";
//    console.log(str.replace("World", "JavaScript")); // Output: Hello JavaScript
// let str = "Azizbek Dev";
// console.log(str.replace("Azizbek", "JavaScript"))
// ! 10. search():
//     let str = "Hello World";
//     console.log(str.search("World")); // Output: 6

// !11. slice():
//     let str = "Hello World";
//     console.log(str.slice(6)); // Output: World

// !12. split():
//     let str = "Hello World";
//     console.log(str.split(" ")); // Output: ["Hello", "World"]

// !14. substr():
//     let str = "Hello World";
//     console.log(str.substr(6, 5)); // Output: World

//! 15. substring():
//     let str = "Hello World";
//     console.log(str.substring(6, 11)); // Output: World

//! 16. toLowerCase():
//     let str = "Hello World";
//     console.log(str.toLowerCase()); // Output: hello world

//! 17. toUpperCase():
//     let str = "Hello World";
//     console.log(str.toUpperCase()); // Output: HELLO WORLD

// !19. valueOf():
//     let str = "Hello World";
//     console.log(str.valueOf()); // Output: Hello World

// !20. toString():
//     let num = 123;
//     console.log(num.toString()); // Output: "123"

// !21. anchor():
//     let str = "Hello";
//     console.log(str.anchor("heading")); // Output: <a name="heading">Hello</a>
// let str = "Hello ";
// console.log(str.anchor("heading"));
// 22. big():
//     let str = "Hello";
//     console.log(str.big()); // Output: <big>Hello</big>

// 23. blink():
//     let str = "Hello";
//     console.log(str.blink()); // Output: <blink>Hello</blink>

// 24. bold():
//     let str = "Hello";
//     console.log(str.bold()); // Output: <b>Hello</b>

// 25. fixed():
//     let str = "Hello";
//     console.log(str.fixed()); // Output: <tt>Hello</tt>

// 26. fontcolor():
//     let str = "Hello";
//     console.log(str.fontcolor("red")); // Output: <font color="red">Hello</font>

// 27. fontsize():
//     let str = "Hello";
//     console.log(str.fontsize(4)); // Output: <font size="4">Hello</font>

// 28. italics():
//     let str = "Hello";
//     console.log(str.italics()); // Output: <i>Hello</i>

// 29. link():
// let str = "Hello";
// console.log(str.link("https://www.example.com")); // Output: <a href="https://www.example.com">Hello</a>

// 30. small():
//     let str = "Hello";
//     console.log(str.small()); // Output: <small>Hello</small>

// 31. strike():
//     let str = "Hello";
//     console.log(str.strike()); // Output: <strike>Hello</strike>

// 32. sub():
//     let str = "Hello";
//     console.log(str.sub()); // Output: <sub>Hello</sub>

// 33. sup():
//     let str = "Hello";
//     console.log(str.sup()); // Output: <sup>Hello</sup>

// 34. normalize():
//     let str = "Héllò Wórld";
//     console.log(str.normalize()); // Output: Hello World

// 35. padEnd():
//     let str = "Hello";
//     console.log(str.padEnd(10, "-")); // Output: Hello-----

// 36. padStart():
//     let str = "Hello";
//     console.log(str.padStart(10, "-")); // Output: -----Hello

// 37. codePointAt():
//     let str = "Hello";
//     console.log(str.codePointAt(0)); // Output: 72

// 38. matchAll():
//     let str = "Hello World";
//     console.log([...str.matchAll(/o/g)]); // Output: [Array(1), Array(1)]

// 39. replaceAll():
//     let str = "Hello World";
//     console.log(str.replaceAll("o", "a")); // Output: Hella Warld

// 40. trimEnd():
//     let str = "   Hello World   ";
//     console.log(str.trimEnd()); // Output:    Hello World

// ! Ibrohim Turaboyev
//? String methods
//* length
// var username = "Ibrohim";
// console.dir("Odil".length);

//* trim, trimStart, trimEnd
// var template = "        Eshmat       Umar             ";
// var username = prompt("What is your name?");
// var trimmedUsername = username.trimEnd();
// console.log(trimmedUsername);

//* toUpperCase vs toLowerCase
// var username = "LALAKU";
// console.log(username.toUpperCase());
// console.log(username.toLowerCase());

//* substring
// var username = "Ibrohim";
// console.log(username.substring(0, 3));

//* search
// var text = "Najot ta'limda o'qish bir bahona edi, Co-workingdan seni izladim";
// console.log(text.search("ta'lim"));
// var searchingPart = prompt("Searching word").toLowerCase();
// var startingPoint = text.toLocaleLowerCase().search(searchingPart);
// var endingPoint = startingPoint + searchingPart.length;
// console.log(startingPoint, endingPoint);

//* split
// var username = "My name is Ibrohim";
// console.log(username.split(" "));

//* chatAt
// var username = "Ibrohim";
// console.log(username.charAt(1));
