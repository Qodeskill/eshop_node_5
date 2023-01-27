const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");
// const jwt = require("express-jwt");
// const authJwt = require("./helpers/jwt");

// const errorHandler = require("./helpers/error-handler");

app.use(cors());
app.options("*", cors());

mongoose.set("strictQuery", true);
app.use(express.json());
app.use(morgan("tiny"));
// app.use(authJwt);
// app.use(
//   jwt({
//     secret: "shhhhhhared-secret",
//     algorithms: ["HS256"],
//   })
// );
// app.use(errorHandler);

const categoriesRoutes = require("./routes/categories");
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/orders");

app.use("/categories", categoriesRoutes);
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);
app.use("/orders", ordersRoutes);

//Database
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });

//Server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
