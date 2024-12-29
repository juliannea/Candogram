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

/*
const fs = require('fs');
fs.readFile('./docs/blog.txt', (error, data) => {  // Fixed typo in the file path
  if (error) {
    console.log(error);
  } else {
    console.log(data.toString());
  }
});

console.log('this is the last line')
*/


/*
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  let path = './public/'

  switch(req.url){
    case '/':
      path += 'index.html'
      break
    case '/about':
      path += 'about.html'
  }

  fs.readFile(path, (error, data) => {
    if (error) {
      console.error(error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.write('Internal Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
    }
    res.end();
  });
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
*/

const express = require('express');
const path = require('path');
const app = express();

// Middleware to serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page (index.html)
app.get('/', (req, res) => {
  console.log('Serving index.html');
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for the about page (about.html)
app.get('/about', (req, res) => {
  console.log('Serving about.html'); // Log to confirm if this route is hit
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Wildcard route for handling undefined routes (404 page)
app.get('*', (req, res) => {
  console.log('Serving 404.html');
  res.sendFile(path.join(__dirname, 'public', '404.html'));
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
