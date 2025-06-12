require('dotenv').config()
const axios = require('axios')
const cors = require('cors')
const express = require('express')
const app = express()
app.use(cors())

const weathermapClient = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    params: {
        appid: process.env.API_WEATHERMAP,
        units: 'metric',
        lang: 'pt_br'
    }
})

app.get('/search', async (req, res) => {
    const query = req.query.query

    const result = await weathermapClient.get('forecast',{
        params: {q: query }
    })

    const previsao = result.data.list.map(previsao => ({
        temperatura_minima: previsao.main.temp_min,
        temperatura_maxima: previsao.main.temp_max,
        umidade: previsao.main.humidity,
        icone: previsao.weather[0].icon,
        descricao: previsao.weather[0].description
        }))
        res.json(previsao.data)
})

const port = 3000

app.listen(port, () => console.log (`Back End OK! Porta ${port}.`))