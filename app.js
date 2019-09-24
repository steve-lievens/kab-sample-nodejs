const app = require('express')()

app.get('/', (req, res) => {
  var message = "";
  message = "Hello from the Appsody Nodejs demo !!!!!!!!";
  
  res.send(message);
});
 
module.exports.app = app;
