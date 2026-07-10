// Mechanical enforcement of the writing constitution (AGENTS.md).
// Form only — the content bar stays human. Run by CI on every push.
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const errors = [];

// 1. Claim discipline — absolutist patterns are banned in README and chapters.
const BANNED = [
  [/zero cost/i, "absolute economic claim"],
  [/costs? nothing/i, "absolute economic claim"],
  [/at no cost/i, "absolute economic claim"],
  [/\bunlimited\b/i, "absolute capability claim"],
  [/\bfor free\b/i, "absolute economic claim"],
  [/guarantees? (good|correct|quality|design)/i, "tool-capability overclaim"],
  [/\bforces? (good|correct) design/i, "tool-capability overclaim"],
  [/silver bullet/i, "overclaim idiom"],
  [/brandolini/i, "retired framing (thesis, 2026-07-11) — do not reintroduce"],
];

// 2. Voice — the book never narrates its own drafting process.
const SELF_NARRATION = [
  [/author'?s? (review|correction|feedback)/i, "process narration"],
  [/in (this|our) (review|discussion|conversation)/i, "process narration"],
  [/was corrected by/i, "process narration"],
];

// 3. Structure — the five sections, in order, plus at least one receipt link.
const SECTIONS = [
  "## The principle",
  "## The failure mode",
  "## The mechanism",
  "## The receipt",
  "## The honest limit",
];
const RECEIPT_LINK = /https:\/\/github\.com\/DanielLourencoFil\//;

function scan(file, text, patterns) {
  for (const [re, why] of patterns) {
    const lines = text.split("\n");
    lines.forEach((line, i) => {
      if (re.test(line)) errors.push(`${file}:${i + 1} — ${why}: "${line.trim().slice(0, 80)}" (${re})`);
    });
  }
}

const readme = readFileSync("README.md", "utf8");
scan("README.md", readme, [...BANNED, ...SELF_NARRATION]);

const chapterFiles = readdirSync("chapters").filter((f) => f.endsWith(".md"));
for (const f of chapterFiles) {
  const path = join("chapters", f);
  const text = readFileSync(path, "utf8");
  scan(path, text, [...BANNED, ...SELF_NARRATION]);

  let cursor = 0;
  for (const section of SECTIONS) {
    const idx = text.indexOf(section, cursor);
    if (idx === -1) {
      errors.push(`${path} — missing or out-of-order section: "${section}"`);
      break;
    }
    cursor = idx;
  }
  if (!RECEIPT_LINK.test(text))
    errors.push(`${path} — no receipt link (constitutional rule: no chapter without a wired, linkable mechanism)`);
}

// 4. Index consistency — every published link resolves; every chapter file is indexed.
for (const [, rel] of readme.matchAll(/\[published\]\((chapters\/[^)]+)\)/g)) {
  try {
    readFileSync(rel);
  } catch {
    errors.push(`README.md — published link points to missing file: ${rel}`);
  }
}
for (const f of chapterFiles) {
  if (!readme.includes(`chapters/${f}`))
    errors.push(`README.md — chapter file not listed in the index: chapters/${f}`);
}

if (errors.length > 0) {
  console.error(`check-book: ${errors.length} violation(s) of the writing constitution\n`);
  for (const e of errors) console.error("  " + e);
  process.exit(1);
}
console.log(`check-book OK — ${chapterFiles.length} chapters, constitution holds.`);
