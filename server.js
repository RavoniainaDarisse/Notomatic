import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv";
import router from "./Routes/route.js";
import cors from "cors"

dotenv.config();
const PORT = process.env.port || 5000 ;
const app = express();
app.use(cors());

await mongoose.connect(process.env.MongoDb).then(() => {
    console.log("Database Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})