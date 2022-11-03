const express = require('express');

const app = express()

app.get('/hello', (req,res)=>{
    let user = "Guest"
    if(req.query.user) {user = req.query.user}
    
    res.send('Hello World ' + user)
})

app.use('/files' ,express.static(__dirname + '/public'))   //to access files


app.listen(3000, ()=>{
    console.log("Started server at 3000");
})