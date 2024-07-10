const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1 style="color: orange">Main!</h1>')
})

app.get('/home', (req, res) => {
    res.send('<h1 style="color: red">New Home 2!</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})