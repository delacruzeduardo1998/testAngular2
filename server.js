const express = require('express');
const path = require('paths');
const app = express();
app.use(express.static(__dirname + '/dist/test-angular2'));
app-get('/*', function(req,res){
res.sendFile(path.join(__dirname + '/dist/test-angular2/index.html'));});
app.listen(process.env.PORT || 8080);
