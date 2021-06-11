const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/postRoutes')
const port = process.env.PORT || 80;
const url =
  'mongodb+srv://dbUser:assassin22@cluster0.v9jcc.mongodb.net/expressserver06?retryWrites=true&w=majority';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  })
  .catch((err) => console.log(err.reason));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

