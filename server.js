var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 7070;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/burgers_controller.js")(app);

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});