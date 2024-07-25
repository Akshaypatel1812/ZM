import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/api/download', (req, res) => {
  const file = path.join(__dirname, 'files', 'ZM Product Catalogue.pdf');
  console.log('File path:', file); // Log the file path for debugging

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="Catalogue.pdf"');

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
