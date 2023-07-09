// ! ☑️ 1. Variables (o'zgaruvchilar) var , let , const , (difference)
//  📌    - `var` - JavaScript-ning eski versiyalarida o'zgaruvchini e'lon qilish uchun ishlatiladigan kalit so'z. U funktsiya doirasi yoki global miqyosiga ega, ya'ni unga butun funktsiya bo'ylab yoki har qanday funktsiyadan tashqarida e'lon qilingan bo'lsa, global miqyosda foydalanish mumkin. Biroq, `var` blok doirasiga ega emas, shuning uchun u kutilmagan xatti-harakatlarga olib kelishi mumkin.
//  📌- `let` - blok doirasi bilan o'zgaruvchilarni e'lon qilish uchun ES6 (ECMAScript 2015) da kiritilgan kalit so'z. U `var` ga o'xshaydi, lekin u belgilangan blok bilan cheklangan. Bu shuni anglatadiki, "let" bilan e'lon qilingan o'zgaruvchilar ular e'lon qilingan blokdan tashqarida mavjud emas.
//  📌- `const` ham ES6 da kiritilgan va qayta tayinlab bo'lmaydigan o'zgaruvchilarni e'lon qilish uchun ishlatiladi. U "let" kabi blok doirasiga ega, lekin "const" o'zgaruvchisiga qiymat tayinlangandan keyin uni o'zgartirib bo'lmaydi. Ammo shuni ta'kidlash kerakki, agar o'zgaruvchi ob'ekt yoki massiv bo'lsa, ob'ekt yoki massivning xususiyatlari yoki elementlari hali ham o'zgartirilishi mumkin.
//📌   Xulosa qilib aytganda, `var` , `let` va `const` o`rtasidagi asosiy farq qamrovi va qayta tayinlanishidir. `var` funksiya doirasiga ega, `let` blok doirasiga ega va uni qayta tayinlash mumkin, `const` esa blok doirasiga ega va uni qayta tayinlab bo`lmaydi.
// ? VARIABLE amaliyot
// console.log(leta); //* natija undefined chiqadi bu esa xato error bo'lishi kerak
// var leta = "Azizbek";
// console.log(leta);
// console.log(vare); //* ☑️bunda esa error chiqadi
// let vare = "Azizbek";
// console.log(vare);
// const letvar = "Azizbek"; //* ☑️ buni esa gapirishga hojat ham yoq
// console.log(letvar);

// 2. Data types
//  ☑️ - String
// let str = "Azizbek"; // ? => bu string korinishidagi malumot turi
// console.log(str);
//  ☑️ - Number
// let num = 1212; // ? bu esa number korinishidagi malumot turi
// console.log(num);
// ☑️  - Boolean
// let isStudent = true; // ? bu esa true yoki false qiymat qaytaradi
// console.log(isStudent);
//  ☑️ - Undefined
// let user; // ? bu esa o'zgaruvchi bor lekin qiymat yo'q
// console.log(user);
//   ☑️- null
// let users = null;
// alert(users);
// let userName = prompt("Ism");
// users = userName;
// console.log(users);
//   - BigInt(9007199254740991)
// let num =
//   BigInt(
//     9209212413231231231231231231231239375923742930742539852309578203498273042
//   );
// console.log(num);
//   - Symbol('Hello JavaScript')
// let sid = Symbol("Java Script");
// let sit = Symbol("Java Script");
// console.log(sid == sit);
// 2. "use strict"
"use strict"; //!  => Qa'tiy rejim kodlar xato ketmasligi uchun ishlatiladi
// 3. appropriation operators (o'zlashtirish operatorlari)
let x = 4;
// x = x + 2; // !
// x += 2;
// console.log(x);
// <!-- JavaScript-dagi tayinlash operatorlari o'zgaruvchilarga qiymatlarni belgilash uchun ishlatiladi. Quyida tez-tez ishlatiladigan tayinlash operatorlari keltirilgan:

// - `=` : o'ngdagi qiymatni chapdagi o'zgaruvchiga belgilaydi. Masalan, `x = 5` `x` o`zgaruvchisiga 5 qiymatini belgilaydi.
// - `+=` : o`ngdagi qiymatni chapdagi o`zgaruvchiga qo`shadi va natijani chapdagi o`zgaruvchiga tayinlaydi. Masalan, `x += 3` `x = x + 3` ga ekvivalentdir.
// - `-=` : Chapdagi o'zgaruvchidan o'ngdagi qiymatni ayiradi va natijani chapdagi o'zgaruvchiga belgilaydi. Masalan, `x -= 2` `x = x - 2` ga ekvivalentdir.
// - `*=` : o'ngdagi qiymatni chapdagi o'zgaruvchiga ko'paytiradi va natijani chapdagi o'zgaruvchiga belgilaydi. Masalan, `x *= 4` `x = x * 4` ga ekvivalentdir.
// - `/=` : Chapdagi o`zgaruvchini o`ngdagi qiymatga ajratadi va natijani chapdagi o`zgaruvchiga belgilaydi. Masalan, `x /= 2` `x = x / 2` ga ekvivalentdir.
// - `%=` : Chapdagi o`zgaruvchini o`ngdagi qiymatga ajratadi va qolganini chapdagi o`zgaruvchiga belgilaydi. Masalan, `x %= 3` `x = x % 3` ga ekvivalentdir.
//    Bular JavaScript-da tayinlash operatorlarining bir nechta misollari. Ular operatsiyalarni bajarish va natijani o'zgaruvchiga qaytarish uchun ishlatiladi. 
// ? 4. comparison operators (taqqoslash operatorlari)
// let num1 = 4;
// let num2 = "4";
// console.log(num1 != +num2);

// ?5. Object Math
// let num=12.24236;

// console.log(Math.floor(num)) //  <
// console.log(Math.ceil(num))  //   >
// console.log(Math.round(num)) //   =
// console.log(Math.abs(num))  // modul
// console.log(Math.min(1,2,3,435464,76,7,65))
// console.log(Math.pow( 169 , 1/3 )) // 32 // 13
// console.log(Math.sqrt(25))
// console.log(Math.trunc(num)) // butun
// console.log(Number(num.toFixed(3))) // qisimgacha olish
// console.log(Math.ceil( Math.random()*100 )) // random number
//? 6. type conversions

// let str = "321";
// console.log(str); // => bu string qiymat
// ! buni number qiymatga o'tkazish
let str1 = "321";
// !console.log(str1)
