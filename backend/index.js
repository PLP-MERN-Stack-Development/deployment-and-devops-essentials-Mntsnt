import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB!'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Backend running on http://localhost:${port}`);
});
