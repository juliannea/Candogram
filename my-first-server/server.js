///function addNumbers(a,b){
  ///return a + b
///}

///const result = addNumbers(2,3)

///console.log("the result is", result)

//const addNumbers = (a, b) => {
  //console.log(`The result of ${a} + ${b} is ${a + b}`);
//}

//addNumbers(2, 3);

//const {people, ages} = require('./people')

//console.log(people)
//console.log(ages)


//const os = require('os')
//console.log(
 // 'my operating system', os.platform(),
  //'\n',
 // 'my home directory', os.homedir()
//)

const fs = require('fs');
fs.readFile('./docs/blog.txt', (error, data) => {  // Fixed typo in the file path
  if (error) {
    console.log(error);
  } else {
    console.log(data.toString());
  }
});

console.log('this is the last line')
