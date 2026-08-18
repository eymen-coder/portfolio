export interface Intent {
	keywords: string[];
	response: string;
}

export const shopName = 'NordHandel Shop';

export const intents: Intent[] = [
	{
		keywords: ['versand', 'lieferzeit', 'liefern', 'liefert', 'wann kommt', 'zustellung'],
		response:
			'Der Versand innerhalb Deutschlands dauert in der Regel 2–4 Werktage. Bestellungen über 50 € sind versandkostenfrei, darunter berechnen wir 4,95 €.',
	},
	{
		keywords: ['rückgabe', 'zurückschicken', 'umtausch', 'widerruf', 'retoure'],
		response:
			'Du kannst Artikel innerhalb von 30 Tagen kostenlos zurücksenden. Das Retourenlabel findest du in deinem Bestellkonto unter "Meine Bestellungen".',
	},
	{
		keywords: ['zahlung', 'bezahlen', 'zahlungsmethode', 'paypal', 'kreditkarte', 'rechnung'],
		response:
			'Wir akzeptieren Kreditkarte, PayPal, Sofortüberweisung und Kauf auf Rechnung für registrierte Kund:innen.',
	},
	{
		keywords: ['bestellstatus', 'tracking', 'sendungsverfolgung', 'wo ist meine bestellung', 'paket'],
		response:
			'Den aktuellen Status siehst du unter "Meine Bestellungen" im Kundenkonto. Sobald das Paket versendet ist, bekommst du zusätzlich einen Tracking-Link per E-Mail.',
	},
	{
		keywords: ['gutschein', 'rabatt', 'code', 'aktion', 'sale'],
		response:
			'Aktuelle Rabattaktionen findest du oben im Banner. Gutscheincodes gibst du beim Checkout im Feld "Gutschein" ein.',
	},
	{
		keywords: ['kontakt', 'öffnungszeiten', 'erreichbar', 'telefon', 'anrufen'],
		response:
			'Unser Support ist Mo–Fr von 9 bis 18 Uhr per Chat und E-Mail erreichbar. Für dringende Fälle: support@nordhandel-shop.example',
	},
	{
		keywords: ['hallo', 'hi', 'hey', 'guten tag', 'moin'],
		response: 'Hallo! Schön, dass du da bist. Wobei kann ich helfen — Versand, Rückgabe, Zahlung oder Bestellstatus?',
	},
	{
		keywords: ['danke', 'dankeschön', 'super', 'perfekt'],
		response: 'Gerne! Falls noch etwas offen ist, frag einfach weiter.',
	},
	{
		keywords: ['wer bist du', 'bist du echt', 'bist du ki', 'bist du ein bot', 'mensch'],
		response:
			'Ich bin ein simulierter Demo-Assistent, kein echtes Sprachmodell. Ich erkenne Stichwörter und antworte mit vorbereiteten Textbausteinen — ein Prototyp für einen möglichen echten KI-Support.',
	},
];

export const fallback =
	'Dazu habe ich noch keine passende Antwort parat. In der echten Version würde hier ein Sprachmodell übernehmen. Frag mich gerne nach Versand, Rückgabe, Zahlung, Bestellstatus oder Gutscheinen.';

export const quickReplies = ['Lieferzeit?', 'Wie funktioniert die Rückgabe?', 'Welche Zahlungsmethoden gibt es?'];
