const mongoose = require("mongoose");



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rome-tacos", { useNewUrlParser: true });

// require("dotenv").config()
const express = require("express");
// const logger = require("morgan");
// const mongoose = require("mongoose");
// const cors = require("cors");

const app = express();
const PORT = 3001;
// const PORT = process.env.PORT || 3001;
// app.use(logger("dev"));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("client/build"));
// app.use(cors({
//   origin: "http://27017:localhost:3001",
// }))
// mongoose.set("useNewUrlParser", true);
// mongoose.set("useFindAndModify", false);
// mongoose.set("useCreateIndex", true);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rome-tacos", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("mongoose successfully connected.");
});
connection.on("error", (err) => {
  console.log("mongoose successfully connected.", err);
});
// const AuthoController = require("./controllers/authController")
const ordenControler = require("./controllers/OrdenControllers");
// const clienteController = require("./controllers/ClienteControllers");
// const userController = require("./controllers/UserController");
// app.use(AuthoController)
// app.use(userController)
app.use("/api/orden", ordenControler);
// app.use(clienteController);

app.get("/api/config", (req, res) => {
  console.log("working");
  res.json({
    success: "true",
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

//cors-anywhere
