import express from "express";
import morgan from "morgan";

const app = express();
const port = process.env.PORT || 8888;

app.use(morgan("tiny"))

app.get('/', ( req, res ) => {
    res.status(200).send("OK!")
})

app.listen(port, () => {
    console.log("server started at port: uwu", port);
});