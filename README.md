# rhyswareham.github.io

My portfolio: plain HTML, CSS and JavaScript with no build step. GitHub Pages serves the files as they are (`.nojekyll` switches Jekyll off).

## Files

| Path | What it is |
|---|---|
| `index.html` | The page: hero, Royal Rift, work grid, about, contact |
| `assets/js/projects.js` | **Every project on the site** |
| `assets/js/site.js` | Grid, filters, project window, theme toggle |
| `assets/css/site.css` | All styles. Colours are at the top (light, then dark) |
| `assets/img/thumbs/` | Card images, 960×600 |
| `assets/img/gallery/` | Screenshots shown inside a project window |
| `assets/img/royal-rift/` | Royal Rift screenshots (pixel art, kept as PNG) |
| `404.html` | "Game over" page |

## Add a project

1. Put a 960×600 image in `assets/img/thumbs/` (WebP or JPG, under ~150 KB). Or skip this and use the video's thumbnail with `thumb: { yt: "<YouTube id>" }`.
2. Copy one of the entries in `assets/js/projects.js`, change the fields and place it where it should appear: the grid follows the order of that list.
3. The first 9 show on load, and the rest sit behind "Show all".

Each project gets its own link: `https://rhyswareham.github.io/#work/<id>`.

## Royal Rift

The Royal Rift panel's screenshots are in `assets/img/royal-rift/`, and its project window comes
from the `royal-rift` entry in `assets/js/projects.js`. The game itself isn't hosted here, so none of
its code or assets are public. When it launches, add a link to it in that entry's `links`
(`kind: "play"`) to give it a "Play" button.

## Preview locally

Any static server works, for example `npx serve .` or `python -m http.server`, then open the address it prints.
