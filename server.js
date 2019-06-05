const express = require ("express"),
    mongoose = require("mongoose"),
    logger = require("morgan");


const PORT = process.env.PORT||1234,
    routes = require("./Routes");

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/todolist", {useNewUrlParser: true});


app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

app.listen(PORT, (err)=>{
    if(err) console.log(err);
    console.log(`Now listening on PORT ${PORT}, go check it out, boii`);
})
