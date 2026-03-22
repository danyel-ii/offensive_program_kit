import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, "..");
const repoRoot = appRoot;

const outputPath = path.join(repoRoot, "public", "programData.json");

const DAY_ORDER = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function parseScalar(value) {
  if (value === "true") return true;
  if (value === "false") return false;
  if (/^\d+$/.test(value)) return Number(value);
  return value.replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1");
}

function parseFrontmatter(raw) {
  if (!raw.startsWith("---\n")) {
    return { data: {}, content: raw.trim() };
  }

  const endIndex = raw.indexOf("\n---\n", 4);
  if (endIndex === -1) {
    return { data: {}, content: raw.trim() };
  }

  const block = raw.slice(4, endIndex).trim();
  const content = raw.slice(endIndex + 5).trim();
  const data = {};
  let currentArrayKey = null;

  for (const line of block.split("\n")) {
    if (/^\s*-\s+/.test(line) && currentArrayKey) {
      data[currentArrayKey].push(parseScalar(line.replace(/^\s*-\s+/, "").trim()));
      continue;
    }

    const match = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!match) continue;

    const [, key, value] = match;
    if (value === "") {
      data[key] = [];
      currentArrayKey = key;
    } else {
      data[key] = parseScalar(value.trim());
      currentArrayKey = null;
    }
  }

  return { data, content };
}

function splitSections(content) {
  const lines = content.split("\n");
  const sections = [];
  let title = "";
  let intro = [];
  let current = null;

  for (const line of lines) {
    if (!title && line.startsWith("# ")) {
      title = line.replace(/^#\s+/, "").trim();
      continue;
    }

    const headingMatch = line.match(/^##\s+(.+)$/);
    if (headingMatch) {
      if (current) {
        current.body = current.body.join("\n").trim();
        sections.push(current);
      }
      current = { heading: headingMatch[1].trim(), body: [] };
      continue;
    }

    if (current) {
      current.body.push(line);
    } else {
      intro.push(line);
    }
  }

  if (current) {
    current.body = current.body.join("\n").trim();
    sections.push(current);
  }

  return {
    title,
    intro: intro.join("\n").trim(),
    sections,
  };
}

function createNote(filePath, kind, extra = {}) {
  const raw = read(filePath);
  const { data, content } = parseFrontmatter(raw);
  const parsed = splitSections(content);
  const slug = path.basename(filePath, path.extname(filePath));

  return {
    id: slug,
    slug,
    kind,
    filePath: path.relative(repoRoot, filePath),
    title: parsed.title || slug,
    frontmatter: data,
    intro: parsed.intro,
    markdown: content,
    sections: parsed.sections,
    ...extra,
  };
}

function weekSort(a, b) {
  return Number(a.frontmatter.week || 0) - Number(b.frontmatter.week || 0);
}

function buildWeekData(note) {
  const daySections = DAY_ORDER.map((day) =>
    note.sections.find((section) => section.heading.startsWith(day)),
  ).filter(Boolean);

  return {
    ...note,
    phase: note.frontmatter.phase,
    week: note.frontmatter.week,
    focus: note.frontmatter.primary_focus || [],
    keyTools: note.frontmatter.key_tools || [],
    deliverables: note.frontmatter.deliverables || [],
    daySections,
    overviewSections: note.sections.filter(
      (section) => !DAY_ORDER.some((day) => section.heading.startsWith(day)) && section.heading !== "Friday - Rest",
    ),
  };
}

function listMarkdown(dirPath, kind, mapper) {
  return fs
    .readdirSync(dirPath)
    .filter((file) => file.endsWith(".md"))
    .sort()
    .map((file) => mapper(createNote(path.join(dirPath, file), kind)));
}

const overview = createNote(path.join(repoRoot, "generated_program", "00_program_overview.md"), "overview");
const phases = [
  createNote(path.join(repoRoot, "generated_program", "01_phase_0_foundations.md"), "phase", {
    range: "Weeks 1-4",
  }),
  createNote(path.join(repoRoot, "generated_program", "02_phase_1_offensive_entry.md"), "phase", {
    range: "Weeks 5-8",
  }),
  createNote(path.join(repoRoot, "generated_program", "03_phase_2_intermediate_exploitation.md"), "phase", {
    range: "Weeks 9-14",
  }),
  createNote(path.join(repoRoot, "generated_program", "04_phase_3_oscp_track.md"), "phase", {
    range: "Weeks 15-24",
  }),
];

const weeks = listMarkdown(
  path.join(repoRoot, "generated_program", "weeks"),
  "week",
  (note) => buildWeekData(note),
).sort(weekSort);

const resources = listMarkdown(
  path.join(repoRoot, "generated_obsidian_vault", "80_Resources"),
  "resource",
  (note) => note,
);

const tools = listMarkdown(
  path.join(repoRoot, "generated_obsidian_vault", "60_Tools"),
  "tool",
  (note) => note,
);

const concepts = listMarkdown(
  path.join(repoRoot, "generated_obsidian_vault", "70_Concepts"),
  "concept",
  (note) => note,
);

const admin = [
  createNote(path.join(repoRoot, "generated_program", "05_resource_map.md"), "admin"),
  createNote(path.join(repoRoot, "generated_program", "06_tool_progression.md"), "admin"),
  createNote(path.join(repoRoot, "generated_program", "07_milestones_and_checkpoints.md"), "admin"),
  createNote(path.join(repoRoot, "generated_program", "08_missed_session_protocol.md"), "admin"),
  createNote(path.join(repoRoot, "generated_program", "99_self_audit.md"), "admin"),
];

const toolRows = [
  { label: "FOUND", value: "NMAP BURP" },
  { label: "ENTRY", value: "FFUF GOBUST" },
  { label: "MID", value: "LINPEAS WIN" },
  { label: "TRACK", value: "NETCAT RPT" },
];

const payload = {
  generatedAt: new Date().toISOString(),
  dayOrder: DAY_ORDER,
  overview,
  phases,
  weeks,
  resources,
  tools,
  concepts,
  admin,
  cadence: [
    { day: "Saturday", active: "240m", elapsed: "270m" },
    { day: "Sunday", active: "240m", elapsed: "270m" },
    { day: "Monday", active: "120m", elapsed: "130m" },
    { day: "Tuesday", active: "120m", elapsed: "130m" },
    { day: "Wednesday", active: "240m", elapsed: "270m" },
    { day: "Thursday", active: "120m", elapsed: "130m" },
    { day: "Friday", active: "Rest", elapsed: "Rest" },
  ],
  toolRows,
};

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(payload, null, 2));
console.log(`Wrote ${outputPath}`);
