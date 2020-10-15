const express = require("express");
const cors = require("cors");
const moongose = require("mongoose");

require("dotenv").config();
const app = express();

app.use(cors());
const port = process.env.PORT || 5000;

// Connecting to Database
dbURI = process.env.URI;
moongose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>
    app.listen(port, () => {
      console.log("Connected to DATABASE");
    })
  )
  .catch((err) => console.log(err));
