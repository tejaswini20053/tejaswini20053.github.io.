# K. M. Tejaswini | Portfolio

Files: `index.html`, `style.css`, `script.js`, `assets/Tejaswini_KM_Resume.pdf`

## Run locally
1. Open the folder in VS Code and install the **Live Server** extension, then right-click `index.html` > *Open with Live Server*.
   Or from a terminal: `python -m http.server 8000` and visit http://localhost:8000
2. Double-clicking `index.html` also works.

## Publish on GitHub Pages
1. Create a new public repository, e.g. `tejaswini20053.github.io` (or any name).
2. Upload all files, keeping the `assets` folder:
   `git init && git add . && git commit -m "Portfolio" && git branch -M main`
   `git remote add origin https://github.com/tejaswini20053/<repo>.git && git push -u origin main`
3. Repo > Settings > Pages > Source: *Deploy from a branch* > Branch: `main` / `(root)` > Save.
4. Your site goes live in 1-2 minutes at `https://tejaswini20053.github.io/<repo>/`.

## Easy edits
- Colors: `:root` at the top of `style.css`
- Typing roles: `ROLES` at the top of `script.js`
- Project screenshots: add images to `assets/` and replace the `.shot` placeholder with `<img src="assets/name.png" alt="...">`
- Project GitHub links: only Resume Information Extraction has its own repo link in your resume. Others point to your GitHub profile; replace with the repo URLs once available.
- Resume: replace `assets/Tejaswini_KM_Resume.pdf` (keep the same filename).
