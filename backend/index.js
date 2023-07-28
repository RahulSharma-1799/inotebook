const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
const path = require("path");

connectToMongo();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build/index.html"));
});

// app.get("/", (req, res) => {
//   res.send("Hello Rahul!");
// });
// app.get("/api", (req, res) => {
//   res.send("Hello login!");
// });

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
