var express = require('express');
var app = express();

app.get('/', function(req, res){
  var message = process.env.POWERED_BY || "Deis";
  // Simulate a "random" error that terminate exit(1) the application.
  if(Math.random() < .5){
    process.exit(1);
  }

  res.send('Powered by ' + message);
});

/* Use PORT environment variable if it exists */
var port = process.env.PORT || 5000;
server = app.listen(port);

console.log('Server listening on port %d in %s mode', server.address().port, app.settings.env);
