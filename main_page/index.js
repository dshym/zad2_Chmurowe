const express = require("express");
const path = require("path");
const app = express();
const port = 3001;

const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));
app.set("trust proxy", true);

app.get("/documentation", (req, res) => {
    res.sendFile(path.join(publicPath, "documentation.html"));
})

app.get("/gs_calc", (req, res) => {
    res.sendFile(path.join(publicPath, "gs_calc.html"));
})

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})