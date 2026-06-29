const brandName = document.getElementById("brandName");
const industry = document.getElementById("industry");
const mood = document.getElementById("mood");
const feeling = document.getElementById("feeling");

const generateBtn = document.getElementById("generate");
const saveBtn = document.getElementById("save");
const clearBtn = document.getElementById("clear");

const resultName = document.getElementById("resultName");
const tagline = document.getElementById("tagline");
const score = document.getElementById("score");
const palette = document.getElementById("palette");
const fontTitle = document.getElementById("fontTitle");
const fontText = document.getElementById("fontText");
const keywords = document.getElementById("keywords");
const strategy = document.getElementById("strategy");
const preview = document.getElementById("preview");
const previewLogo = document.getElementById("previewLogo");
const previewLabel = document.getElementById("previewLabel");
const previewTitle = document.getElementById("previewTitle");
const previewText = document.getElementById("previewText");
const previewButton = document.getElementById("previewButton");
const miniTitle = document.getElementById("miniTitle");
const miniText = document.getElementById("miniText");
const cssExport = document.getElementById("cssExport");
const copyCss = document.getElementById("copyCss");
const copyPalette = document.getElementById("copyPalette");
const savedList = document.getElementById("savedList");
const toast = document.getElementById("toast");

const data = {
  fashion: {
    names: ["Noir Atelier", "Maison Vela", "Aure Studio", "Elan Archive"],
    lines: ["A fashion identity built around contrast, movement and quiet confidence."],
    labels: ["Fashion / Editorial", "Atelier / Concept"]
  },
  hotel: {
    names: ["Lumen Hotel", "Velora Suites", "Aurum Residence", "Nocturne Stay"],
    lines: ["A hospitality concept shaped by atmosphere, calm and elevated detail."],
    labels: ["Luxury Hotel / Identity", "Hospitality / Concept"]
  },
  perfume: {
    names: ["Scent Atlas", "Velora Parfum", "Noir Essence", "Aure Scent"],
    lines: ["A sensory brand direction designed to feel intimate, mysterious and memorable."],
    labels: ["Perfume House / Identity", "Fragrance / Concept"]
  },
  architecture: {
    names: ["Lumen Atelier", "Forma Space", "Aure Interior", "Noir Architecture"],
    lines: ["An architectural identity built around space, texture, precision and restraint."],
    labels: ["Architecture / Interior", "Spatial Design / Concept"]
  },
  coffee: {
    names: ["Moro Coffee", "Aster Roast", "Noir Brew", "Luma Café"],
    lines: ["A warm brand concept made for ritual, intimacy and daily connection."],
    labels: ["Coffee Brand / Identity", "Cafe / Concept"]
  },
  tech: {
    names: ["Nexa AI", "Orbit Lab", "Signal OS", "Auralis"],
    lines: ["A digital product identity focused on clarity, trust and intelligent simplicity."],
    labels: ["Tech Product / System", "AI / Interface"]
  }
};

