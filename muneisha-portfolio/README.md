# Muneisha Chandru Portfolio

Static HTML/CSS/JavaScript portfolio.

## Deploy on Render
1. Upload the contents of this ZIP to the root of your GitHub repository.
2. In Render, create a **Static Site** and connect that repository.
3. Set **Branch** to `main`.
4. Set **Build Command** to empty (or `echo Static site` if the form requires a command).
5. Set **Publish Directory** to `public`.
6. Create the site. Future pushes to `main` can auto-deploy.

## Portrait
The original Hatchable portrait binary could not be exported through the available file connection. The hero currently uses a styled initials placeholder. To restore your portrait, add your image as `public/muneisha-portrait.jpg` and replace the `.portrait-placeholder` block in `public/index.html` with:
`<img class="hero-portrait" src="muneisha-portrait.jpg" alt="Muneisha Chandru G.">`
Then add this CSS:
`.hero-portrait{width:100%;height:100%;object-fit:cover;object-position:center 22%}`

## Files
- `public/index.html` — page structure and portfolio content
- `public/styles.css` — base styles and responsive layout
- `public/upgrade.css` — alignment and layout refinements
- `public/3d.css` — animation and depth effects
- `public/photo.css` — portrait/hero visual styling
- `public/app.js` — navigation, year, reading progress and reveal animations
