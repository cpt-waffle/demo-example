const express = require('express');

const app = express();


app.get('/', (req,res) => {
    console.log('test route');
    
    res.send('<h1>hello world</h1>');
})


app.listen(8080, console.log('server is listening on port 8080'));


