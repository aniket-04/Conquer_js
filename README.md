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


## 2. Execution Context

An execution context is a container that holds variables and functions as they're executed. 
There are three types of execution context in JavaScript: global, function, and eval. 
Each execution context has a `scope chain` and a `this` value.

It consists of two parts: the `lexical environment` and the `variable environment`.

The lexical environment is a specification term that refers to the environment in which the code is written. It includes all the variables and functions that are in scope at the point where the code is written, and it is determined by the lexical structure of the code.

The variable environment, on the other hand, is a specification term that refers to the environment in which the code is executed. It includes all the variables and functions that are in scope at the point where the code is executed, and it can be modified during the execution of the code.

When a piece of code is executed, it is executed within a specific execution context. The execution context provides a way for the JavaScript engine to keep track of the state of the code and to determine how the code should be executed. Each execution context has its own set of variables and functions that are in scope at the point where the code is executed.

JavaScript uses a `stack` to manage execution contexts. When a function is called, a new execution context is created and pushed onto the top of the stack. When the function returns, the execution context is popped off the stack, and the control is returned to the calling function.

In summary, an execution context is an abstract concept that describes the environment in which the code is executed. It includes the lexical environment and the variable environment, and it is managed using a stack. Understanding execution contexts is important for understanding how JavaScript code is executed and how variables and functions are scoped in JavaScript.

* Here's an example to understand execution context with a real-life scenario:

Imagine you are attending a lecture in a classroom. The classroom is the execution context where the lecture takes place. The classroom has a set of variables like the chairs, tables, whiteboard, projector, etc., that are required for the lecture to take place. These variables can be compared to the variables and objects that exist in the execution context of a code.

Now, the lecturer enters the classroom and starts the lecture. The lecturer can be compared to the code that is executed in the execution context. As the lecture progresses, the lecturer uses the variables in the classroom to explain the concepts. These variables can be compared to the variables and objects that are used by the code in the execution context.

Similarly, the lecture has its own set of rules and instructions, such as the syllabus, the topics to be covered, the time allotted for each topic, etc. These rules and instructions can be compared to the rules and instructions that are defined in the code and need to be executed in the execution context.

So, in this way, we can understand execution context as an environment where the code is executed, just like a classroom is an environment where a lecture takes place.

