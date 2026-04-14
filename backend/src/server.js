import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { analyzeRouter } from './routes/analyze.js';

const app  = express();
const PORT = process.env.PORT ?? 4000;

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json({ limit: '1mb' }));

app.get('/health', (_req, res) => res.json({ status: 'ok' }));
app.use('/api', analyzeRouter);

app.listen(PORT, () =>
  console.log(`[server] running on http://localhost:${PORT}`)
);  