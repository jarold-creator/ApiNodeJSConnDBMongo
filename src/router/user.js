const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

//create user
router.post("/users", (req, res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//obtener los usuarios Get all users
router.get("/users", (req, res) => {
    userSchema    
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//obtener un usuario Get one users
router.get("/users/:id", (req, res) => {
    const { id } = req.params
    userSchema    
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Actualizar usuarios update user
router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body;
    userSchema    
    .updateOne({ _id: id }, { $set: { name, age, email }})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Eliminar usuarios delete user
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema    
    .deleteOne({ _id : id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});




module.exports = router;