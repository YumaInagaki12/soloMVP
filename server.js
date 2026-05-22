// import Testfunc from "./front/src/Testfunc";

const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "/public")));

app.get("/top", (req, res) => {
  res.send("top");
});
app.get("/top/pet", (req, res) => {
  // const Testfunc = <Testfunc />;
  res.send(`pet`);
});
app.get("/top/pet/health", (req, res) => {
  res.send("health");
});
app.get("/top/pet/health/", (req, res) => {
  res.send("health");
});
app.get("/top/pet/health/condition", (req, res) => {
  res.send("condition");
});
app.get("/top/addpet", (req, res) => {
  res.send("addpet");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
