const express = require("express");
const app = express();
const port = 5000;



app.get('/', (req, res) => res.send('Hello World'));

app.use(express.static('public'));


app.listen(port, () => {
    console.log("hello  world");
});