const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors')
const cookieParser=require('cookie-parser')
const bcrypt=require('bcrypt')
const path = require('path');

require('dotenv').config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use(cookieParser())
 
app.use(express.static(path.join(__dirname,'/build')));


const mongouri = process.env.DB_URL;


// Database connection
mongoose
  .connect(mongouri)
  .then(() => {
    console.log("Database is connected successfully");
  })
  .catch(() => {
    console.error("Error in connecting to the database");
  });



const item = require('./routes/inventory');
const customer=require('./routes/sales')
const purchase=require('./routes/purchase')
const user=require('./routes/user')

app.use('/', item);
app.use('/', customer)
app.use('/', purchase)
app.use('/', user)

app.get('/*', function(req, res) {res.sendFile(path.join(__dirname,'/build/index.html')); });


app.listen(3001, () => {
  console.log("Server is listening on port 3001");
});
