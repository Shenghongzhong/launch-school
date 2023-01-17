/* LS JS Path
Date: 17 Jan 2023

*/

// 1. Use node to run the foo.js file using node. What does it output?
// it outputted bar after you run `node foo.js`

// 2. Copy and paste the code from foo.js into the node REPL. What does it output?
// it outputted 'bar' rather than bar without the quotation mark

// 3. Copy and paste the code from foo.js into the Chrome console REPL. What does it output?
// it is the same output as when you input code from foo.js 

/* 
 The main takeaway is that you can have many ways to run code and output could vary. 
 In the exercise, we can see variation. In Chrome REPL, you only see the final output,
 whereas you will see output from each line of code in node REPL in your terminal
*/

// 5. Identify the Constructors for each of the following methods and classify each method 
// as either a "Static" or a "Prototype" method:

// - substring
// - create
// - fromCharCode
// - slice
// - toString

// -------------- THOUGHTS ------------
/* I was thinking about what constructors are; In python, constructors are very different things. 
I think constructors are objects and methods are functions. 
I don't know about "Static" or "Prototype" methods, but now I do know these two methods associated with Constructors

- Constructor refers to the general concept; Like you said cutlery(Constructor), chopstick (String); 
Notes:
    "Constructor as factories that create values of a particular type" , in Python, it's called Class
    "A constructor represents a blueprint for a data type with the same name"
    "The String constructor is a factory that creates values of type string"
- Property Name refers to the general concept; like you said wooden, silver, gold for chopstick ( .prototype, length)
- Method refers to the general conceptl like you said you can hold chopstick, you can pick up food with chopstick
Notes:
    "In JavaScript, methods are functions that need a value that you can use to call the function"
    "Instance methods & static methods"
    "Instance methods -> Constructor.prototype.methodName(); e.g. String.prototype.chartAt()"
    "Static methods -> Constructor.methodName(); e.g. String.fromCharCode()"
*/

// ------------- Solution -------------
// - substring
//--> ❌substring is constructor
//{ Constructor: String, Method Type: it's an instance method ( Prototype Method)}
//--> it returns the part of the string from the start in dex up to the one before the end index
// - create
//--> ❌ an instance method
//--> it's a static method to create a new object
// //{ Constructor: Object, Method Type: it's a Static method
// - fromCharCode
//--> a static method
// //{ Constructor: String, Method Type: it's a static method ( Prototype Method)}
// - slice
//--> a static method
//{ Constructor: Array, String, Method Type: it's an instance method ( Prototype Method)}
// - toString
//--> a static method
//{ Constructor: String, Object, Array, Number; Method Type: it's an instance method ( Prototype Method)}



// 6. Which of the following names satisfy the style guidelines for VARIABLE names? 
// For the purposes of this question, constants are not variables.

/*
Name
- index
- CatName
- snake_case
- lazyDog
- quick_Fox
- 1stCharacter
- operand2
- BIG_NUMBER
*/

/* -- My Solution --
Name
- index
-> ✅ variable name
- CatName
-> this should be for only constuctor and this isn't constructor, clearly
-> PascalCase with the first captailized character
- snake_case
-> I can't remember
- lazyDog
-> Acceptable - Camelcase - variable name
- quick_Fox
-> no, the "F" should be in lower case
- 1stCharacter
-> not acceptable, the number should be never at the beginning 
- operand2
-> acceptable this is okay
- BIG_NUMBER
-> ❌ not acceptable; this is a variable with a constant value
*/

// 7. Which of the following names satisfy the style guidelines for function names?
// acceptable names are index, lazyDog, operand2, CatName
// function names, variable names are generally following the same style guideline
// CatName can be used in constructor functions

// 8. Which of the following names satisfy the style guidelines for constants used to represent magic numbers?
// I think it's BIG_NUMBER

//9. Which of the following names don't satisfy the style guidelines for naming variables, functions, or constants?
// snake_case, quick_Fox, 1stCharacter
// "underscores are permitted in constant names, but these aren't constant names since they use lowercase letters"
// "1stCharacter isn't valid at all: names may not begin with a digit."

