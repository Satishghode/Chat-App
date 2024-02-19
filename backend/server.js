import express from "express";
import dotenv from "dotenv";
import authRouter from "./routers/auth.routes.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server Running on port : ${PORT} `);
});

// if any Browser hit the URL http://localhost:5000/api/auth automatics call the authRouter Function/methos present in the routes folder
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  // root route for http://localhosr:5000
  res.send("server is listening ??? ");
});
