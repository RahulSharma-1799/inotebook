const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");

connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
app.get("/", (req, res) => {
  res.send("Hello Rahul!");
});
app.get("/api", (req, res) => {
  res.send("Hello login!");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
