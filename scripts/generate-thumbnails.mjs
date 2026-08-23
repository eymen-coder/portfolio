import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const W = 960;
const H = 480;
const paper = '#15130f';
const line = '#2c2820';
const accent = '#f0a94e';
const nebula = '#8b8cf0';
const ink = '#f5f0e6';

const font = 'font-family="General Sans, Arial, sans-serif"';

function wrap(svgInner) {
	return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
		<rect width="${W}" height="${H}" fill="${paper}" />
		${svgInner}
	</svg>`;
}

function tagLine(text, y) {
	return `
		<circle cx="76" cy="${y - 5}" r="4" fill="${accent}" />
		<text x="92" y="${y}" font-size="17" fill="${ink}" fill-opacity="0.6" ${font}>${text}</text>
	`;
}

const items = [
	{
		file: 'project-urlaubsantrag.jpg',
		svg: wrap(`
			<circle cx="140" cy="110" r="38" fill="none" stroke="${accent}" stroke-width="3" />
			<path d="M 178 110 L 226 110 M 219 103 L 226 110 L 219 117" stroke="${ink}" stroke-opacity="0.5" stroke-width="2.5" fill="none" />
			<circle cx="264" cy="110" r="38" fill="none" stroke="${nebula}" stroke-width="3" />
			<path d="M 302 110 L 350 110 M 343 103 L 350 110 L 343 117" stroke="${ink}" stroke-opacity="0.5" stroke-width="2.5" fill="none" />
			<circle cx="388" cy="110" r="38" fill="none" stroke="${accent}" stroke-width="3" />

			<rect x="600" y="70" width="192" height="80" rx="18" fill="${accent}" />
			<path d="M 656 112 L 682 136 L 736 84" stroke="#3a2a10" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round" />

			<rect x="76" y="220" width="640" height="16" rx="8" fill="${line}" />
			<rect x="76" y="220" width="420" height="16" rx="8" fill="${nebula}" />
			<text x="76" y="266" font-size="18" fill="${ink}" fill-opacity="0.5" ${font}>19 / 30 Urlaubstage verbleibend</text>

			${tagLine('Next.js · Supabase · Row-Level-Security', 396)}
		`),
	},
	{
		file: 'case-study-preview.jpg',
		svg: wrap(`
			<rect x="76" y="66" width="180" height="72" rx="16" fill="none" stroke="${accent}" stroke-width="2.5" />
			<path d="M 264 102 L 296 102 M 289 95 L 296 102 L 289 109" stroke="${ink}" stroke-opacity="0.5" stroke-width="2.5" fill="none" />
			<rect x="312" y="66" width="180" height="72" rx="16" fill="none" stroke="${accent}" stroke-width="2.5" />
			<path d="M 500 102 L 532 102 M 525 95 L 532 102 L 525 109" stroke="${ink}" stroke-opacity="0.5" stroke-width="2.5" fill="none" />
			<rect x="548" y="66" width="180" height="72" rx="16" fill="none" stroke="${nebula}" stroke-width="2.5" />

			<rect x="76" y="200" width="176" height="24" rx="12" fill="${accent}" />
			<rect x="272" y="200" width="200" height="24" rx="12" fill="${nebula}" />
			<rect x="492" y="200" width="176" height="24" rx="12" fill="none" />
			<rect x="76" y="240" width="576" height="14" rx="7" fill="${line}" />
			<rect x="272" y="200" width="0" height="0" />
			<rect x="492" y="200" width="152" height="24" rx="12" fill="#a3762e" />

			${tagLine('Prozess · Planung · Risiken', 336)}
		`),
	},
	{
		file: 'project-chat-assistant.jpg',
		svg: wrap(`
			<rect x="76" y="72" width="360" height="70" rx="30" fill="${line}" />
			<rect x="108" y="100" width="230" height="14" rx="7" fill="${ink}" fill-opacity="0.4" />

			<rect x="424" y="176" width="368" height="70" rx="30" fill="${accent}" />
			<rect x="456" y="204" width="240" height="14" rx="7" fill="#4a3418" />

			<rect x="76" y="280" width="200" height="70" rx="30" fill="${line}" />
			<circle cx="112" cy="315" r="9" fill="${accent}" />
			<circle cx="140" cy="315" r="9" fill="${nebula}" />
			<circle cx="168" cy="315" r="9" fill="${ink}" fill-opacity="0.4" />

			${tagLine('Chat-Assistent · Intent Matching', 396)}
		`),
	},
	{
		file: 'project-kontakt.jpg',
		svg: wrap(`
			<circle cx="96" cy="90" r="22" fill="none" stroke="${accent}" stroke-width="3" />
			<rect x="146" y="78" width="240" height="24" rx="12" fill="${accent}" />
			<rect x="146" y="106" width="140" height="10" rx="5" fill="${ink}" fill-opacity="0.25" />

			<circle cx="96" cy="162" r="22" fill="none" stroke="${nebula}" stroke-width="3" />
			<rect x="146" y="150" width="300" height="24" rx="12" fill="${nebula}" />
			<rect x="146" y="178" width="140" height="10" rx="5" fill="${ink}" fill-opacity="0.25" />

			<circle cx="96" cy="234" r="22" fill="none" stroke="${accent}" stroke-width="3" />
			<rect x="146" y="222" width="230" height="24" rx="12" fill="${accent}" />
			<rect x="146" y="250" width="140" height="10" rx="5" fill="${ink}" fill-opacity="0.25" />

			<circle cx="96" cy="306" r="22" fill="none" stroke="${nebula}" stroke-width="3" />
			<rect x="146" y="294" width="270" height="24" rx="12" fill="${nebula}" />
			<rect x="146" y="322" width="140" height="10" rx="5" fill="${ink}" fill-opacity="0.25" />

			${tagLine('Kontakte · Java · JavaFX', 396)}
		`),
	},
	{
		file: 'project-stundenplan.jpg',
		svg: wrap((() => {
			const cols = 5;
			const rows = 3;
			const gap = 14;
			const cellW = (760 - gap * (cols - 1)) / cols;
			const cellH = 62;
			const startX = 76;
			const startY = 70;
			const filled = new Set(['0,0', '3,0', '1,1', '4,1', '2,2']);
			const colorFor = (k) => (k === '0,0' || k === '3,1' || k === '2,2' ? accent : nebula);
			let cells = '';
			for (let r = 0; r < rows; r++) {
				for (let c = 0; c < cols; c++) {
					const key = `${c},${r}`;
					const x = startX + c * (cellW + gap);
					const y = startY + r * (cellH + gap);
					const isFilled = filled.has(key);
					const fill = isFilled ? colorFor(key) : line;
					cells += `<rect x="${x}" y="${y}" width="${cellW}" height="${cellH}" rx="12" fill="${fill}" />`;
				}
			}
			return cells + tagLine('Wochenplan · Termine · Uebersicht', 396);
		})()),
	},
	{
		file: 'project-sap-betriebsmodelle.jpg',
		svg: wrap(`
			<line x1="76" y1="330" x2="792" y2="330" stroke="${ink}" stroke-opacity="0.25" stroke-width="2" />
			<rect x="140" y="240" width="90" height="90" rx="14" fill="${accent}" />
			<rect x="360" y="150" width="90" height="180" rx="14" fill="${nebula}" />
			<rect x="580" y="266" width="90" height="64" rx="14" fill="${accent}" />
			${tagLine('SAP S/4HANA · Betriebsmodelle im Vergleich', 396)}
		`),
	},
	{
		file: 'project-interview-boss.jpg',
		svg: wrap(`
			<rect x="76" y="58" width="200" height="16" rx="8" fill="${line}" />
			<rect x="76" y="58" width="130" height="16" rx="8" fill="${accent}" />
			<rect x="512" y="58" width="200" height="16" rx="8" fill="${line}" />
			<rect x="512" y="58" width="90" height="16" rx="8" fill="${nebula}" />

			<circle cx="716" cy="176" r="56" fill="${line}" />
			<circle cx="716" cy="164" r="27" fill="${ink}" />
			<rect x="686" y="156" width="60" height="16" rx="8" fill="${paper}" />
			<rect x="690" y="159" width="24" height="10" rx="5" fill="${nebula}" />
			<rect x="722" y="159" width="24" height="10" rx="5" fill="${nebula}" />

			<text x="76" y="356" font-size="40" font-weight="700" fill="${accent}" ${font}>-28</text>
			${tagLine('Boss Battle · Sound · Sarkasmus', 396)}
		`),
	},
];

for (const item of items) {
	const buf = Buffer.from(item.svg);
	await sharp(buf).jpeg({ quality: 92 }).toFile(`public/${item.file}`);
	console.log('wrote', item.file);
}
