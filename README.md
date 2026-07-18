# Fatima Iqbal Mirza — Portfolio

A modern React portfolio with four pages: **Home**, **Portfolio**, **Resume**, and **Contact**.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Project structure

```
src/
  data/profile.js      <- ALL your content lives here (edit this)
  components/          <- Navbar, Footer, ProjectCard
  pages/               <- Home, Portfolio, Resume, Contact
  styles/global.css    <- theme + all styling
public/
  resume/              <- put your resume PDF here
  projects/            <- put project images/videos here (optional)
```

## Adding a new project (data-driven)

Open `src/data/profile.js`, find the `projects` array, and copy an existing
block. You only change the data — the rendering code stays the same.

```js
export const projects = [
  {
    title: "Song Lyrics Meaning System",
    description: "...",
    technologies: ["Next.js", "TypeScript", "MongoDB"],
    image: "",      // optional — "/projects/name.png"
    video: "",      // optional — local .mp4 OR a YouTube/Vimeo embed URL
    liveUrl: "",    // optional
    codeUrl: "",    // optional
  },
  // add your 2nd project here 👇
  {
    title: "My Second Project",
    description: "What it does...",
    technologies: ["React", "Node.js"],
    image: "/projects/second.png",
    video: "",
    liveUrl: "",
    codeUrl: "",
  },
];
```

### Attaching media to a project
- **Image:** drop a file in `public/projects/` and set `image: "/projects/your-file.png"`.
- **Local video:** drop a `.mp4` in `public/projects/` and set `video: "/projects/your-file.mp4"`.
- **YouTube/Vimeo:** set `video` to the embed URL, e.g. `https://www.youtube.com/embed/VIDEO_ID`.
- If you provide neither, a nice gradient placeholder with the project initial is shown.

Media priority: **video → image → placeholder**.

## Resume download

Put your PDF in `public/resume/` named `Fatima-Iqbal-Mirza-Resume.pdf`
(or change `resumeFile` in `src/data/profile.js`). The Resume page's
**Download Resume** button will serve it.
