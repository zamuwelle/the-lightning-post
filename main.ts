import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const entry = "Imagine every town's reading room joined by a post road swift as lightning, so a page can be copied from any room and read in yours before the ink in your letter dries.";
if (!entry.trim() || /[\r\n]/.test(entry) || [...entry].length > 200) {
  throw new Error('Expected one line of at most 200 characters');
}
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), entry, 'utf8');
