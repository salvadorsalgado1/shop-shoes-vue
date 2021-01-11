const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.static(__dirname + '/dist'));
const port = process.env.PORT || 5000;


app.listen(port, ()=>{
    console.log(`Currently running on port ${port}`)
})