require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require("cors");

const port = process.env.PORT || 8080;

const app = express();
app.use(cors());

app.use(express.static(__dirname + '/dist/angular-15-jwt-auth'));

app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'https://angular-login-jwt.herokuapp.com');
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  res.setHeader('x-access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjNkNjZhZjM1OGEyYzE1N2M0Y2I4MTQwIiwiZW1haWwiOiJyYXN5c2JveEBob3RtYWlsLmNvbSIsImlhdCI6MTY3NTAwMDk4MywiZXhwIjoxNjc1MDA4MTgzfQ.N4CUIYPb5rPgirVzG_-d_DDLOuUNmy05ciFWZMQYzo8');
  next();
});

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/angular-15-jwt-auth/index.html'));
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