const moods = {
  luxury: {
    palette: ["#050505", "#17130F", "#BFA46F", "#E9DFC8", "#6D5B45"],
    font: "Cormorant Garamond / Inter",
    fontDesc: "A luxurious serif display paired with a precise modern sans-serif.",
    words: ["Elegant", "Refined", "Premium", "Timeless", "Quiet"],
    previewFont: "'Cormorant Garamond', serif"
  },
  minimal: {
    palette: ["#F5F1EA", "#D8D0C3", "#8C877D", "#242424", "#070707"],
    font: "Inter / Serif Accent",
    fontDesc: "Minimal typography with clean hierarchy and subtle editorial warmth.",
    words: ["Clean", "Balanced", "Clear", "Calm", "Structured"],
    previewFont: "'Inter', sans-serif"
  },
  editorial: {
    palette: ["#090909", "#FFFFFF", "#C6BFB7", "#766B62", "#2C2825"],
    font: "Playfair Display / Inter",
    fontDesc: "Magazine-inspired typography with high contrast and dramatic rhythm.",
    words: ["Bold", "Artistic", "Editorial", "Sharp", "Expressive"],
    previewFont: "'Playfair Display', serif"
  },
  dark: {
    palette: ["#020202", "#0E1118", "#242A38", "#8B93A5", "#E7EAF0"],
    font: "Cormorant Garamond / Inter",
    fontDesc: "Cinematic serif typography with a dark, immersive interface direction.",
    words: ["Cinematic", "Mysterious", "Immersive", "Deep", "Magnetic"],
    previewFont: "'Cormorant Garamond', serif"
  },
  warm: {
    palette: ["#281611", "#7A4932", "#C4895D", "#F0D5B5", "#FFF7EC"],
    font: "Georgia / Inter",
    fontDesc: "Warm editorial typography made for human, intimate brand experiences.",
    words: ["Warm", "Human", "Organic", "Soft", "Inviting"],
    previewFont: "Georgia, serif"
  }
};

const feelings = {
  trust: {
    words: ["Reliable", "Clear", "Grounded"],
    title: "Clarity creates trust.",
    note: "The visual system should reduce noise, guide attention and make every interaction feel considered."
  },
  desire: {
    words: ["Desirable", "Sensory", "Elegant"],
    title: "Designed to be desired.",
    note: "The identity should create emotional pull through contrast, atmosphere and carefully controlled visual rhythm."
  },
  calm: {
    words: ["Calm", "Soft", "Balanced"],
    title: "Quiet systems feel stronger.",
    note: "Spacing, hierarchy and restrained color choices should create a calm experience that feels effortless."
  },
  power: {
    words: ["Confident", "Sharp", "Strong"],
    title: "Confidence lives in restraint.",
    note: "A strong brand does not need to be loud. It needs clear hierarchy, decisive contrast and intentional details."
  },
  mystery: {
    words: ["Mysterious", "Deep", "Memorable"],
    title: "The best identities leave space.",
    note: "The system should reveal enough to attract attention while leaving room for curiosity and interpretation."
  }
};

let currentConcept = null;

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function showToast(text = "Copied") {
  toast.textContent = text;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1300);
}

