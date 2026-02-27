const express = require("express");
// const router = express.Router();
// const createProduct = require("../controllers/productController");
// const { getAllProducts } = require("../controllers/productController");
const { createProduct, getAllProducts } = require("../controllers/productController");

// router.get("/products", createProduct);
// router.get("/products/all", getAllProducts);
router.post("/products", createProduct);
router.get("/products", getAllProducts);

module.exports = router;
