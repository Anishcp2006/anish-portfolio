# 📸 Instagram Clone

A fully client-side Instagram clone built with **pure HTML, CSS and vanilla JavaScript** — no frameworks, no backend, no external libraries.

## ✨ Features

| Feature | Details |
|---|---|
| 🔐 Auth | Sign up / log in / continue-as flow with persistent sessions |
| 🏠 Feed | Posts with likes, double-tap-to-like, comments, saves, carousels |
| 🎞️ Stories | Story rings, auto-advancing progress bars, replies & likes |
| 🔥 Reels | Vertical scroll with viewport-triggered autoplay, progress, likes & comment sheets |
| 📬 Messages | Inbox + threads, unread badges, **simulated replies** |
| 🔍 Explore | Responsive grid with hover stats |
| 👤 Profiles | Editable profile (name, bio, photo), post/reel grids, follow states |
| 🖼️ Share | Create posts with canvas-compressed image uploads |
| 🌗 Theme | Dark / light mode toggle (persisted) |
| 💾 Storage | Everything persists in `localStorage` |

## 🚀 Run

Serve the folder (any static server) and open `index.html`:

```bash
# from the repository root
python3 -m http.server 8000
# then open http://localhost:8000/instagram-clone/
```

Or open `instagram-clone/index.html` directly in a browser.

## 🗂️ Structure

```
instagram-clone/
├── index.html      # auth screen + app shell + overlays
├── styles.css      # full Instagram dark/light UI
├── app.js          # data model, routing, rendering, interactions
└── assets/
    ├── avatars/    # profile photos
    ├── posts/      # feed images
    └── reels/      # reel covers
```

## 🧪 Demo accounts

- **Continue as `anish.cp`** (pre-seeded profile) — one click from the login screen
- Or sign up with any username / password — your data is stored locally

> This is an educational clone. All data is local to your browser.
