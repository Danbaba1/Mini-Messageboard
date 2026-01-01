const express = require('express');
const app = express();
const router = require('./routes/index.route');

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }))

app.use('/', router);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});