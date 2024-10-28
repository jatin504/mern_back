const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const UserRouter = require("./routes/userRouter");
const PORT = process.env.PORT||3000

const cors =  require("cors");
app.use(cors());

app.use(express.json());

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("connected successfully");
    app.listen(PORT, (err) => {
      if (err) console.log(err);
      console.log("Running Successfully at", PORT);
    });
  })
  .catch((error) => {
    console.log("error", error);
  });

app.use(UserRouter)

app.get("/", (req, res) => {
  res.send("api running");
});
