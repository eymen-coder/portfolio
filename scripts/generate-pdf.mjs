// Renders src/pages/case-study-print.astro to the downloadable PDF at
// public/sap-case-study.pdf. Requires the dev server running (npm run dev).
// If the diagrams in src/data/case-study.ts changed, run
// `npm run pdf:diagrams` first to refresh the diagram images.
import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto('http://localhost:4321/case-study-print', { waitUntil: 'networkidle' });
await page.waitForFunction(
	() => Array.from(document.images).every((img) => img.complete && img.naturalWidth > 0),
	{ timeout: 15000 },
);
await page.waitForTimeout(300);

await page.pdf({
	path: 'public/sap-case-study.pdf',
	format: 'A4',
	printBackground: true,
	margin: { top: '20mm', bottom: '16mm', left: '20mm', right: '20mm' },
	displayHeaderFooter: true,
	headerTemplate: '<div></div>',
	footerTemplate: `
		<div style="font-size:8px; color:#6b6b68; width:100%; padding:0 20mm; display:flex; justify-content:space-between; font-family:Arial,Helvetica,sans-serif;">
			<span>Eymen Gülmez · SAP S/4HANA Case Study</span>
			<span><span class="pageNumber"></span> / <span class="totalPages"></span></span>
		</div>
	`,
});

console.log('PDF generated');
await browser.close();
