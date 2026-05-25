const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "/public")));

app.get("/*top", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html")); //全部index.htmlに丸投げさせる
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
