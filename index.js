const express = require('express');

const app = express()
const routes = require("./route")



app.use(express.json());


app.use("/spsden/v2/finserv/",routes)

// app.get('',(req,res)=>{
//     res.status(200).json({"hey":"gi"})
// })




const start = async () => {
    try {
      
      app.listen(3000,console.log("server started at port 3000"));
    } catch (error) {
      console.log(error);
    }
  };
  
  start();