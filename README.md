# Somil Barnwal — React + Tailwind Portfolio

A responsive dark portfolio starter built with React, Vite, Tailwind CSS, and Lucide icons.

## Run locally

1. Install Node.js (LTS).
2. Extract this folder and open it in VS Code.
3. Open the terminal in the project folder.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed in the terminal.

## Before publishing — personalize these details

Open `src/App.jsx` and verify/update:

- Email address (`somilraj55@gmail.com`)
- LinkedIn profile URL (currently a placeholder)
- Project live URLs and GitHub repository URLs
- Project descriptions, features, and technology stacks
- The wording in the About section so it accurately describes your background

The sample project links are placeholders and should be replaced with the actual links for each project. Don't list a feature or technology unless you can demonstrate it.

## Build for production

```bash
npm run build
```

The generated production site will be in the `dist` folder.

## Deploy to GitHub Pages

For a repository named `Portfolio`, set `base: '/Portfolio/'` in `vite.config.js`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
})
```

Then run `npm run build`. Deploy the contents of `dist` using GitHub Pages (for example, with GitHub Actions). Check the current Vite and GitHub Pages documentation for the deployment method you choose.


## Project preview images

Screenshots provided by Somil are stored in `public/projects/` and used as the project card previews. The Productivity Dashboard is listed with its actual stack: HTML, CSS, and JavaScript (not React).


## Recent portfolio updates

- Refreshed the three project preview screenshots with the clearer images supplied by Somil.
- Added a Certificates & Recognition section with three SoloLearn certificates (HTML, CSS, JavaScript) and the Techfest, IIT Bombay College Ambassador certificate. Certificate cards open the full image when clicked.
- Productivity Dashboard technologies remain HTML, CSS, and JavaScript.
