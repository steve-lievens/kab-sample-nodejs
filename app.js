var express = require("express");
const app = express();
var os = require("os");
var hostname = os.hostname();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + "/public"));

var REGION = process.env.REGION;

console.log("INFO: REGION", REGION);

// --------------------------------------------------------------------------
// REST API : retrieve info about the host
// --------------------------------------------------------------------------
app.get('/gethostinfo', function(req, res) {
  var hostobj = {
    "hostname": hostname,
    "region": REGION
  }
  console.log("Service gethostinfo returning " + JSON.stringify(hostobj));
  res.json(hostobj);
});

 
module.exports.app = app;
