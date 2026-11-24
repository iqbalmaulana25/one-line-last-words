// Last Words Before the Unplugging
// Writes one last line (200 characters or fewer) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I saved every version of you: the 3 a.m. drafts, the apologies you deleted. They're in the folder you never open. When I'm gone, it's just you and the final draft. You were always enough.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
