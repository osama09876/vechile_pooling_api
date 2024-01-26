require("dotenv").config();
const express = require("express");
const connectDb = require("./Db/db.js");
const routes = require("./routes/routes.js");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");

app.use(express.json());
app.use("/api/", routes);
app.use(bodyParser.json());

const sendData = async () => {
  await connectDb.create;
};

connectDb()
  .then(() => {
    app.listen(PORT, async () => {
      console.log(`app listening on port ${PORT} `);
    });
  })
  .catch((e) => {
    console.log(e);
  });
