import express from 'express';
import cors from 'cors';
import PDFDocument from 'pdfkit';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API server is running!');
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});