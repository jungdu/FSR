require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const SeedDb = require("./seedDb");
const siteRoutes = require("./routes/sites");
const app = express();
const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT | 4020;
mongoose.connect(DB_URI, { useNewUrlParser: true }).then(() => {
  const seedDb = new SeedDb();
  seedDb.seed();
});
app.use(bodyParser.json());
const appPath = path.join(__dirname, "..", "build");
app.use(express.static(appPath));
const resFiles = path.join(__dirname, "resFiles");
app.use("/api/v1/sites", siteRoutes);

app.use("/api/v1/pngfiles/:fileName", (req, res) => {
  const targetFile = path.join(resFiles, req.params.fileName + ".PNG");
  res.sendFile(targetFile);
});

app.use("/api/v1/jpgfiles/:fileName", (req, res) => {
  const targetFile = path.join(resFiles, req.params.fileName + ".jpg");
  res.sendFile(targetFile);
});

app.get("*", function(req, res) {
  res.sendFile(path.resolve(appPath, "index.html"));
});

app.listen(PORT, function() {
  console.log("App is running on PORT : " + PORT);
});
