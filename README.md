# TruthLens
AI-powered fake news detector using multi-model orchestration

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   - Copy `backend/.env.example` to `backend/.env`
   - Add your API keys and configuration

3. Start the development servers:
   ```bash
   npm run dev
   ```

This will start both the frontend (Next.js) on port 3000 and backend (Express) on port 3001.

## Project Structure

- `frontend/`: Next.js application with Tailwind CSS
- `backend/`: Express.js API server
- Root workspace with npm workspaces configuration
