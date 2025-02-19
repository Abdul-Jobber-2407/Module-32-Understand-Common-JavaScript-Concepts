print5()
console.log(print10)
print10()
for (let i = 0; i<5 ; i++){
    console.log(i);
}
// console.log( 'Outside',i);

function print5(){
    console.log('inside print5', 5);
}

var print10 = function(){
    console.log('inside print10',10);
}


/**
 * In JavaScript, **scope** refers to the accessibility and visibility of variables, functions, and objects in different parts of the code. It determines where variables can be accessed or modified.

### **Types of Scope in JavaScript:**

1. **Global Scope**  
   - A variable declared outside any function or block belongs to the global scope.
   - It can be accessed from anywhere in the script.

   ```js
   let globalVar = "I am global";

   function testFunction() {
       console.log(globalVar); // Accessible
   }

   console.log(globalVar); // Accessible
   ```

2. **Local (Function) Scope**  
   - Variables declared inside a function are **local** to that function.
   - They cannot be accessed outside the function.

   ```js
   function myFunction() {
       let localVar = "I am local";
       console.log(localVar); // Accessible inside the function
   }

   myFunction();
   console.log(localVar); // ❌ Error: localVar is not defined
   ```

3. **Block Scope (ES6: `let` and `const`)**  
   - Introduced in ES6, `let` and `const` variables are limited to the block `{}` in which they are defined.
   - `var` does **not** have block scope.

   ```js
   if (true) {
       let blockVar = "Inside block";
       console.log(blockVar); // Accessible
   }

   console.log(blockVar); // ❌ Error: blockVar is not defined
   ```

4. **Lexical Scope (Closures)**  
   - Inner functions can access variables from their outer functions (parent scopes), but not vice versa.

   ```js
   function outerFunction() {
       let outerVar = "Outer";

       function innerFunction() {
           console.log(outerVar); // Accessible
       }

       innerFunction();
   }

   outerFunction();
   ```

5. **Module Scope (ES6 Modules)**  
   - Variables declared in an ES6 module are scoped to that module by default.
   - They are not accessible globally unless explicitly exported.

   ```js
   // file: module.js
   export let moduleVar = "I am module scoped";
   ```

   ```js
   // file: main.js
   import { moduleVar } from './module.js';
   console.log(moduleVar); // Accessible because it was imported
   ```

### **Key Takeaways:**
- **Global scope**: Accessible anywhere.
- **Function scope**: Variables inside functions are not accessible outside.
- **Block scope**: `let` and `const` respect block `{}` scope, but `var` does not.
- **Lexical scope**: Inner functions inherit outer variables.
- **Module scope**: Variables in modules are private unless exported.

Would you like any specific examples or explanations? 😊
 */