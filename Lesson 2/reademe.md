<!-- !Lesson 2 -->

1. Variables (o'zgaruvchilar) var , let , const , (difference)
   <!-- !DOC -->
   <!--The variables  `var` ,  `let` , and  `const`  are used in JavaScript to declare variables.

- `var` is the keyword used to declare a variable in older versions of JavaScript. It has function scope or global scope, meaning it is accessible throughout the entire function or globally if declared outside any function. However, `var` does not have block scope, so it can cause some unexpected behavior.
- `let` is the keyword introduced in ES6 (ECMAScript 2015) to declare variables with block scope. It is similar to `var` , but it is limited to the block in which it is defined. This means that variables declared with `let` are not accessible outside of the block they are declared in.
- `const` is also introduced in ES6 and is used to declare variables that cannot be reassigned. It has block scope like `let` , but once a value is assigned to a `const` variable, it cannot be changed. However, it's important to note that if the variable is an object or an array, the properties or elements of the object or array can still be modified.
  In summary, the main difference between `var` , `let` , and `const` is the scope and reassignability. `var` has function scope, `let` has block scope and can be reassigned, while `const` has block scope and cannot be reassigned. -->

2. Data types

- String
- Number
- Boolean
- Undefined
- null
- BigInt(9007199254740991)
- Symbol('Hello JavaScript')
  <!-- ! DOC -->
  <!-- Certainly! Here are some commonly used data types in JavaScript:
- **String**: Represents a sequence of characters, such as "Hello, World!" or 'JavaScript'.
- **Number**: Represents numeric values, including integers and floating-point numbers. For example, 42 or 3.14.
- **Boolean**: Represents either `true` or `false` , used for logical operations.
- **Undefined**: Represents a variable that has been declared but has not been assigned a value.
- **null**: Represents the intentional absence of any object value.
- **BigInt**: Represents integers with arbitrary precision. It is used when numbers exceed the maximum value that can be represented by the `Number` type. For example, `9007199254740991n` .
- **Symbol**: Represents a unique identifier that is immutable and can be used as an object property. It is often used for creating private object members or unique keys in JavaScript.
  These data types allow you to store and manipulate different kinds of values in JavaScript. -->

2. "use strict"
   <!-- !DOC -->
    <!-- The statement `"use strict" ` is not a specific language, but rather a directive used in JavaScript to enable strict mode. When ` "use strict"` is included at the beginning of a script or a function, it enforces stricter rules and better error-checking in the code. It helps to avoid common pitfalls and encourages writing more reliable and maintainable code. Strict mode disables certain features and behaviors that are considered error-prone or deprecated in JavaScript. It is generally recommended to use strict mode in all JavaScript code to ensure better code quality. -->
3. appropriation operators (o'zlashtirish operatorlari)
   <!-- !DOC -->
   <!-- The assignment operators in JavaScript are used to assign values to variables. Here are some commonly used assignment operators:

- `=` : Assigns the value on the right to the variable on the left. For example, `x = 5` assigns the value 5 to the variable `x` .
- `+=` : Adds the value on the right to the variable on the left and assigns the result to the variable on the left. For example, `x += 3` is equivalent to `x = x + 3` .
- `-=` : Subtracts the value on the right from the variable on the left and assigns the result to the variable on the left. For example, `x -= 2` is equivalent to `x = x - 2` .
- `*=` : Multiplies the value on the right with the variable on the left and assigns the result to the variable on the left. For example, `x *= 4` is equivalent to `x = x * 4` .
- `/=` : Divides the variable on the left by the value on the right and assigns the result to the variable on the left. For example, `x /= 2` is equivalent to `x = x / 2` .
- `%=` : Divides the variable on the left by the value on the right and assigns the remainder to the variable on the left. For example, `x %= 3` is equivalent to `x = x % 3` .
  These are just a few examples of assignment operators in JavaScript. They are used to perform operations and assign the result back to the variable. -->

4. comparison operators (taqqoslash operatorlari)
   <!-- !DOC -->
   <!-- Certainly! Comparison operators in JavaScript are used to compare values and return a Boolean result ( `true`  or  `false` ). Here are some commonly used comparison operators:

- `==` (equality): Checks if two values are equal, performing type coercion if necessary. For example, `5 == "5" ` would return `true`.
- `===` (strict equality): Checks if two values are equal without performing type coercion. For example, `5 === "5"` would return `false`.
- `!=` (inequality): Checks if two values are not equal, performing type coercion if necessary. For example, `5 != "5"` would return `false`.
- `!==` (strict inequality): Checks if two values are not equal without performing type coercion. For example, `5 !== "5"` would return `true`.
- `>` (greater than): Checks if the value on the left is greater than the value on the right. For example, `10 > 5` would return `true`.
- `<` (less than): Checks if the value on the left is less than the value on the right. For example, `5 < 10` would return `true`.
- `>=` (greater than or equal to): Checks if the value on the left is greater than or equal to the value on the right. For example, `10 >= 10` would return `true`.
- `<=` (less than or equal to): Checks if the value on the left is less than or equal to the value on the right. For example, `5 <= 10` would return ` true`.
  These comparison operators allow you to compare values and make decisions based on the comparison results in your JavaScript code. -->

5. Object Math
   <!-- !DOC -->
   <!-- The  `Math`  object in JavaScript is a built-in object that provides mathematical operations and constants. It does not have a specific default language as it is part of the JavaScript language itself. However, the methods and properties of the  `Math`  object are universally available in JavaScript and can be used in any language that supports JavaScript. The  `Math`  object includes functions for mathematical operations like rounding, trigonometry, logarithms, random number generation, and more. Some commonly used methods of the  `Math`  object include  `Math.round()` ,  `Math.floor()` ,  `Math.ceil()` ,  `Math.random()` ,  `Math.sin()` ,  `Math.cos()` , etc. These methods allow you to perform various mathematical calculations in your JavaScript code. -->
6. type conversions
      <!-- !DOC -->
      <!-- Type conversions in JavaScript refer to the process of converting a value from one data type to another. JavaScript provides several built-in functions and operators for type conversions. Here are some common type conversion methods:
    **String Conversion**: You can convert a value to a string using the `String()` function or by concatenating an empty string (`""`) with the value. For example:
      let num = 42;
      let str = String(num); // "42"
    **Number Conversion**: To convert a value to a number, you can use the `Number()` function or the `+` unary operator. For example:
      let str = "42";
      let num = Number(str); // 42
    **Boolean Conversion**: You can convert a value to a boolean using the `Boolean()` function or by using logical operators like `!!` (double negation). For example:
      let num = 42;
      let bool = Boolean(num); // true
    **Implicit Type Conversion**: JavaScript also performs implicit type conversions, also known as type coercion, in certain situations. For example, when you use the `+` operator with a string and a number, JavaScript will convert the number to a string and concatenate them:
       let str = "Hello";
       let num = 42;
       let result = str + num; // "Hello42"
       It's important to be aware of type conversions in JavaScript to ensure your code behaves as expected. -->
                             _don't waste your time_ 
<!-- ! Millati shani hammadan ustun ummat uchun qattiq harakat qilaman 
Alloh roziligi uchun juda qattiq harakat qilamam -->
<!-- Yaxshi yashash uchun RU yoki USE borish shartmas shukur qilishni bilsa bass -->