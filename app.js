const app = require('express')()

app.get('/', (req, res) => {
  var message = "";
  message = "Now for something completely different ...";
  
  res.send(message);
});
 
module.exports.app = app;
