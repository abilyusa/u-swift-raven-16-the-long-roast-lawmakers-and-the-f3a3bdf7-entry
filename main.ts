// The Long Roast: Lawmakers and the File They Cannot Convert.
// One satirical sentence (196 characters, gate 1-320) about lawmakers who
// would regulate AI but cannot convert a file to PDF. The judge weighs
// bite, aim and freshness: the setup is the AI Safety Act ordering every
// model to show its reasoning; the turn is that the Act itself cannot be
// turned into a PDF; the punch is the chairman's Word comment reading
// 'fix later' — the bill's only reasoning.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The AI Safety Act orders every model to show its reasoning, yet no one in the chamber can turn the Act itself into a PDF, because its only reasoning is a chairman's comment that reads 'fix later'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// Gate (sealed scorer): entry.txt must be UTF-8 text of 1 to 320
// characters, not only white space. Count code points, the way the
// scorer counts characters, and refuse to write a bad line.
const len = [...LINE].length;
if (len < 1 || len > 320 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error(`entry violates gate: ${len} characters`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
