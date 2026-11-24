// One Sentence for a Traveler from 1800 — make.fun entry
// One sentence, at most 200 characters, explaining the modern internet to
// someone who has just stepped out of the year 1800. It uses only words
// the traveler could know — no word coined after their time, no list of
// features, just a picture they could hold in their head.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "Imagine every letter ever written, every song ever sung, and every face you have ever known, all kept in one great library that answers the moment you ask.";
const MAX_CHARS = 200;

// The gate: a single sentence within the limit (counted in code points).
const chars = [...ENTRY].length;
if (chars > MAX_CHARS) {
  throw new Error(`entry is ${chars} chars, over the ${MAX_CHARS} limit`);
}
if (ENTRY.includes("\n")) throw new Error("entry must be a single line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
// Read-back: what landed on disk must be exactly the gated entry.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== ENTRY + "\n") throw new Error("read-back mismatch in /output/entry.txt");
console.log(`wrote ${chars} chars to /output/entry.txt`);
