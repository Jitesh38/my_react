// const express = require('express')
import express from 'express'


const app = express()


app.get('/', (req, res) => {
    res.send('Server is ready')
});

//get a list of five jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'this is joke',
            joke: 'this is joke'
        },
        {
            id: 2,
            title: 'second joke',
            joke: 'this is joke'
        },
        {
            id: 3,
            title: 'third joke',
            joke: 'this is joke'
        },
        {
            id: 4,
            title: 'fourth joke',
            joke: 'this is joke'
        },
        {
            id: 5,
            title: 'fifth joke',
            joke: 'this is joke'
        },
    ]
    res.send(jokes)

})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`serve a http://localhost:${port}`);
})
