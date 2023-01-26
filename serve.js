var express = require('express');
var app = express();
const port = 8080




app.get('/', function(req, res){
    res.sendFile(__dirname + '/Login.html')
    })


    
    app.post('/logar', function(req, res){
      res.sendFile(__dirname + '/crud2.html')
      })
    

app.listen(port, () => {
    console.log(`Esta aplicação está escutando a
    porta ${port}`)
    }) 

