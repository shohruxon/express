const express = require('express')
const app = express()
const port = 3000

const animals = ['wolf', 'tigar', 'lion']
app.get('/', (req, res) => {
    res.write('bosh sahifa');
    res.end();
})
app.get('/api/animals', (req, res) => {
    res.send(animals);


})
app.post('')

app.listen(port, () => {
    console.log(`Port listening ${port}`);
})
