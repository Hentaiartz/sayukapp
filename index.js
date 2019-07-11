const express = require('express');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('../database/sayuka.db');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

function get_user(discordid) {
  db.get("SELECT * FROM usuarios WHERE discordid = ?", [396216659993559040], (err, res) => {
    if (res != undefined) {
      return true
    }
  })
}

app.post('/change', function(request, response) {
    response.sendStatus(200);
    get_user(396216659993559040)

  });

const listener = app.listen(3030, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
