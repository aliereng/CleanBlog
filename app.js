const express = require('express');
var methodOverride = require('method-override')
const moment = require("moment");

const index = require('./router/index');
const connectDb = require('./helpers/databaseHelper');

connectDb();
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}, ));
app.use(express.json());
app.use((req, res, next)=>{
  res.locals.moment = moment;
  next();
});
app.use(methodOverride('_method', {
  methods: ['POST', 'GET']
}));


app.use(index);

app.listen(port, () => {
  console.log(`server started on ${port} `);
});
