import { Router } from 'express';
export const analyzeRouter = Router();

analyzeRouter.post('/analyze', (_req, res) => {
  res.status(501).json({ error: 'NOT_IMPLEMENTED' });
});