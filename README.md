# How to use mongodb in Node.js with express and body-parser

## How to use mongodb in Node.js

https://www.readymadecode.com/how-to-use-mongodb-in-node-js/

https://github.com/coding-to-music/express-node-body-parser-mongoose

Mongodb is a NoSQL Database. The data stored in mongodb is in JSON-like Documents. The Collection in Mongodb is called a Table. In Mongodb we can create, update, delete or list the documents, projection, sort() and limit() methods, create a collection, drop collection, etc. For larger projects we can use operators, models or relationships in mongodb. In this tutorial we will learn how to use mongodb in Node.js.

## Advantages of MongoDB

- Document-oriented data model
- Code-native data access
- Flexible document schemas
- Uses internal memory for storing working sets
- Powerful querying and analytics
- Change-friendly design
- No complex joins
- MongoDB is schema less. It is a document database in which one collection holds different documents
- Easy horizontal scale-out
- Light Weight
- Extremely faster than RDBMS
- Big and complex data can be used
- Create a Node.js Project
- Create a new directory and initialize node with the command npm init. Use the below commands.

```java
mkdir express-node-body-parser-mongoose
cd express-node-body-parser-mongoose/
npm init -y
```

Now, we can run the node.js server using the command node index.js (index.js is a file which has our all logic or codes). But when we changes our code we needs to restart the server each time. So, we can solve this problem using the node package nodemon. It automatically restarts the server when something has been changed in the code. The below command installs nodemon to our project.(-g represents that package will install globally in our machine and can be use in any project in same machine)

```java
npm install -g nodemon
```

Now, in package.json file we just need to add the code given below. So, we can start our server using npm start command.

```java
"scripts": {
"start": "nodemon index.js",
"test": "echo \"Error: no test specified\" && exit 1"
},
```

It’s time to install Express JS. It is an open-source web framework for node JS to handle http requests. The below command installs express to our project.

```java
npm install express --save
```

Create a file index.js which will be our bootstrap or root server file. Now paste the code given below.

```java
var express = require('express');
var app = express();
app.get('/', function (req, res) {
res.send('Hello World!');
});
app.listen(8000, function () {
console.log('Listening to Port 8000');
});
```

Start nodemon

```java
nodemon
```

Output

````java
[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Listening to Port 8000
```java

When you start the server using the command npm start you will see Hello World!.

```java
http://localhost:8000/

Hello World!
```java

# Install and Connect Mongodb Database in Node.js

To use mongodb in our node.js project we should have MongoDB installed in our local machine or server(during deployment).

First of all, Install mongodb from MongoDB’s official website.

## Now install NoSQLBooster GUI tool of MongoDB. It’s like phpmyadmin for mysql.

After installing MongoDB, install mongoose which is an Object Data Modeling library for MongoDB and Node js. It manages relationships between data and provides schema validation. Use the command below to install mongoose.

```java
npm i mongoose
````

Now we will connect mongodb to node.js with the help of mongoose. Paste the code given below in index.js file.

```java
var express = require('express');
var app = express();
const mongoose = require('mongoose');
//Routes
app.get('/', function (req, res) {
res.send('Hello World Again!');
});
//Database
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
mongoose.connection.once('open',function(){
console.log('Database connected Successfully');
}).on('error',function(err){
console.log('Error', err);
})
app.listen(8000, function () {
console.log('Listening to Port 8000');
});
```

```java
Listening to Port 8000
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
Listening to Port 8000
Database connected Successfully
```

## Create Models in MongoDB to manage tables or collections

Create a folder named models and inside the models folder create user.js file. Paste the code given below in user.js file.

```java
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
userName: {
type: String,
required: true,
},
userEmail: {
type: String,
required: true,
},
})
module.exports = mongoose.model('User',empSchema)
```

Now, we will post the JSON data to server using http request. So, to handle this in Express we will need Body-Parser. Install it with the bellow command.

```java
npm install body-parser
```

Create a route /add and handle the post request inside the callback function. To do this paste the code given below in index.js file.

```java
var express = require('express');
var app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('./models/user.js');

//Routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function (req, res) {
res.send('Hello World!');
});
app.post('/add', function(req,res) {
const user = new User({
userName: req.body.userName,
userEmail: req.body.userEmail,
});
user.save().then(val => {
res.json({ msg: "User Added Successfully", val: val })
})
})
//Database
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
mongoose.connection.once('open',function(){
console.log('Database connected Successfully');
}).on('error',function(err){
console.log('Error', err);
})
app.listen(8000, function () {
console.log('Listening to Port 8000');
});
```

Now send the post request to http://localhost:8000/add. If request success it will insert values to userSchema.

http://localhost:8000/add

Cannot GET /add

That’s it we have learned how to use mongodb in node.js.

## Recommendation

- How to validate form in ReactJS
- How to create charts in ReactJS

For more Mongodb Tutorials Click here, Node.js Tutorials Click here.

If you like this, share this.

Follow us on Facebook, Twitter, Tumblr, LinkedIn, YouTube.

ReadyMadeCode

Author: ReadyMadeCode

ReadyMadeCode.com is a website where you can find Free Online Tutorials - Website Development Tutorials, App Development Tutorials, Coding Tutorials,Website Designing and Development From popular programming languages or scripts or framework like php, laravel, html, css, javascript, nodejs, java, angularjs etc. Download Emails | E-Books.

View All Posts From ReadyMadeCode

Author Website : https://www.readymadecode.com
