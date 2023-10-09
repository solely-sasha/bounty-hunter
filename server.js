const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");

app.use(express.json());
app.use(morgan("dev"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(9000, () => {
      console.log(
        "connected to the database and the server is listening on port 9000"
      );
    });
  })
  .catch((err) => console.log(err.message));

app.use("/api/bounties", require("./routes/bountyRouter"));
