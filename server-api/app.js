const express = require('express');

const app = express();

console.log('+++++++++++++');
app.get('/', (req, res) => {
  res.send('ok');
});

app.listen(5000, () => {
  console.log('server is listening on port 5000!!!');
});
