const express = require("express");
const app = express();
const port = 6000;
const path = require("path");
const { title } = require("process");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./pages"));

app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use(express.urlencoded({ extended: false }));

// route
app.get("/", home);
// app.get("/collections", collections);
// app.get("/collection-add", addcollect);
// app.get("/task", task);
// app.get("/tas-add", addtask);
// app.get("/login", login);
// app.get("/register", register);

const data = [];

// define
function home(req, res) {
    res.render("index");
  }



  app.listen(port, () => {
    console.log("server is running on PORT :", port);
  });