function readableText(hex) {
  const cleaned = hex.replace("#", "");
  const r = parseInt(cleaned.substr(0, 2), 16);
  const g = parseInt(cleaned.substr(2, 2), 16);
  const b = parseInt(cleaned.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 150 ? "#050505" : "#ffffff";
}

function buildConcept() {
  const chosenIndustry = industry.value;
  const chosenMood = mood.value;
  const chosenFeeling = feeling.value;

  const industryData = data[chosenIndustry];
  const moodData = moods[chosenMood];
  const feelingData = feelings[chosenFeeling];

  const name = brandName.value.trim() || randomItem(industryData.names);

  const allWords = [
    ...moodData.words,
    ...feelingData.words,
    chosenIndustry.replace("-", " ")
  ];

  const finalScore = Math.floor(86 + Math.random() * 13);

  return {
    name,
    industry: chosenIndustry,
    mood: chosenMood,
    feeling: chosenFeeling,
    label: randomItem(industryData.labels),
    tagline: industryData.lines[0],
    score: finalScore,
    palette: moodData.palette,
    font: moodData.font,
    fontDesc: moodData.fontDesc,
    words: [...new Set(allWords)].slice(0, 8),
    strategy: feelingData.note,
    previewTitle: feelingData.title,
    previewText: `A ${chosenMood} ${chosenIndustry} concept shaped by ${feelingData.words[0].toLowerCase()}, atmosphere and carefully crafted visual decisions.`,
    previewFont: moodData.previewFont
  };
}

function renderPalette(colors) {
  palette.innerHTML = "";

  colors.forEach(color => {
    const box = document.createElement("div");
    box.className = "color";
    box.style.background = color;
    box.style.color = readableText(color);

    const label = document.createElement("span");
    label.textContent = color;

    box.addEventListener("click", async () => {
      await navigator.clipboard.writeText(color);
      label.textContent = "Copied";
      showToast(color + " copied");
      setTimeout(() => label.textContent = color, 900);
    });

    box.appendChild(label);
    palette.appendChild(box);
  });
}

function renderKeywords(words) {
  keywords.innerHTML = "";
  words.forEach(word => {
    const span = document.createElement("span");
    span.textContent = word;
    keywords.appendChild(span);
  });
}

function createCss(concept) {
  return `:root {
  --brand-bg: ${concept.palette[0]};
  --brand-surface: ${concept.palette[1]};
  --brand-accent: ${concept.palette[2]};
  --brand-text: ${concept.palette[3]};
  --brand-muted: ${concept.palette[4]};
  --brand-display-font: ${concept.previewFont};
}

/* Generated by BrandLab AI */
.brand-section {
  background: var(--brand-bg);
  color: var(--brand-text);
}

.brand-button {
  background: var(--brand-accent);
  color: var(--brand-bg);
}`;
}

function renderConcept(concept) {
  currentConcept = concept;

  resultName.textContent = concept.name;
  tagline.textContent = concept.tagline;
  score.textContent = concept.score;

  fontTitle.textContent = concept.font;
  fontText.textContent = concept.fontDesc;

  strategy.textContent = concept.strategy;

  previewLogo.textContent = concept.name.split(" ")[0].toUpperCase();
  previewLabel.textContent = concept.label;
  previewTitle.textContent = concept.previewTitle;
  previewText.textContent = concept.previewText;
  previewButton.textContent = concept.industry === "hotel" ? "Book Experience" : "Explore Identity";

  miniTitle.textContent = concept.previewTitle;
  miniText.textContent = concept.previewText;

  preview.style.setProperty("--preview-bg", concept.palette[0]);
  preview.style.setProperty("--preview-accent", concept.palette[2]);
  preview.style.setProperty("--preview-text", concept.palette[3]);
  preview.style.setProperty("--preview-light", concept.palette[2] + "55");
  preview.style.setProperty("--preview-font", concept.previewFont);

  document.documentElement.style.setProperty("--accent", concept.palette[2]);

  renderPalette(concept.palette);
  renderKeywords(concept.words);

  cssExport.textContent = createCss(concept);
}

function saveConcept() {
  if (!currentConcept) return;

  const saved = JSON.parse(localStorage.getItem("brandlabConcepts")) || [];
  saved.unshift({
    name: currentConcept.name,
    mood: currentConcept.mood,
    score: currentConcept.score
  });

  localStorage.setItem("brandlabConcepts", JSON.stringify(saved.slice(0, 6)));
  renderSaved();
  showToast("Concept saved");
}

function renderSaved() {
  const saved = JSON.parse(localStorage.getItem("brandlabConcepts")) || [];
  savedList.innerHTML = "";

  if (saved.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No saved concepts yet.";
    savedList.appendChild(li);
    return;
  }

  saved.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} / ${item.mood} / ${item.score}`;
    savedList.appendChild(li);
  });
}

function clearSaved() {
  localStorage.removeItem("brandlabConcepts");
  renderSaved();
  showToast("Saved cleared");
}

generateBtn.addEventListener("click", () => {
  const concept = buildConcept();
  renderConcept(concept);
});

saveBtn.addEventListener("click", saveConcept);
clearBtn.addEventListener("click", clearSaved);

copyCss.addEventListener("click", async () => {
  await navigator.clipboard.writeText(cssExport.textContent);
  showToast("CSS copied");
});

copyPalette.addEventListener("click", async () => {
  if (!currentConcept) return;
  await navigator.clipboard.writeText(currentConcept.palette.join(", "));
  showToast("Palette copied");
});

brandName.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    renderConcept(buildConcept());
  }
});

renderConcept(buildConcept());
renderSaved();