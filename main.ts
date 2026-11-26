import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "v3.2.0: Fixed bug where walking through a doorway wiped the reason you went in. Intent is now cached before the threshold loads.";

// One line, no trailing newline: the gate counts every character.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
