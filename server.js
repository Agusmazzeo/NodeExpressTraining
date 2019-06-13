// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

app.get("/api/timestamp/:date_string?",(req,res)=>{
  const dateStr = req.params.date_string;
  let data2Send ={
  }
  if(date.length){
    let date = new Date(dateStr);
    if(date != "Invalid Date"){
      data2Send.unix=date.now();
      data2Send.utc=date.utc();
    }else{
      data2Send.error="Invalid Date";
    }
  }else {
    data2Send.unix=new Date().now();
    data2Send.utc=data2Send.unix.utc();
  }

  res.send(JSON.stringify(data2Send));
})