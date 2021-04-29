const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const fetch = require('node-fetch');

//Start up an instance of app
const app = express();
app.use(express.static('dist'));

//Install cors - allow browser and server communications
const cors = require('cors');
app.use(cors());

//middleware
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function (req, res) {
   res.sendFile('dist/index.html')
})

//API call
const apiKey = process.env.API_KEY;
//POST request
app.post("https://naturallanguageprocessing.netlify.app/apiPost", async function(req, res) {
    const urlCalled = req.body.formInput;
    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=auto&url=${urlCalled}`
    const getScore = await fetch(url, {
        method: 'POST'
    });
    const results = await getScore.json();  
    res.send(results);
    console.log(results)
})
//
//Designates what port the app will listen to for incoming requests
app.listen(5080, function () {
    console.log('App listening on port 5080!')
})