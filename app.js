const express = require("express");

const app = express();
require('dotenv').config()   
console.log(`Your name is ${process.env.MY_NAME}`);
console.log(`My city is ${process.env.MY_CITY}`);
console.log(`Your language is ${process.env.MY_LANGUAGE}`);

app.get("/", (req,res) => {
    res.send(`I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY} and i love ${process.env.MY_LANGUAGE}`)
})








const port = 5000;

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });


