# JS Topics 

## 1. Hoisting

In JavaScript, code is executed in two phases: the compilation phase and the execution phase.

During the compilation phase, the JavaScript engine parses the code and creates a global execution context, which consists of the global object (`window` in a browser, or `global` in Node.js) and a variable environment. 

The variable environment contains all the variables, functions, and function parameters declared in the global scope, and assigns them a value of `undefined`. This process is called `Hoisting`.
