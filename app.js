const express = require("express")
const hbs = require("hbs")
const app = express()
const path = require("path")

app.set("view engine", "hbs")
// app.set("views", path.join(__dirname, "views"))
app.set("views", `${__dirname}/views`)
app.use(express.static(path.join(__dirname, "public")))

// hbs.registerPartials(path.join(__dirname, "views", "partials"))



app.get("/", (req, res) => {

    res.render('home')
})

app.get("/about", (req, res) => {

    res.render('about')
})

app.get("/works", (req, res) => {

    res.render('works')
})

app.get("/gallery", (req, res) => {

    res.render('gallery')
})



app.listen(3000, () => console.log('SERVIDOR LEVANTADO ENE EL PUERTO 3000'))