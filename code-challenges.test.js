// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
describe("uppercaseWords", () => {
  it("takes in an array objects and returns an array with a sentence about each person with their name capitalized", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
  expect(uppercaseWords(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// FAIL  ./code-challenges.test.js
// combObj
//   ✕ takes in an array objects and returns an array with a sentence about each person with their name capitalized

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]


// b) Create the function that makes the test pass.

//----------------- PSEUDO CODE -------------------
// create an function with the name uppercaseWords give it a parameter of (arrOfPeople)
// rest of the pseudo code is within the function so it would make sense. 

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]  

const uppercaseWords = (arrOfPeople) => {
  //3 objects, enter each object
  //2 properties, access [0].name, now have string
  //capitalize and concatenation with first letter and rest of letter
  //concatenation with name property, (after manip) and occ. property
  //now completed string, push into arr
  //return arr outside of the for loop
  //for loop completes the work and pushes results into the array
  const arr = []
  for(let i = 0; i < arrOfPeople.length; i++){
    //for each object, extract the name and occupation
  let name = arrOfPeople[i].name
  let occupation = arrOfPeople[i].occupation
    //split name into two words
  name = name.split(' ')
  let firstName = name[0]
  let toCapital = firstName[0].toUpperCase()
  firstName = toCapital + firstName.substring(1)
  let lastName = name[1]
  toCapital = lastName[0].toUpperCase()
  lastName = toCapital + lastName.substring(1)
    //string = ${ add all words together}
    //new arr []
    //arr.push(string)
  let str = `${firstName} ${lastName} is ${occupation}.`
  arr.push(str)
  
    
  }
  
  return arr
}  

// PASS  ./code-challenges.test.js
//   uppercaseWords
//     ✓ takes in an array objects and returns an array with a sentence about each person with their name capitalized (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total





// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("ifNum", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  
  
  
  
    expect(ifNum(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(ifNum(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// FAIL  ./code-challenges.test.js


//   ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)

// ReferenceError: ifNum is not defined

// b) Create the function that makes the test pass.

// ------------------------PSEUDO CODE-------------------
// create a function called ifNUM and give it a parameter of (arr) 
// use.map to check each element of the array 
// use .filter return new array elements that pass typeof method test for numbers
// set up another variable numFil with an element parameter to filter and map over the array
// finally inside numFIl use the operator % to divide by 3 and return the remainders

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]

const ifNum = (arr) => {
  let numFil = arr.filter(element => typeof element === 'number').map(
    number => number % 3
  )
    return numFil
}

// PASS  ./code-challenges.test.js
// ifNum
// ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
// Tests:       2 passed, 2 total


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
describe("ans", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum2 = [0, 5, 10]
  
  
  
  
    expect(ans(cubeAndSum1 )).toEqual(99)
    expect(ans(cubeAndSum2)).toEqual(1125)
  })
})

// FAIL  ./code-challenges.test.js

// ans
//   ✕ takes in an array of numbers and returns the sum of all the numbers cubed. (1 ms)

// ● ans › takes in an array of numbers and returns the sum of all the numbers cubed.

//   ReferenceError: ans is not defined



// b) Create the function that makes the test pass.

//------------------Pseudo Code---------------
// set up a function called ans give an (arr) parameter to traverse it
// setup initalValue to help later on with first and second values,(prev, curr), in the array
// use .reduce with two arguments of prev and curr 
// the cubed and sum of the array
// use an arrow function to cube and sum the arr to give expected outputs


const cubeAndSum1 = [2, 3, 4]
const cubeAndSum2 = [0, 5, 10]
const ans = (arr) => {
    let initialValue = 0
    return arr.reduce((prev, curr) => {
    return prev + (curr*curr*curr)
    }, initialValue)
}