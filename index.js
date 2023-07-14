const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const SpotifyWebApi = require('spotify-web-api-node');

pp.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

