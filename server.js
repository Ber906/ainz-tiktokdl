const tiktok = require("./system");
const express = require('express');
const app = express();
const axios = require('axios');
const request = require('request');
const fs = require('fs');

app.use(express.static('public'));

app.get('/tiktokdl/api', async (req, res) => {
  if(!!req.query.url) {
    let data = await tiktok.getVideoInfo(req.query.url);
    res.type('json').send(JSON.stringify(data, null, 2) + '\n');
  } else {
    res.type('json').send(JSON.stringify({ message: "Please input url." }, null, 2) + '\n');
  }
})

const port = process.env.PORT || 3210;
app.listen(port, () => console.log(`App is listening on port ${port}`))