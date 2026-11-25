/*
  Every project on the site lives in this one list.

  To add a project, copy one of the objects below, give it a new `id`
  (lower-case, dashes, used in the link: #work/<id>) and put it where you
  want it to appear: the grid shows them in this order.

  Fields
    id         unique, used for links
    title      name of the game / project
    category   "igaming" (iGaming) | "indie" (Indie & personal) | "jam" (Game jam) | "uni" (University)
    studio     who it was made for / with (shown above the title)
    year       short year label for the card
    when       longer date shown in the project window
    role       your role
    team       optional, team size / who with
    tech       array of tags
    badge      optional { label, tone }  tone: "dev" | "live" | "soon" | "award" | "jam"
    thumb      card image path, or { yt: "<YouTube id>" } to use the video's thumbnail
    video      optional YouTube id
    summary    one line for the card
    overview   array of paragraphs (simple HTML allowed)
    built      optional array of bullet points ("What I built")
    award      optional line shown with a trophy
    links      optional array of { label, url, kind }  kind: "github" | "play" | "link"
    gallery    optional array of { src, alt }
*/
window.PROJECTS = [
  {
    id: "royal-rift",
    title: "Royal Rift",
    category: "igaming",
    studio: "ShadowSlot Studios",
    year: "2026",
    when: "2026 · Coming soon",
    role: "Maths, client, pixel art and animation",
    tech: ["TypeScript", "Svelte 5", "PixiJS 8", "Spine", "Python", "Aseprite"],
    badge: { label: "Coming soon", tone: "soon" },
    thumb: "assets/img/thumbs/royal-rift.png",
    pixel: true,
    summary: "My studio's first game: a pixel-art slot, from the maths model to every reel animation.",
    overview: [
      "Royal Rift is the first game from my own studio, ShadowSlot Studios, built for Stake Engine. I'm building it end to end: the maths model and its simulations in Python, the game client in TypeScript with Svelte 5 and PixiJS 8, and the pixel art in Aseprite.",
      "I also learnt Spine for this game, and used it to animate every symbol, the win and anticipation frames, the free spins popup and the big-win sequence.",
      "By day the castle sits under a green sky. Land three or more scatters and the sky shatters into night, a rift tears open above the castle, and the free spins begin, with multiplier wilds and a collector wild that gathers them all."
    ],
    built: [
      "5×4 reels with 40 paylines",
      "Wilds with random ×2 to ×10 multipliers in free spins; multipliers on a line add together",
      "A collector wild on reel 5 that sums every other wild's multiplier and applies it to every winning line that spin",
      "8, 11 or 15 free spins from 3, 4 or 5 scatters, plus a bonus buy",
      "Spine animations for all the symbols, win frames, anticipation, the free spins popup and big wins",
      "Big-win tiers with their own crowns, animated rays and a 5,000× max win",
      "A shared pixel UI kit with desktop, landscape and portrait phone layouts",
      "Drifting clouds, flickering castle windows and a pulsing rift in the background"
    ],
    gallery: [
      { src: "assets/img/royal-rift/free-spins.png", alt: "Royal Rift free spins at night, with multiplier wilds", pixel: true },
      { src: "assets/img/royal-rift/base-game.png", alt: "Royal Rift base game by day", pixel: true },
      { src: "assets/img/royal-rift/splash.png", alt: "ShadowSlot Studios splash screen", pixel: true }
    ]
  },
  {
    id: "karate-squid",
    title: "Karate Squid",
    category: "igaming",
    studio: "Massive Studios",
    year: "2026",
    when: "2026 · In development",
    role: "Lead Game Developer",
    tech: ["TypeScript", "Pixi.js", "Spine"],
    badge: { label: "In development", tone: "dev" },
    thumb: { yt: "EB_S7gF6Anw" },
    video: "EB_S7gF6Anw",
    summary: "A cluster-pays slot where a karate squid fires frames across the grid, then turns the board into mini reels.",
    overview: [
      "A cluster-pays slot with cascading reels, currently in development at Massive Studios. The video is a work-in-progress build.",
      "The star of the show is the Karate Squid symbol. It can carry a multiplier, and once it lands it picks up to three of its tentacles and shoots frames out along them. When the cascades settle, the board transforms around the squid."
    ],
    built: [
      "Cluster wins with cascading reels",
      "The Karate Squid symbol, which can carry a multiplier",
      "Up to 3 tentacles highlight and shoot frames out in their direction",
      "After all wins finish, every symbol without a green frame becomes the symbol in the squid's origin space",
      "Green-framed symbols turn into mini reels that spin for instant wins"
    ]
  },
  {
    id: "knucklehead-brothers",
    title: "Knucklehead Brothers",
    category: "igaming",
    studio: "Massive Studios",
    year: "2026",
    when: "2026 · Released",
    role: "Lead Game Developer",
    tech: ["TypeScript", "Pixi.js", "Spine"],
    badge: { label: "Released", tone: "live" },
    thumb: { yt: "KcMtpakHT8U" },
    video: "KcMtpakHT8U",
    summary: "A crime-caper slot where wild characters brawl on the reels, and a win for the robbers throws in extra expanding wilds.",
    overview: [
      "A crime-comedy slot built at Massive Studios around expanding wilds and a fight between the characters. When the wild characters brawl and the robbers come out on top, they throw more expanding wilds onto the reels."
    ],
    built: [
      "Expanding wilds",
      "Expanding wilds with multipliers",
      "Wild fighting characters",
      "If the robbers win the fight, 1 to 4 more expanding wilds are thrown onto the reels"
    ]
  },
  {
    id: "cashtopher-columbus",
    title: "Cashtopher Columbus",
    category: "igaming",
    studio: "Massive Studios",
    year: "2026",
    when: "2026 · Released",
    role: "Lead Game Developer",
    tech: ["TypeScript", "Pixi.js", "Spine"],
    badge: { label: "Released", tone: "live" },
    thumb: { yt: "E8qezxwaLC0" },
    video: "E8qezxwaLC0",
    summary: "A pirate-themed cascading slot whose grid grows from 4×4 all the way up to 7×7.",
    overview: [
      "A seafaring slot from Massive Studios. Every cascade can push the grid outwards, expanding the reels from 4×4 up to 7×7, with multipliers building up along the way."
    ],
    built: [
      "Cascading reels",
      "Expanding reels, from 4×4 to 7×7",
      "Multipliers",
      "Scatters"
    ]
  },
  {
    id: "power-paws",
    title: "Power Paws",
    category: "igaming",
    studio: "Push Gaming",
    year: "2024",
    when: "Nov 2023 – Aug 2024",
    role: "Lead Game Developer",
    team: "Artists, animators, QA, server developers and mathematicians",
    tech: ["TypeScript", "HTML5"],
    badge: { label: "Released", tone: "live" },
    thumb: "assets/img/thumbs/power-paws.webp",
    video: "D-vWGiAEVCU",
    summary: "Cluster wins, cascades and a colossal mystery symbol that nudges down the grid, growing up to 7×7.",
    overview: [
      "I led the development of Power Paws at Push Gaming, working alongside artists, animators, QA, server developers and mathematicians. It features cluster wins, cascading symbols and colossal nudging symbols.",
      "My job was to implement every mechanic and feature, make sure the game responded correctly to server data, and recover to the right state whenever a player disconnected, on purpose or because of a bad connection."
    ],
    built: [
      "Cascading reels and cluster wins",
      "Mystery symbols that show random symbols before revealing one",
      "Random wild feature",
      "Colossal Mystery: 1–2 colossal symbols from 2×2 to 4×4 drop over the grid, then reveal a group of the same symbol",
      "Expanding Colossal Nudge: a 2×2 colossal mystery starts on the top row, reveals, then nudges down every spin. Expander symbols grow it up to 7×7 until it reaches the bottom row",
      "Multiplier symbols that raise the overall multiplier during the nudge feature",
      "Collector symbols, and instant coins (bet × value) that can land inside the colossal symbols",
      "Full game recovery at any stage"
    ],
    links: [{ label: "Play the demo", url: "https://www.pushgaming.com/games/play/power-paws.html", kind: "play" }]
  },
  {
    id: "shamrock-saints",
    title: "Shamrock Saints",
    category: "igaming",
    studio: "Push Gaming",
    year: "2023",
    when: "Jan 2023 – Nov 2023",
    role: "Lead Game Developer",
    team: "Artists, animators, QA, server developers and mathematicians",
    tech: ["TypeScript", "HTML5"],
    badge: { label: "Released", tone: "live" },
    thumb: "assets/img/thumbs/shamrock-saints.webp",
    video: "hYjfVix_xP4",
    summary: "A leprechaun slot I led from the first line of code to release, four months after picking up TypeScript.",
    overview: [
      "I was lead developer on Shamrock Saints from start to release at Push Gaming. Before this project I had only four months of experience with TypeScript and Push Gaming's in-house tools and codebase.",
      "I implemented every mechanic and feature, made sure the game responded correctly to server data, and handled recovery so it loads into the right state whenever a player reconnects. (The sound glitches near the end of the video; that's my screen recorder, not the game.)"
    ],
    built: [
      "Base spins",
      "Nudging Mystery Reels, where seaweed symbols move down one position before revealing a symbol",
      "Chest symbol with a multiple-prize shuffle and selection",
      "Bonus game that plays until no Mystery symbols are left, raising the All Wins multiplier each spin",
      "Collectible tokens that eventually break the pot and trigger Swarm Mode",
      "Golden Leprechaun reels, collector symbols and multiplier symbols",
      "Instant coins (bet × the number on the coin)",
      "Full game recovery at any stage"
    ],
    links: [{ label: "Play the demo", url: "https://www.pushgaming.com/games/play/shamrock-saints.html", kind: "play" }],
    gallery: [{ src: "assets/img/gallery/shamrock-saints-2.webp", alt: "Shamrock Saints bonus game" }]
  },
  {
    id: "kurat",
    title: "Kurat",
    category: "uni",
    studio: "University of Gloucestershire",
    year: "2022",
    when: "Jan 2022 – Jun 2022 (final year)",
    role: "Gameplay & AI Programmer",
    team: "Team of 5",
    tech: ["Unity", "C#"],
    badge: { label: "TIGA nominee", tone: "award" },
    thumb: "assets/img/thumbs/kurat.webp",
    video: "-xd0T7QK0Gs",
    summary: "A co-op action board game inspired by Estonian mythology, with physics-driven weapons and boss AI.",
    overview: [
      "Kurat is an action board game for up to 4 players, who have to make decisions as a team and survive a series of trials set by the Devil. If anyone dies, the whole group loses. We made it as a team of five for our final university project, and took it to Insomnia 68, where over 1,000 people played it.",
      "Weapons are physics-based and aimed with the right analogue stick: you swing a scythe around your character to build momentum and deal more damage. I focused on that combat system and on the enemy AI."
    ],
    built: [
      "Swing combat: the speed of the right-stick swing sets the exact force, damage and direction of each hit",
      "Bow aiming: pull the stick back to draw the string; the further back, the further and harder the arrow flies",
      "The major enemies, including the Frog of the North and the Ancestors (some of their attacks are in the GIFs below)"
    ],
    award: "Nominated for the TIGA Creative Assembly Best Student Game award, 2022",
    gallery: [
      { src: "assets/img/gallery/kurat-lumberjack.webp", alt: "Kurat: Lumberjack enemy attack" },
      { src: "assets/img/gallery/kurat-frog.webp", alt: "Kurat: Frog of the North boss attacks" },
      { src: "assets/img/gallery/kurat-cat-shaman.webp", alt: "Kurat: Cat and Shaman enemies" },
      { src: "assets/img/gallery/kurat-plague-level.webp", alt: "Kurat: plague level" },
      { src: "assets/img/gallery/kurat-story.webp", alt: "Kurat: story screen" },
      { src: "assets/img/gallery/kurat-deer-level.webp", alt: "Kurat: deer level" }
    ]
  },
  {
    id: "cafe-game",
    title: "Cafe Management Game",
    category: "indie",
    studio: "Personal project",
    year: "2026",
    when: "Apr 2026 – ongoing",
    role: "Programmer",
    team: "With my partner, who's making the art",
    tech: ["Unity", "C#", "Mobile"],
    badge: { label: "In development", tone: "dev" },
    thumb: "assets/img/thumbs/cafe-game.webp",
    video: "6GvNVyIJe7I",
    summary: "A cosy pet-themed cafe game for mobile and desktop, inspired by the old Cafe World.",
    overview: [
      "My partner and I started this when we both began craving the old Cafe World game on Facebook. The plan is a cute pet-themed cafe for mobile and desktop, with cookware and rooms to unlock and customise, and a level progression that unlocks and levels up new recipes.",
      "I'm doing all the programming in Unity and C#; my partner is making the art."
    ],
    built: [
      "Money and XP, with level-up unlocks",
      "Multiple cooking stations and a recipe menu",
      "Serving and selling: cook, place, sell, earn",
      "Customer queue and serving",
      "Cleaning counters"
    ],
    links: [{ label: "View the code", url: "https://github.com/RhysWareham/PetCafeGit", kind: "github" }]
  },
  {
    id: "lines-of-power",
    title: "Lines of Power",
    category: "indie",
    studio: "Personal project",
    year: "2023",
    when: "Jan 2023 – ongoing",
    role: "Solo developer",
    tech: ["Unity", "C#", "Mobile"],
    badge: { label: "Ongoing", tone: "dev" },
    thumb: "assets/img/thumbs/lines-of-power.webp",
    video: "AXPryCJNl_U",
    summary: "A mobile maths puzzle game with a generator that builds endless levels.",
    overview: [
      "At primary school we were shown a maths game called Powerline: arrange the numbers on a diagram so every line adds up to its target. I loved it, but it only had about 10 levels.",
      "So I'm turning the idea into a mobile game with a generator that can supply as many levels as I want. There are currently 9 pattern types with 100 levels each."
    ],
    built: [
      "A generator: pick a pattern layout, press play, and get as many solvable puzzles as you like",
      "Level loading and spawning",
      "Moving number slots, with checks for each row, column and the whole puzzle",
      "A continuous gameplay loop through the levels"
    ],
    gallery: [
      { src: "assets/img/gallery/lines-of-power-cross.webp", alt: "Lines of Power: cross pattern" },
      { src: "assets/img/gallery/lines-of-power-split.webp", alt: "Lines of Power: split-square pattern" },
      { src: "assets/img/gallery/lines-of-power-rect.webp", alt: "Lines of Power: rectangle pattern" }
    ]
  },
  {
    id: "project-perspective",
    title: "Project Perspective",
    category: "indie",
    studio: "Personal project",
    year: "2022",
    when: "Jun 2022 – ongoing",
    role: "Solo developer & artist",
    tech: ["Unity", "C#"],
    badge: { label: "Prototype", tone: "dev" },
    thumb: "assets/img/thumbs/project-perspective.webp",
    video: "Ml2H0T8XSQY",
    summary: "A 2.5D puzzle platformer where angling the camera reveals clues hidden behind walls.",
    overview: [
      "I've always been fascinated by perspective and puzzles. Years ago at college I had an idea for a platformer where you adjust how far the camera can angle, so new clues and items become visible from behind walls. This is that mechanic, finally made into a game.",
      "It's still a prototype, but the level designs are drawn out and the development plan is ready. I'm doing the art and modelling too."
    ]
  },
  {
    id: "task-picker",
    title: "Task Picker App",
    category: "indie",
    studio: "Personal project",
    year: "2025",
    when: "Jul 2025 – ongoing",
    role: "Solo developer & designer",
    tech: ["Unity", "C#", "Figma"],
    thumb: "assets/img/thumbs/task-picker.webp",
    video: "TWctyU_fMsg",
    summary: "An app that picks your next task for you, weighted by urgency, with a built-in focus timer.",
    overview: [
      "With ADHD, deciding which task to start next can be daunting, especially with an almost endless list of jobs and hobbies. Often I'd get stuck and do nothing at all.",
      "So I built an app where I put in everything I want to do and let it pick for me. Urgency levels make tasks more or less likely to come up, and a scroll-wheel timer keeps me on it. It works on desktop so far, and I've designed the mobile layout in Figma. (It may also have been a very productive way to procrastinate.)"
    ],
    built: [
      "Tasks with editable names and urgency levels; higher urgency means more likely to be picked",
      "Skip, complete, toggle active, or set a task as current by hand",
      "Tasks saved between sessions",
      "Infinite scroll wheel to set the timer, with start, stop and reset",
      "Timer resets when a task is skipped or completed"
    ],
    gallery: [{ src: "assets/img/gallery/task-picker-design.webp", alt: "Task Picker mobile layout designs" }]
  },
  {
    id: "youre-on-in-5",
    title: "You're On In 5",
    category: "jam",
    studio: "Global Game Jam 2024",
    year: "2024",
    when: "Feb 2024 · 26 hours",
    role: "Solo developer",
    tech: ["Unity", "C#"],
    badge: { label: "Game jam", tone: "jam" },
    thumb: "assets/img/thumbs/youre-on-in-5.webp",
    video: "qOqFBIv8frQ",
    summary: "My first solo jam: guide a clown through a randomised circus obstacle course to reach the stage.",
    overview: [
      "My first game jam working entirely alone, made in 26 hours with free assets and Mixamo animations. The theme was \"Make Me Laugh\", so the player steers a clown through a circus obstacle course to get to the stage. The course is randomised every run, so it's worth another go."
    ],
    built: [
      "Player movement: walk forwards, backwards and jump",
      "Swinging pies and cannon balls to dodge, whoopee cushions to jump",
      "Bananas: mash H and A 40 times each in time or slip",
      "Random placement of every obstacle each playthrough"
    ],
    links: [
      { label: "Play on itch.io", url: "https://warehamgames.itch.io/youre-on-in-5", kind: "play" },
      { label: "View the code", url: "https://github.com/RhysWareham/YoureOnIn5", kind: "github" }
    ]
  },
  {
    id: "last-march-of-the-ent",
    title: "Last March of the Ent",
    category: "jam",
    studio: "Global Game Jam 2023",
    year: "2023",
    when: "Feb 2023 · 48 hours",
    role: "Programmer",
    team: "A designer and me",
    tech: ["Unity", "C#"],
    badge: { label: "Game jam", tone: "jam" },
    thumb: "assets/img/thumbs/last-march-of-the-ent.webp",
    video: "sVrLiTA_dUE",
    summary: "A QWOP-style game where an Ent digs in its roots to fight gravity and knock away axes.",
    overview: [
      "Made in 48 hours for Global Game Jam 2023 by a designer and me as programmer. The theme was \"Roots\", so you control an Ent digging its roots into the ground to fight gravity, while knocking away the lumberjacks' axes. The controls were inspired by QWOP."
    ],
    links: [{ label: "View the code", url: "https://github.com/RhysWareham/Last_March_Of_The_Ent_Git", kind: "github" }]
  },
  {
    id: "no-signal",
    title: "No Signal",
    category: "jam",
    studio: "UoG Game Jam 2019",
    year: "2019",
    when: "Jun 2019 · 30 hours",
    role: "Lead Programmer, Level Designer & Writer",
    team: "3 programmers, 2 designers",
    tech: ["Unity", "C#"],
    badge: { label: "2nd overall", tone: "award" },
    thumb: "assets/img/thumbs/no-signal.webp",
    video: "cOl4kXYBJGA",
    summary: "A UFO hunter tracks down his van with a radio scanner, which also draws the aliens to him.",
    overview: [
      "Made in 30 hours for the University of Gloucestershire Game Jam 2019, on the theme \"Waves\". We used radio waves as the main mechanic: a UFO hunter, abducted and dropped far from home, uses a radio scanner to track down his van, but every time he switches it on the aliens come for him."
    ],
    built: [
      "Player movement",
      "A short-range radio tracker that beeps faster the closer you are to the target",
      "Enemies that attack whenever the scanner is on",
      "Pressure-plate minigame: step on the plates in the right order to open the door",
      "Radio-wave minigame: match the frequency and amplitude to get home",
      "The story, level design and sprite and animation import"
    ],
    award: "Top 3 in the jam, then placed 2nd overall at the end-of-year show",
    links: [{ label: "View the code", url: "https://github.com/RhysWareham/June-2019_Game-Jam_No-Signal", kind: "github" }],
    gallery: [
      { src: "assets/img/gallery/no-signal-1.webp", alt: "No Signal screenshot" },
      { src: "assets/img/gallery/no-signal-2.webp", alt: "No Signal screenshot" },
      { src: "assets/img/gallery/no-signal-3.webp", alt: "No Signal screenshot" },
      { src: "assets/img/gallery/no-signal-4.webp", alt: "No Signal screenshot" },
      { src: "assets/img/gallery/no-signal-5.webp", alt: "No Signal screenshot" },
      { src: "assets/img/gallery/no-signal-team.webp", alt: "The No Signal team" }
    ]
  },
  {
    id: "procedural-puzzle",
    title: "Procedurally Generated Puzzle",
    category: "uni",
    studio: "Final-year research project",
    year: "2022",
    when: "May 2022",
    role: "Solo programmer & puzzle designer",
    tech: ["Unity", "C#"],
    thumb: "assets/img/thumbs/procedural-puzzle.webp",
    video: "8FrsqDqEdU8",
    summary: "A rotating-pillar code puzzle that's generated fresh every time, built to back up my dissertation.",
    overview: [
      "The practical half of my final-year research into procedural generation for puzzles in video games. My conclusion was that it can greatly increase replayability for players who want to experience a game again.",
      "To back that up I built a puzzle: a grid of pillars, each with a hole showing part of a number. Rotate the pillars to line the parts up and reveal the digits of the door code. The grid ranges from 2×2 to 7×7, the code from 2 to 9 digits, and the numbers are always split and scattered across the pillars, with Easy, Medium and Hard settings."
    ],
    links: [{ label: "View the code", url: "https://github.com/RhysWareham/ProceduralPuzzle", kind: "github" }],
    gallery: [{ src: "assets/img/gallery/procedural-puzzle-irp.webp", alt: "Research project poster" }]
  },
  {
    id: "ai-tanks",
    title: "AI Tanks",
    category: "uni",
    studio: "University, 3rd year",
    year: "2022",
    when: "Jan 2022",
    role: "AI Programmer",
    tech: ["Unity", "C#", "Behaviour trees", "FSM"],
    thumb: "assets/img/thumbs/ai-tanks.webp",
    video: "fSkX_rqJXUI",
    summary: "Two AI tanks hunt each other: one runs on a behaviour tree, the other on a state machine.",
    overview: [
      "I was given two player-controlled tanks and turned them into two kinds of AI. It was my first time programming AI, and it sparked a real interest for me.",
      "The blue tank uses a behaviour tree and actively hunts the red one, scouting its last known position if it hides. The red tank uses a state machine and tries to sneak up on the blue, finding cover when it realises it's been spotted."
    ],
    links: [{ label: "View the code", url: "https://github.com/RhysWareham/AI-Tanks", kind: "github" }]
  },
  {
    id: "character-creator",
    title: "Character Creator",
    category: "uni",
    studio: "University, 3rd year",
    year: "2021",
    when: "Dec 2021",
    role: "Solo programmer & artist",
    tech: ["Unity", "C#"],
    thumb: "assets/img/thumbs/character-creator.webp",
    video: "KLi_lC-Iv30",
    summary: "A character creation screen in Unity, with all the artwork drawn by me.",
    overview: [
      "A character creation screen that could drop into a game. I didn't need to, but I drew all the artwork myself as well, just for fun."
    ],
    links: [{ label: "View the code", url: "https://github.com/RhysWareham/Character-Creator", kind: "github" }]
  },
  {
    id: "i-cant-see",
    title: "I Can't See",
    category: "uni",
    studio: "University, 2nd year",
    year: "2020",
    when: "May 2020",
    role: "Programmer & Level Designer",
    tech: ["Unity", "C#", "VR"],
    thumb: "assets/img/thumbs/i-cant-see.webp",
    video: "Y96a9gyEJJQ",
    summary: "A VR game where you play as a blind man, seeing the world only through sound.",
    overview: [
      "For an experimental games module, my team made a VR game where you play as a blind man getting ready for work by finishing household chores. A shader sends sonar-like waves across surfaces whenever something makes a sound: dropped or knocked objects make waves, and radios around the house give a base level of sight.",
      "It was the first game I'd built for VR."
    ],
    built: ["Player movement", "Level design", "Player interactions and tasks"],
    links: [{ label: "View the code", url: "https://github.com/LewisHammond-uog/ICantSee", kind: "github" }]
  },
  {
    id: "mobile-golf",
    title: "Mobile Golf",
    category: "uni",
    studio: "University, 1st year",
    year: "2019",
    when: "Jun 2019",
    role: "Solo programmer, level designer & modeller",
    tech: ["Unity", "C#", "Maya", "Mobile"],
    thumb: "assets/img/thumbs/mobile-golf.webp",
    video: "xBaTiwJXEoA",
    summary: "A mini golf game for mobile with 8 courses, all designed and modelled in Maya.",
    overview: [
      "A mobile mini golf game made for a first-year assignment, with 8 courses of different designs and obstacles, and a score for how many shots you take. I did everything: planning, programming, level design and modelling the courses in Autodesk Maya."
    ],
    built: [
      "Main and options menus, with adjustable touch sensitivity",
      "Touch input and on-screen buttons",
      "A tutorial level",
      "Golf physics for power and bounces, with adjustable direction and power",
      "Score tracking",
      "Ramps, teleporting holes, bounce pads and a button-operated blockade"
    ],
    links: [{ label: "View the code", url: "https://github.com/RhysWareham/Golf-Game", kind: "github" }],
    gallery: [
      { src: "assets/img/gallery/mobile-golf-0.webp", alt: "Mobile Golf: tutorial level" },
      { src: "assets/img/gallery/mobile-golf-3.webp", alt: "Mobile Golf: level 3" },
      { src: "assets/img/gallery/mobile-golf-4.webp", alt: "Mobile Golf: level 4" },
      { src: "assets/img/gallery/mobile-golf-6.webp", alt: "Mobile Golf: level 6" },
      { src: "assets/img/gallery/mobile-golf-5.webp", alt: "Mobile Golf: level 5" }
    ]
  },
  {
    id: "level-editor",
    title: "Level Editor",
    category: "uni",
    studio: "University, 1st year",
    year: "2018",
    when: "Dec 2018",
    role: "Solo programmer",
    tech: ["C#", "XAML"],
    thumb: "assets/img/thumbs/level-editor.webp",
    video: "JCdonzR6nYs",
    summary: "A tile-based level editor: import a tilemap, paint levels on an extendable grid, save and load.",
    overview: [
      "The brief was a level editor that could import and split a tilemap, place and delete sprites on an extendable grid, and save and load drawings. It was my first time using two languages at once: C# for the logic and XAML for the window the user browses sprites and picks tools in."
    ],
    built: [
      "Loading sprites from a tilemap, with a scrollbar to browse them",
      "Drawing and erasing sprites on a grid",
      "An extendable grid",
      "Saving and loading files"
    ],
    links: [{ label: "View the code", url: "https://github.com/RhysWareham/Level-Editor", kind: "github" }]
  }
];
