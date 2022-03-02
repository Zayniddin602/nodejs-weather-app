const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios')
require('dotenv').config();
const {BASE_URL, API_KEY} = process.env;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send('Basic Weather App')
})
app.get('/:city', async (req, res) => {
    const { city } = req.params;
    await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`)
    .then((response) => res.send(response.data))
    .catch((error) => res.send(error));
})

app.listen(8080, ()=> console.log('listening...'))