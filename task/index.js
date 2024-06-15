const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const { title } = require("process");
const config = require("./config/config.json")
const {Sequelize, QueryTypes} = require("sequelize")
const sequelize = new Sequelize(config.development)

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
function home(req, res) {
  res.render("index");
}

async function project(req, res) {
  const query = "SELECT * FROM projects"
  // "SELECT * FROM projects" nama projects-nya diambil berdasarkan nama file yg di postgres
  const obj = await sequelize.query(query, {type: QueryTypes.SELECT}); 
  res.render("myproject", { data });
}

function addprojectV(req, res){
  res.render("addproject");
}

function edprojectV(req, res){
  const {id} = req.params;
  const selectedData = data[id]
  selectedData.id = id

  res.render("editproject", {data: selectedData});
}

function addproject(req, res) {
  const { title, startd, endd, content} = req.body;
  data.unshift({ 
    title,
    startd,
    endd, 
    content,
    image:"https://i.pinimg.com/474x/f4/f8/48/f4f848c765932b3694f45928d2123bac.jpg" 
  });
  res.redirect("myproject");
}

function delproject(req, res){
  const {id} = req.params;
  data.splice(id, 1)
  res.redirect("/myproject")
}

function edproject(req, res){
  const{id, title, content} = req.body
  data[id] = {
    title,
    content
  }
  res.redirect("/myproject")
}

function testimonial(req, res) {
  res.render("testimonial");
}

function contact(req, res) {
  res.render("contact");
}

function Vproject(req, res) {
  const { id } = req.params;
  const data = {
    id: id,
    title: "title",
    content: "content",
  };

  res.render("viewproject", { data: data });
}

app.listen(port, () => {
  console.log("server is running on PORT :", port);
});
