
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var port = 8000;
var server = app.listen(port, function() {
  console.log("listening on port 8000");

})

const fileRoutes = require('./server/config/file-upload')
const mongoConfig = {
  useUnifiedTopology: true,
  useNewUrlParser: true, 
  useCreateIndex: true
}
mongoose.connect("mongodb+srv://josh:Evilevilevil666@cluster0.shcz3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Mongo DB Connected..."))
    .catch(err => console.log(err));

app.use('/api/v1/',fileRoutes);

// app.use(express.urlencoded({limit: '50mb', extended: true}));

// app.use(express.urlencoded({extended: true}));

app.use(bodyParser.json({extended: true}));

// bodyParser = {
//   json: {limit: '50mb', extended: true},
//   urlencoded: {limit: '50mb', extended: true}
// };
// mongoose.Promise = global.Promise;


app.use(express.static( __dirname + "/public/dist/public" ));

// require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});





