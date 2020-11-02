var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var app = express();
// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// using app.use to serve up static CSS files in public/assets/ folder when /public link is called in ejs files
// app.use("/route", express.static("foldername"));
app.use('/public', express.static('public'));

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());


app.use("/", require("./routes"));

app.listen(app.get("port"), function(){
    console.log("Serwer zostal uruchomiony na porcie: " + app.get("port"));
});