const express = require("express");
const app = express();

const path = require("path");
//Para levantar el proyecto en render
const port = process.env.PORT || 3030;

const publicPath = path.join(__dirname, "./public");
app.use(express.static(publicPath));

app.get(["/", "/home"], (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get(["/register"], (req, res) => {
  res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.get(["/login"], (req, res) => {
  res.sendFile(path.join(__dirname, "/views/login.html"));
});

//Es para controlarlo de manera local
/* 
app.listen(3030,() => {
    console.log('Servidor corriendo')
})  */

app.listen(port, () => {
  console.log("Servidor corriendo en el puerto ${port}");
});
