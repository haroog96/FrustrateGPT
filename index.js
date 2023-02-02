const express = require('express');
const mysql = require('mysql');
const port = 3000;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Packersvsvikings1!",
  database: "response"
});

con.connect((err)=>{
  if(err){
    throw err;
  }
  console.log("Connected...."); 
});

const app = express();

app.use(express.static("public"));

app.get("/search", (req, res) => {
  const searchValue= req.query.search;
  // Query the database
  con.query(
    "SELECT message FROM response.gptresponse WHERE path = 1 AND path_num = ?",
    [searchValue],    
    (error, results, fields) => {
      if (error) {
        console.error("Error: " + error);
        res.status(500).send("Error: " + error);
        return;
      }
      if (results.length > 0) {
        res.send(JSON.parse(JSON.stringify(results))[0].message);
      } else {
        res.send("No results found");
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});