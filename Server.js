import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Auth from './routes/UserRoutes.js';
import codingprofiles from './routes/codingprofiles.js';


dotenv.config();

const app = express();
mongoose.set('strictQuery', false);
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));
const PORT = process.env.PORT || 5000;

app.get('/' , (req,res) => {
  res.send("Hello I am from Server");
})

app.use('/users',Auth);
app.use('/api/profile', codingprofiles);


app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
