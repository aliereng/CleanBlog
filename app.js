const express = require('express');
const index = require('./router/index');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(index);

app.listen(port, () => {
  console.log(`server started on ${port} `);
});
