const express = require('express');
const app=express();
const path = require('path');



app.use(
    (addActiveTime = (req, res, next) => {
      let requestAt = new Date().getDay();
  
      if (requestAt <= 1 || requestAt >= 5) {
        res.send("You may visit the web site only  From Monday to Friday");
      } else {
        next();
      }
    })
  );
  app.use(
    (addActiveTime = (req, res, next) => {
      let requestAt = new Date().getHours();
  
      if (requestAt <= 9 || requestAt >= 17) {
        res.send("You may visit the web site only from 9 to 17");
      } else {
        next();
      }
    })
  );




app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req, res) {
    res.redirect('home.html');
});
 

const PORT=process.env.PORT||5000
app.listen(PORT,(err)=>err?console.error(err):console.log("server is running on port "+PORT)) 