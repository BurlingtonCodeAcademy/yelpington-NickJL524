const { response } = require('express')
const express = require('express')
const path = require('path')

const app = express()
//listening on port 5000
const port = process.env.PORT || 5000

app.use(express.static('./client/public'))

app.get('/', (req, res) => {
    res.send('Home Page')
})
//set up route to server of all restaurant titles as JSON
app.get("/restaurants", (req, res) => {
    res.sendFile(path.resolve('./api/restaurants.json'))
})
//set up route to server of individual restaurant id
app.get("/api/:name", (req, res) => {
    res.sendFile(path.resolve(`./api/${req.params.name}.json`))
})
//view all API endpoint
app.get('/api.json', (req, res) => {
    let api = allApi();
    let data = JSON.stringify(api);
    response.type('text/json');
    response.send(data);
})



//catch all
app.get('*', (req, res) => {
    res.sendFile(path.resolve('./client/public/index.html'))
})
//listening on port port
app.listen(port, () => {
    console.log('listening on port', port)
})