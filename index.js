const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const app = express();

mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://bhaumikaniruddha2003:aniruddha2003@todo-users.g0l1vp6.mongodb.net/Company"
);
const db = mongoose.connection;
db.on("open", () => {
  console.log("Database connected");
});
db.on("error", () => {
  console.log("Error while connecting to database", err);
});
app.use(express.json());

app.use(cors());

app.use("/user", userRoutes);

const port = 5050;
app.listen(port, () => {
  console.log("server started on" + port);
});
