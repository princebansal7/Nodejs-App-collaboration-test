import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hey... I'm Prince Bansal</h1>");
});

app.listen(PORT, () => {
    console.log(`listening on PORT=${PORT}`);
});
