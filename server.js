import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());

// ✅ Your backend proxy
app.post('/api/chat', async (req, res) => {
  try {
    const azureResponse = await fetch(
      `${process.env.VITE_AZURE_OPENAI_ENDPOINT}openai/deployments/${process.env.VITE_AZURE_OPENAI_DEPLOYMENT}/chat/completions?api-version=${process.env.VITE_AZURE_OPENAI_API_VERSION}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.VITE_AZURE_OPENAI_KEY
        },
        body: JSON.stringify(req.body)
      }
    );

    const data = await azureResponse.json();
    res.json(data);
  } catch (err) {
    console.error("OpenAI call failed:", err);
    res.status(500).json({ error: 'OpenAI call failed' });
  }
});

// Fallback for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
