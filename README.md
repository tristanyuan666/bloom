# Bloom Crowdfunding Platform

This repository contains the source code for a billion-dollar quality crowdfunding platform for small businesses and innovative ideas.

## Project Structure

- **crowdfunding-platform/**: The main Next.js 15 app (TypeScript, Tailwind CSS)
- All source code, configuration, and dependencies are inside the `crowdfunding-platform` subdirectory.

## Local Development

1. **Navigate to the app directory:**
   ```bash
   cd crowdfunding-platform
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000) (or another port if 3000 is in use).

## Deployment (Vercel)

- **Root Directory:** Set to `crowdfunding-platform` in your Vercel project settings.
- Vercel will auto-detect Next.js and build/deploy the app from this subdirectory.

## Notes
- All code, configuration, and dependencies are inside `crowdfunding-platform/`.
- If you need to add environment variables, do so in the Vercel dashboard or in a `.env.local` file inside `crowdfunding-platform/`.

---

For any issues or questions, please open an issue or contact the maintainer. 