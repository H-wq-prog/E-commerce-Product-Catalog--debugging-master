require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());
//DB connection
// mongoose
//   .connect(process.env.DB_URL)
//   .then(() => console.log("DB Connected"))
//   .catch((err) => console.log(err));

// app.use("/api", productRoutes);
//=============================
async function dbconnection() {
  try {
    const url = process.env.DB_URL;
    await mongoose.connect(url);
    console.log("DB is connect")
  } catch (err) {
    console.log(error)
  }
}
dbconnection();
// port server
const port = process.env.Port || 3000;
app.listen(port, () => console.log("Server Running"));
