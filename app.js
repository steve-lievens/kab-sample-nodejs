const app = require('express')()

app.get('/', (req, res) => {
  var message = "";
  message = "Hello from the Appsody Nodejs demo !!!!!!!! Time to deploy it with Tekton !!!! Strike Four !!";
  
  res.send(message);
});
 
module.exports.app = app;
