const express = require('express');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res) => {
    res.send('Hello From Home Page');
});

app.get('/about', (req,res) => {
    res.send('Learn more about us here!');
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID received: ${userId}`);
});

app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Search query received: ${query}`);
});

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Data received: ${JSON.stringify(data)}`);
});

app.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000`);
});
 