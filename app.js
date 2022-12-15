const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res, next) => {
    res.status(200).sendFile(__dirname + '/views/index.html')
})

app.get('/about', (req, res, next) => {
    res.status(200).sendFile(__dirname + '/views/about.html')
})

app.get('/works', (req, res, next) => {
    res.status(200).sendFile(__dirname + '/views/works.html')
})

app.get('/contact', (req, res, next) => {
    res.status(200).sendFile(__dirname + '/views/contact.html')
})

app.get('/api',(req,res) => {
    const musicians = [
        {name:'Jimmy', surname: 'Hendrix', age: 27},
        {name:'Tommy', surname: 'Emmanuelle', age: 58}
    ]
    res.json(musicians);
})

app.listen(3002, () => {console.log('app and running on 3000 Sir!')});
 //script dev not found
 //