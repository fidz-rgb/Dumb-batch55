const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const { title } = require("process");
const config = require("./config/config.json");
const { Sequelize, QueryTypes } = require("sequelize");
const sequelize = new Sequelize(config.development);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./w3/pages"));

app.use("/assets", express.static(path.join(__dirname, "./w3/assets")));

// body parser
app.use(express.urlencoded({ extended: false }));
// extended false= querystring bawaan express
// extended true=querystring third party

// route
app.get("/", home);

app.get("/myproject", project);
app.post("/myproject", addproject);
app.get("/addproject", addprojectV);

app.post("/delproject/:id", delproject);
app.get("/viewproject/:id", Vproject);

app.get("/editproject/:id", edprojectV);
app.post("/editproject", edproject);

app.get("/testimonial", testimonial);
app.get("/contact", contact);

const data = [];

//service
// function home(req, res) {
//   res.render("index");
// }

async function home(req, res) {
  const query = "SELECT * FROM projects";
  const obj = await sequelize.query(query, { type: QueryTypes.SELECT });
  res.render("index", { data: obj });
}

async function project(req, res) {
  const query = "SELECT * FROM projects";
  // "SELECT * FROM projects" nama projects-nya diambil berdasarkan nama file yg di postgres
  const obj = await sequelize.query(query, { type: QueryTypes.SELECT });
  // console.log("data object : ", obj);
  res.render("myproject", { data: obj });
}

function addprojectV(req, res) {
  res.render("addproject");
}

async function addproject(req, res) {
  const { title, startd, endd, content } = req.body;
  const date = new Date();
  const dateString = date.toISOString().slice(0, 19).replace("T", " ");

  const query = `INSERT INTO projects (title,startd,endd,content,image) 
 VALUES('${title}','${dateString}','${dateString}','${content}','https://i.pinimg.com/originals/6f/1b/f1/6f1bf1e312e5f9ab4d8b66b1b7249326.gif')`;
  await sequelize.query(query, { type: QueryTypes.INSERT });
  // console.log(data);
  res.redirect("myproject");
}

async function Vproject(req, res) {
  try {
    const { id } = req.params;
    const view = await sequelize.query(
      `SELECT * FROM projects WHERE id = ${id}`,
      { type: QueryTypes.SELECT }
    );
    // console.log(view[0])
    res.render("viewproject", { data: view[0] });
  } catch (error) {
    throw error;
  }
}

async function edprojectV(req, res) {
  const { id } = req.params;
  const edt = await sequelize.query(`SELECT * FROM projects WHERE id = ${id}`, {
    type: QueryTypes.SELECT,
  });

  res.render("editproject", { data: edt[0] });
}

async function edproject(req, res) {
  const { id,title, startd, endd, content } = req.body;
  const date = new Date();
  const dateString = date.toISOString().slice(0, 19).replace("T", " ");
  const query = `UPDATE projects SET title='${title}', startd='${dateString}', endd='${dateString}',content='${content}' WHERE id = ${id}`;
  await sequelize.query(query, { type: QueryTypes.UPDATE });
  res.redirect("/myproject");
}

async function delproject(req, res) {
  const { id } = req.params;
  const query = `DELETE FROM projects WHERE id=${id} `
  await sequelize.query(query, { type: QueryTypes.DELETE });
  res.redirect("/myproject");
}

function testimonial(req, res) {
  res.render("testimonial");
}

function contact(req, res) {
  res.render("contact");
}

app.listen(port, () => {
  console.log("server is running on PORT :", port);
});
