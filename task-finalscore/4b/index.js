const express = require("express");
const app = express();
const port = 2000;
const path = require("path");
const config = require("./config/config.json");
const { Sequelize, QueryTypes, INTEGER } = require("sequelize");
const sequelize = new Sequelize(config.development);
const User = require("./models").users_tb;
const bcrypt = require("bcrypt");
const session = require("express-session");
const flash = require("express-flash");


app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./pages"));

app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    name: "mysession",
    secret: "topsecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24, //1hari
    },
  })
);

app.use(flash());

// route
app.get("/", home);

app.get("/collections", collections);
app.post("/collections", collectIST);
app.get("/collection-add", addcollection);
app.post("/collection-del/:id", delcollection);
app.get("/collection-ed/:id", edcollectionBt);
app.post("/collection-ed", edcollection);

app.get("/tasks", task);
app.post("/tasks", taskIST);
app.get("/task-add", addtask);
app.post("/task-del/:id", deltask);
app.get("/task-ed/:id", edtaskBt);
app.post("/task-ed", edtask);

app.get("/login", login);
app.post("/login", loginEnter);
app.post("/logout", logout);

app.get("/register", register);
app.post("/register", registerEnter);


// define

function login(req, res){
  res.render("login");
}

async function loginEnter(req, res) {
  const { email, password } = req.body;
  console.log("email : ", email);
  console.log("password : ", password);

  const user = await User.findOne({
    where: { email },
  });
  if (!user) {
    req.flash("danger", "Email / Password account is not found!");
    return res.redirect("/login");
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    req.flash("danger", "Email / Password account is not found!");
    return res.redirect("/");
  }

  req.session.isLogin = true;
  req.session.user = {
    name: user.username,
    email: user.email,
  };

  req.flash("success", "Login berhasil!");
  console.log("Login success!");
  res.redirect("/");
}

async function logout(req, res) {
  req.session.destroy(function (err) {
    if (err) return console.error("Logout failed!");

    console.log("Logout success!");
    res.redirect("/login");
  });
}

function register(req, res) {
  res.render("register");
}

async function registerEnter(req, res) {
  const { username, email, password } = req.body;
  console.log("name : ", username);
  console.log("email : ", email);
  console.log("password : ", password);
  const salt = 10;
  const hashedpass = await bcrypt.hash(password, salt);
  console.log("hashedpasword", hashedpass);
  await User.create({
    username,
    email,
    password: hashedpass,
  });
  console.log("Register success!");
  res.redirect("/login");
}


function home(req, res) {
  res.render("index");
}

async function collections(req, res) {
  const query = "SELECT * FROM collections_tbs";
  const obj = await sequelize.query(query, { type: QueryTypes.SELECT });
  // console.log("data object : ", obj);
  // const isLogin = req.session.isLogin;
  // const user = req.session.user;
  res.render("collections", { data: obj });
}

async function collectIST(req, res) {
  const { name, user_id } = req.body;
  const query = `INSERT INTO collections_tbs (name,user_id) 
 VALUES('${name}','${user_id}')`;
  await sequelize.query(query, { type: QueryTypes.INSERT });
  // console.log(req.body.integerField);
  res.redirect("collections");
}

function addcollection(req, res) {
  res.render("collection-add");
}

async function edcollectionBt(req, res) {
  const { id } = req.params;
  const edt = await sequelize.query(
    `SELECT * FROM collections_tbs WHERE id = ${id}`,
    {type: QueryTypes.SELECT});

  res.render("collection-ed", { data: edt[0] });
}

async function edcollection(req, res) {
  const { id, name, user_id } = req.body;
  const query = `UPDATE collections_tbs SET name='${name}', user_id='${user_id}' WHERE id = ${id}`;
  await sequelize.query(query, { type: QueryTypes.UPDATE });
  res.redirect("/collections");
}

async function delcollection(req, res) {
  const { id } = req.params;
  const query = `DELETE FROM collections_tbs WHERE id=${id} `;
  await sequelize.query(query, { type: QueryTypes.DELETE });
  console.log(query)
  res.redirect("/collections");
}

async function task(req, res) {
  const query = "SELECT * FROM tasks_tbs";
  const obj = await sequelize.query(query, { type: QueryTypes.SELECT });
  res.render("tasks", { data: obj });
}

async function taskIST(req, res) {
  const { name, is_done, collection_id } = req.body;
  
//   var rates = document.getElementsById('is_done');
// var rate_value;
// for(var i = 0; i < rates.length; i++){
//     if(rates[i].checked){
//         rate_value = rates[i].value;
//     }
// }

  const query = `INSERT INTO tasks_tbs (name,is_done,collection_id) 
 VALUES('${name}','${is_done}','${collection_id}')`;
  await sequelize.query(query, { type: QueryTypes.INSERT });
  // console.log(data);
  res.redirect("/tasks");
}

function addtask(req, res) {
  res.render("task-add");
}

async function edtaskBt(req, res) {
  const { id } = req.params;
  const edt = await sequelize.query(
    `SELECT * FROM tasks_tbs WHERE id = ${id}`,
    {type: QueryTypes.SELECT});

  res.render("task-ed", { data: edt[0] });
}

async function edtask(req, res) {
  const { id, name, is_done, collection_id } = req.body;
  const query = `UPDATE tasks_tbs SET name='${name}', is_done='${is_done}', collection_id='${collection_id}' WHERE id = ${id}`;
  await sequelize.query(query, { type: QueryTypes.UPDATE });
  res.redirect("/tasks");
}

async function deltask(req, res) {
  const { id } = req.params;
  const query = `DELETE FROM tasks_tbs WHERE id=${id} `;
  await sequelize.query(query, { type: QueryTypes.DELETE });
  console.log(query)
  res.redirect("/tasks");
}

app.listen(port, () => {
  console.log("server is running on PORT :", port);
});
