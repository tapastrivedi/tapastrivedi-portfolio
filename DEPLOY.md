# Deploy this portfolio to GitHub Pages

Your site files are already at the **root** of this folder (`index.html` +
`assets/`), which is exactly what GitHub Pages needs. Pick one of the two
methods below.

> Tip: For the cleanest URL (`https://<username>.github.io`), name the repo
> **`<username>.github.io`** (replace `<username>` with your GitHub username,
> lowercase). Any other repo name works too — it just serves at
> `https://<username>.github.io/<repo-name>/`.

---

## Method A — Command line (fastest)

Run these from inside this `portfolio` folder on your computer. Replace
`<username>` and, if you like, the repo name.

```bash
# 1. Create the repo on github.com first (empty, no README), then:
git init
git add -A
git commit -m "Initial commit: personal portfolio"
git branch -M main
git remote add origin https://github.com/<username>/<username>.github.io.git
git push -u origin main
```

If you have the GitHub CLI (`gh`) installed, it's even quicker — it creates the
repo and pushes in one step:

```bash
git init && git add -A && git commit -m "Initial commit: personal portfolio"
gh repo create <username>.github.io --public --source=. --push
```

Then enable Pages (skip if using the `<username>.github.io` repo name — that one
publishes automatically):
`Repo → Settings → Pages → Build and deployment → Source: "Deploy from a branch"
→ Branch: main / (root) → Save`.

---

## Method B — GitHub website (no command line)

1. Go to https://github.com/new and create a repository named
   `<username>.github.io` (Public). Don't add a README.
2. On the new repo page, click **"uploading an existing file"**.
3. Drag in **all contents of this folder** — `index.html`, the `assets` folder,
   `.nojekyll`, and `README.md`. (Upload the *contents*, not the `portfolio`
   folder itself.)
4. Click **Commit changes**.
5. Go to **Settings → Pages**. Under "Build and deployment", set Source to
   **Deploy from a branch**, Branch **main** / **(root)**, and Save.

---

## After deploying

- Your site goes live in ~1 minute at:
  - `https://<username>.github.io`  (if repo is named `<username>.github.io`), or
  - `https://<username>.github.io/<repo-name>/`  (any other repo name).
- The included `.nojekyll` file tells Pages to serve the files as-is (no Jekyll
  processing) — leave it in.
- To update the site later, edit files and `git push` again (or re-upload).

## Before you publish — quick edits

- Replace the placeholder GitHub link (`href="#"`) in `index.html` (sidebar
  social list + Contact section) with your real GitHub URL.
- Swap the "TT" avatar (`assets/images/avatar.svg`) for your photo.
- Fill in real project details in the Projects section (see README.md).
