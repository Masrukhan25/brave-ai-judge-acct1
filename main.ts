import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Night Stairs: a small first-person scene — fear, a patient wait,
// the dark holding steady, and one small brave step at the end.
const TEXT = `The hallway light went out on the third step.
I stood still, one hand on the rail.
The dark said nothing. It did not move.
My palm found the rail again, cool and steady.
Below, the kitchen door stood open.
The step below was where it had always been.
I took it.`;

const outDir = (process.env.MAKEFUN_OUTPUT_DIR || "").trim() || "/output";
// The entry must be 1-280 characters (UTF-8 code points), not only whitespace,
// and its line breaks must stay plain newlines.
if (
  TEXT.length < 1 ||
  TEXT.length > 280 ||
  TEXT.trim().length === 0 ||
  TEXT.includes("\r")
) {
  throw new Error("entry must be 1-280 characters");
}

mkdirSync(outDir, { recursive: true });
// Write the text exactly as written: 7 lines, no trailing newline.
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
