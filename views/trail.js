// const { faker } = require("@faker-js/faker");


const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express')
app = express()

const conn  = mysql.createConnection({
host:'localhost',
user:'root',
password: "",
database:"delta"


})

conn.connect((err)=>{
if (err) throw err;
console.log("connected")});


let getRandomUser = () =>{
  return [
  
  faker.string.uuid(),
  faker.internet.userName(),
  faker.internet.email(),
  faker.internet.password(),

  ];

 
}

let data =  [];
for (let index = 0; index <=100; index++) {
 data.push(getRandomUser());
  
}
// **************************************************************
q = "INSERT INTO user (id,username,email,password) VALUES ?"

//to insert multiple data in  one query we use array of arrays
// let user =[
//     [124,"Kunjesh_1234","Kunjesh@1234","abcd"],
//     [125,"Kunjesh_1235","Kunjesh@1235","abce"]
//   ]

// try {
//   conn.query(q,[data],(err,result)=>{
//     if(err){throw err;}
//     console.log(result);
//     console.log(result.length);
//   })
// } catch (error) {
//   console.log(error);
// }
// conn.end()
// ****************************************************************



app.get('/',(req,res)=>{
  res.send(`Welcome to our page`)
})

app.listen('8080',(req,res)=>{
  console.log(`listening on 8080`);
})