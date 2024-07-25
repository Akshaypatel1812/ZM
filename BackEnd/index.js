import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config({
  path:'.env'
})

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: ['http://localhost:4000', 'https://zenpamarketing.vercel.app'],
  optionsSuccessStatus: 200,
}));



const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process with a failure code
  }
};



//connectToDatabase();

// Model
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    contact: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Contact = mongoose.model('Contact', userSchema);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/api/download', (req, res) => {
  const file = path.join(__dirname, 'files', 'ZM Product Catalogue.pdf');
  console.log('File path:', file); // Log the file path for debugging

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=Catalogue.pdf');

  res.download(file, 'Catalogue.pdf', (err) => {
    if (err) {
      console.error('Error:', err.message);
      res.status(404).send('File not found');
    }
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
