import express from 'express';
import cors from 'cors';
import contactHandler from './api/contact.js';

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.post('/api/contact', contactHandler);

app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});
