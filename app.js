import express from "express";
import cors from "cors";
import rutematkul from "./routes/rutematkul.js";
 
const app = express();
app.use(cors());
app.use(express.json());
app.use(rutematkul);
 
app.listen(3008, ()=> console.log('Server up and running...'));