const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRouter = require("./router/user")

const app = express();
const port = process.env.PORT || 3001;

//Middleware
app.use(express.json());
app.use("/api", userRouter);


//routers
app.get("/", (req, res) => {
    res.send(`Servidor esta funcionando ... en el puerto ${port}`)
});


app.listen(port, () => {
    console.log(`Hola el servidor esta funcionando ... en el puerto ${port}`);
});


//connetion DB Mongo
mongoose.connect(process.env.MongoDB_URI)
.then(() => {
    console.log("Conetado a la DB")
})
.catch((err) => {
    console.log(`Se presento un error ${err}`)
})



