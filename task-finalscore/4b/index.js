const express = require("express");
const app = express();
const port = 2000;
const path = require("path");
const config = require("./config/config.json");
const { Sequelize, QueryTypes } = require("sequelize");
const sequelize = new Sequelize(config.development);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./pages"));

app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use(express.urlencoded({ extended: false }));

// route
app.get("/", home);
app.get("/collections", collections);
// app.post("/collection-add", addcollect);

app.get("/tasks", task);
// app.post("/tas-add", addtask);

// app.get("/login", login);
// app.get("/register", register);

const data = [];

// define
function home(req, res) {
    res.render("index");
  }

  async function collections(req, res) {
    const query = "SELECT * FROM collections_tb";
    // "SELECT * FROM projects" nama projects-nya diambil berdasarkan nama file yg di postgres
    const obj = await sequelize.query(query, { type: QueryTypes.SELECT });
    // console.log("data object : ", obj);
    // const isLogin = req.session.isLogin;
    // const user = req.session.user;
    res.render("collections", { data: obj});
  }


  async function task(req, res) {
    const query = "SELECT * FROM task_tb";
    const obj = await sequelize.query(query, { type: QueryTypes.SELECT}); 
    res.render("tasks", {data: obj});
  }



  app.listen(port, () => {
    console.log("server is running on PORT :", port);
  });