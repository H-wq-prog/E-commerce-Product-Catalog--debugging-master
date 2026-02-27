const Product = require("../models/Product");

// const createProduct = (req, res) => {
//   const { name, price } = req.body;

//   if (!name || !price) {
//     res.status(400).json({ msg: "Missing Data" });
//   }

//   Product.create({ name, price }).then((product) => {
//     res.status(201).json({ msg: "Product Created", data: product });
//   });
// };
//=============================
const createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    if (!name || !price) {
      res.status(400).json({ msg: "Misssing bata" });
    }
    const product = await Product.create({ name, price })
    res.status(201).json({ msg: "prodact creat", data: product })
  } catch (err) {
    res.status(500).json({ msg: "server error", error: error.message })

  }
}
const getAllProducts = async (req, res) => {
  try {
    const limit = req.query.limit || /*"10"*/ 10;

    const products = await Product.find().limit(limit);
    res.status(200).json({ msg: "Products fetched", data: products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = { createProduct, getAllProducts };
