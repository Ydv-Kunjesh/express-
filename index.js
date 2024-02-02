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



// **************************************************************


// conn.end()
// ****************************************************************



app.get('/',(req,res)=>{
    try {
      q = "select count(*) from user"
  conn.query(q,(err,result)=>{
    if(err)throw err;
    // console.log(result[0]["count(*)"]);
    res.send("Sucess")
  })
} catch (error) {
  console.log(error);
  res.send(`Some Error in Code `)
}
})

// Show Route
app.get("/user",(req,res) =>{
  let q = `SELECT * from user`
  try {
    conn.query(q,(err,results)=>{
      if(err)throw err;
    
      res.render("showuser.ejs",{ results })
    })
  } catch (error) {
    console.log(error);
    res.send(`Some Error in Code `)
  }

})

// edit Route
app.get("/user/:id/edit",(req,res)=>{
  let { id } = req.params;
  //  console.log(id);
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    conn.query(q,(err,result)=>{
      if (err) throw err;
      let resq = result;
      console.log(resq);
      res.render('edit.ejs')

    })
  } catch (err) {
    console.log(err);
    res.send(`error in db`)
  }
})

app.listen('8080',(req,res)=>{
  console.log(`listening on 8080`);
})