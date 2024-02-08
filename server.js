import express from "express";
const app = express();

app.get("/", function (req, res) {
    console.log("serving on PORT=3000");
});

app.listen(3000);
