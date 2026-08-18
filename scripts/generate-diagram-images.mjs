// Regenerates the static PDF diagram images from live Mermaid output.
// Requires the dev server running (npm run dev) and is only needed
// again if the diagrams in src/data/case-study.ts change.
import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 700, height: 1200 } });

await page.goto('http://localhost:4321/diagram-source', { waitUntil: 'networkidle' });
await page.waitForFunction(() => document.querySelectorAll('.mermaid svg').length >= 3, { timeout: 15000 });
await page.waitForTimeout(300);

const targets = [
	{ id: 'ist-process', file: 'public/diagram-ist-prozess.png' },
	{ id: 'soll-process', file: 'public/diagram-soll-konzept.png' },
	{ id: 'gantt-chart', file: 'public/diagram-projektplanung.png' },
];

for (const t of targets) {
	const el = page.locator(`#${t.id}`).locator('..');
	await el.screenshot({ path: t.file });
	console.log(t.file, 'saved');
}

await browser.close();
