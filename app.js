const express = require('express');
const index = require('./router/index');
const moment = require("moment");
const connectDb = require('./helpers/databaseHelper');

connectDb();
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use((req, res, next)=>{
  res.locals.moment = moment;
  next();
});
app.use(index);

app.listen(port, () => {
  console.log(`server started on ${port} `);
});
