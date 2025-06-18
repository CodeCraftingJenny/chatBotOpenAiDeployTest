import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';

//test

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());

console.log("ENV Check", {
  endpoint: process.env.VITE_AZURE_OPENAI_ENDPOINT,
  deployment: process.env.VITE_AZURE_OPENAI_DEPLOYMENT,
  version: process.env.VITE_AZURE_OPENAI_API_VERSION,
  hasKey: !!process.env.VITE_AZURE_OPENAI_KEY
});

app.post('/api/chat', async (req, res) => {
  try {
    const azureRes = await fetch(
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

    const data = await azureRes.text();

    try {
      res.json(JSON.parse(data));
    } catch (jsonErr) {
      console.error("Non-JSON response from Azure OpenAI:", data);
      res.status(500).json({ error: "Invalid JSON from Azure OpenAI", raw: data });
    }
  } catch (err) {
    console.error("OpenAI call failed:", err);
    res.status(500).json({ error: 'OpenAI call failed' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
