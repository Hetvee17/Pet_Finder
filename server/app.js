const express = require('express')
const app=express();

//middleware
const middleware = (req, res, next) => {
    console.log("hello from middleware");
    next();
}
app.get('/', (req, res) => {
    res.send('Hello from server');
})

app.get('/about',middleware, (req, res) => {
    res.send('Hello from server');
})

console.log("test");

app.listen(3000, () => {
    console.log("running");
})