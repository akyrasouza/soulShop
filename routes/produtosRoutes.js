const { Router } = require("express");
const ProdutoController = require("../controllers/ProdutoController")
const router = Router();
const multer = require('../storage')

router.get("/produtos", ProdutoController.paginaProdutos);
router.get("/produtos/novo", ProdutoController.paginaAdicionarProduto);
router.post("/produtos/enviar", multer.single('image'),ProdutoController.addProduto);
router.get("/produtos/editar/:id", ProdutoController.paginaEditProduto);
router.post("/produtos/atualizar", multer.single('image'),ProdutoController.editProduto);
router.post("/produtos/deletar", ProdutoController.deleteProduto);

module.exports = router;
