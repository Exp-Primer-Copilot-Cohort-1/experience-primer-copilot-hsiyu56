// Create web server
var express = require('express');
var app = express();

// Create a GET request handler
app.get('/comments', function(req, res) {
  res.send('This is a GET request');
});

// Create a POST request handler
app.post('/comments', function(req, res) {
  res.send('This is a POST request');
});

// Start the server
app.listen(3000, function() {
  console.log('Server is running on port 3000');
});
```
- Run the server
```
$ node comments.js
```
- Open your browser and go to `http://localhost:3000/comments` to see the GET request response
- Open your browser and go to `http://localhost:3000/comments` with `POST` method to see the POST request response

## 4. Static Files
- Create a folder `public` and put some files in it
```
$ mkdir public
$ cd public
$ touch index.html
$ echo "Hello World" > index.html
$ cd ..
```
- Create a new file `static.js`
```javascript
// Path: static.js
// Create web server
var express = require('express');
var app = express();

// Serve static files from the public directory
app.use(express.static('public'));

// Start the server
app.listen(3000, function() {
  console.log('Server is running on port 3000');
});
```
- Run the server
```
$ node static.js
```
- Open your browser and go to `http://localhost:3000/` to see the HTML file

## 5. Middleware
- Create a new file `middleware.js`
```javascript
// Path: middleware.js
// Create web server
var express = require('express');
var app = express();

// Middleware
app.use(function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

// Route handler
app.get('/user/:id', function(req, res, next) {
  console.log('Request Type:', req.method);
  next();
}, function(req, res, next) {
  res.send('USER');
});

// Start the server
app.listen(3000, function() {
  console.log('Server is running on port 3000