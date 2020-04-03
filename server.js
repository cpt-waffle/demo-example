const a = 'a';
const express = require('express');
const b = 'a';


const app = express();
app.get('/', (req,res) => {
    console.log('test route');


    res.send('<h1>hello world</h1>');
})
app.get('/', (req,res) => {
    console.log('test route');

    res.send('<h1>hello world</h1>');
})
app.get('/', (req,res) => {
    console.log('test route');

    res.send('<h1>hello world</h1>');
})
app.get('/', (req,res) => {
    console.log('test route');

    res.send('<h1>hello world</h1>');
})
app.get('/', (req,res) => {
    console.log('test route');

    res.send('<h1>hello world</h1>');
})
app.get('/', (req,res) => {
    console.log('test route');

    res.send('<h1>hello world</h1>');
})
app.get('/', (req,res) => {
    console.log('test route');

    res.send('<h1>hello world</h1>');
})
app.get('/', (req,res) => {
    console.log('test route');

    res.send('<h1>hello world</h1>');
})
app.get('/', (req,res) => {
    console.log('test route');

    res.send('<h1>hello world</h1>');
})
app.get('/', (req,res) => {
    console.log('test route');

    res.send('<h1>hello world</h1>');
})


app.get('/login', (req,res) => {
    console.log('test route');

    res.send('<h1>hello world</h1>');
})

app.get('/lists', (req, res) => {
    console.log('lists');
    res.send('<h2>Lists Page</h2>');
})


app.listen(8080, console.log('server is listening on port 8080'));


