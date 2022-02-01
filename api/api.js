const express = require("express");

const app = express();

const router = express.Router();

const productsService = require("./productsService");

// ABM Products

// Listar, mostrar uno, crear, editar, cambiar un atributo, borrar


router.get("/products", (req, res) => {
    const { nombre, precio } = req.query;

    const result = productsService.list({ nombre, precio });

    res.status(200).json(result);
});

router.get("/products/:id", (req, res) => {
});

router.post("/products", (req, res) => {
});

router.put("/products/:id", (req, res) => {
});

router.patch("/products/:id", (req, res) => {
});

router.delete("/products/:id", (req, res) => {
});

app.use("/api", router);

app.listen(3000, ()=> console.log("Server started on port 3000"));