var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
  
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port....', app.get('port'));
});
var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://mongouser:mongo501@ds149820.mlab.com:49820/mongomanila', function (err, db) {
  if (err) throw err

  db.collection('mongomanila').find().toArray(function (err, result) {
    if (err) throw err
     app.get('/d/', function (req, res) {
	   
     res.json(result[1]);
  
})
    //console.log(result)
	 
  })
})


