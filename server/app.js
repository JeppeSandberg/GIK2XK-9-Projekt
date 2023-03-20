var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/cartRows", require("./routes/cartRowsRoute"));
app.use("/carts", require("./routes/cartsRoute"));
app.use("/productImages", require("./routes/productImagesRoute"));
app.use("/products", require("./routes/productsRoute"));
app.use("/ratings", require("./routes/ratingsRoute"));
app.use("/users", require("./routes/usersRoute"));






module.exports = app;
