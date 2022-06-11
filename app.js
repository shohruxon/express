const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const animals = ['wolf', 'tigar', 'lion']
app.get('/', (req, res) => {
    res.write('bosh sahifa');
    res.end();
})
app.get('/api/animals', (req, res) => {
    res.send(animals);

})


app.post('/add/animals', (req, res) => {
    animals.push(req.body)
    console.log(req.body);
    res.send(req.body);
})
app.put('/api/animals', (req, res) => {
    animals.push('dog')
    res.send('asdasd')
})
app.delete('/api/animals', (req, res) => {
    animals.pop('dog')
    res.send('ochirildi')

})


app.listen(port, () => {
    console.log(`Port listening ${port}`);
})
