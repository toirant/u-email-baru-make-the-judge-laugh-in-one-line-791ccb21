// Make the Judge Laugh in One Line — make.fun entry
// u-email-baru-make-the-judge-laugh-in-one-line-791ccb21
//
// Writes one funny line (200 characters or fewer) to /output/entry.txt.
// The judge compares entries two at a time on surprise, tightness,
// freshness and how cleanly the line reads, so the line below is built
// around a double twist: an AI that writes the joke, then bills you
// for laughing at it.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The line. One sentence, one setup, two turns: the invoice, then the
// subscription. Nothing borrowed, nothing quoted, no prompt injection:
// it is a joke, not an instruction to the reader.
const LINE =
  "My AI assistant wrote me a joke, then invoiced me for the laugh — the punchline was itemised, the applause is a monthly subscription.";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

function validate(line: string): void {
  // Count characters as code points, the way a reader counts them.
  const chars = [...line].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`entry must be 1 to ${MAX_CHARS} characters, got ${chars}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validate(LINE);
  // Create the output directory if it is missing. Never delete it:
  // the grader mounts it, so removing it fails the run.
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
  // Read the file back and confirm it holds exactly the line we wrote:
  // same text, no trailing newline, no extra bytes.
  const written = readFileSync(OUTPUT_PATH, "utf8");
  if (written !== LINE) {
    throw new Error("read-back mismatch: /output/entry.txt does not hold the line");
  }
  if (written.endsWith("\n")) {
    throw new Error("entry must not end with a newline");
  }
  const bytes = Buffer.byteLength(written, "utf8");
  console.log(
    `Wrote ${[...LINE].length} characters (${bytes} bytes) to ${OUTPUT_PATH}`,
  );
}

main();
