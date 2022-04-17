const express = require("express");
const produtoController = require('../controllers/controllerProdutos')
const fabricantesController = require('../controllers/controllerFabricantes')
const routes = express.Router();

// routes.get("/", (req, res)=>{
//     console.log(req.query)
//     res.send('Olá mundo!');
// });
// op1:
// routes.get("/produto/:id/:categoria/:nome", (req, res)=>{
//     console.log(req.params)
//     res.send('Olá mundo!');
// })

// routes.post("/cadastrar", (req, res)=>{
//     console.log(req.body)
//     res.json(req.body);
// });
// op:2
routes.get("/produto/lista", produtoController.listarProduto);
routes.post("/produto/criar", produtoController.cadastrarProduto);
routes.delete("/produto/:id/deletar", produtoController.deletarProduto);
routes.put("/produto/:id/atualizar", produtoController.atualizarProduto);

routes.get("/fabricante/lista", fabricantesController.listarFabricante);
routes.post("/fabricante/criar", fabricantesController.cadastrarFabricante);
routes.delete("/fabricante/:id/deletar", fabricantesController.deletarFabricante);
routes.put("/fabricante/:id/atualizar", fabricantesController.atualizarFabricante);


module.exports = routes;
