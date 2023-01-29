import cors from "cors"
const express = require('express');
const path = require('path');

const app = express();
app.use(cors());

app.use(express.static(__dirname + '/dist/angular-15-jwt-auth'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/angular-15-jwt-auth/index.html'));
});

app.listen(process.env.PORT || 8080);
