const express = require('express');
const path = require('path');

const api = require('./server/routes/api')

//.env
const port = 3000;

const app = express();
//tell express to use json body parser
app.use(express.json());

app.use(express.static(path.join(__dirname, 'dist')))

//locahost:3000/api
app.use('/api', api);

//localhost:3000
app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.listen(port, function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("Server running @3000")
    }
})