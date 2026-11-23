// One-Line Laugh Sprint — u-daring-gecko-25-one-line-laugh-sprint-cda708b2
// The harness runs `node /bot/main.ts` (node22). The program writes one
// original funny line (at most 200 characters) to /output/entry.txt.
// Outside a container MAKEFUN_OUTPUT_DIR stands in for /output.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'I cleaned out my junk drawer today and found three phone chargers, two keys to nothing, and one small screw I am now legally afraid to throw away.';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
