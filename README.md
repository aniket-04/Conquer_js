# JS Topics 

## 1. Hoisting

In JavaScript, code is executed in two phases: the `Compilation phase` and the `Execution phase`.

During the compilation phase, the JavaScript engine parses the code and creates a global execution context, which consists of the global object (`window` in a browser, or `global` in Node.js) and a variable environment. 

The variable environment contains all the variables, functions, and function parameters declared in the global scope, and assigns them a value of `undefined`. This process is called `Hoisting`.

For Example: 
```
console.log(x);

var x = 10;
```
During the compilation phase, the JavaScript engine creates a variable x in the variable environment and assigns it a value of undefined. This is known as hoisting. So, the above code is equivalent to:

```
var x;
console.log(x);

x = 10;
```

During the `Execution phase`, the JavaScript engine executes the code line by line.
When it encounters a variable, it looks for it in the current scope. 
If the variable is not found in the current scope, it looks for it in the outer scope. 
If the variable is not found in any scope, it throws a ReferenceError.

When it encounters a function, the JavaScript engine creates a new execution context for the function and pushes it onto the call stack. 
The new execution context has its own variable environment and a reference to the outer execution context. 
The JavaScript engine then executes the function line by line. 
When the function returns, the JavaScript engine pops the execution context off the call stack and continues with the execution of the previous execution context.

For example, consider the following code:

```
var x = 10;

function foo() {
  var y = 20;
  console.log(x + y);
}

foo();
```

During the compilation phase, the JavaScript engine creates a variable x in the variable environment and assigns it a value of undefined. 
It also creates a function foo in the variable environment.

During the execution phase, the JavaScript engine assigns 10 to x.
When it encounters foo(), it creates a new execution context for the function foo and pushes it onto the call stack.

The new execution context has its own variable environment and a reference to the outer execution context. 
The JavaScript engine then assigns 20 to y and logs 30 to the console. 
When the function returns, the JavaScript engine pops the execution context off the call stack and continues with the execution of the previous execution context.

In summary, the compilation phase and the execution phase are two distinct phases in the JavaScript runtime. 
During the `Compilation phase`, the JavaScript engine `parses the code` and creates a `global execution context`.
During the `Execution phase`, the JavaScript engine `executes the code` line by line, creates `new execution contexts` for functions, and manages the `call stack`.
