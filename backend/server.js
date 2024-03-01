import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


import authRouter from "./routers/auth.routes.js";
import messageRoute from "./routers/message.routes.js";
import userRouter from "./routers/user.routes.js";


import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(express.json()); // to parese the incoming request with json payload (from req.body); 
app.use(cookieParser()); // 

// if any Browser hit the URL http://localhost:5000/api/auth automatics call the authRouter Function/methos present in the routes folder
app.use("/api/auth", authRouter);
app.use('/api/messages', messageRoute);
app.use('/api/user', userRouter );

// create an connection to MongoDB.
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server Running on port : ${PORT} `);
});


