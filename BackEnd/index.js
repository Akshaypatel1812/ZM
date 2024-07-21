import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({
  path:'.env'
})

const app = express();
app.use(bodyParser.json());
app.use(cors());

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

app.post('/submit-form', async (req, res) => {
  const { name, contact, message } = req.body;

  const newContact = new Contact({ name, contact, message });

  try {
    // Step where data is pushed to MongoDB
    await newContact.save();
    res.status(200).send({ success: true, message: 'Form submitted successfully!' ,newContact});
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
