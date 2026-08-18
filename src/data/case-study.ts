export const meta = {
	title: 'SAP S/4HANA-Einführung bei einem mittelständischen Handelsunternehmen',
	subtitle:
		'Konzeptstudie: Prozessanalyse, Soll-Konzept und Projektplanung für eine fiktive ERP-Einführung.',
	author: 'Eymen Gülmez',
	date: 'August 2026',
};

export const istProcess = `flowchart TD
	A["Einkauf erstellt Bestellung in Excel"] --> B["Bestellung per E-Mail an Lieferant"]
	B --> C["Wareneingang wird manuell im Lager erfasst"]
	C --> D["Rechnung trifft separat per E-Mail ein"]
	D --> E["Manueller Abgleich: Bestellung, Wareneingang, Rechnung"]
	E --> F{"Abweichung?"}
	F -->|Ja| G["Rueckfrage beim Lieferanten"]
	F -->|Nein| H["Manuelle Buchung in Rechnungssoftware"]
	G --> E
	H --> I["Monatsabschluss mit Verzoegerung"]`;

export const sollProcess = `flowchart TD
	A2["Einkauf erstellt Bestellung in SAP MM"] --> B2["Bestellung automatisch an Lieferant"]
	B2 --> C2["Wareneingang direkt in SAP erfasst"]
	C2 --> D2["Rechnung ueber Eingangsrechnungs-Workflow erfasst"]
	D2 --> E2["Automatischer 3-Way-Match"]
	E2 --> F2{"Abweichung?"}
	F2 -->|Ja| G2["Automatische Eskalation an Einkauf"]
	F2 -->|Nein| H2["Automatische Buchung in FI"]
	H2 --> I2["Echtzeit-Reporting, puenktlicher Abschluss"]`;

export const gantt = `gantt
	title Projektplan SAP S/4HANA-Einfuehrung
	dateFormat YYYY-MM-DD
	section Analyse & Konzeption
	Ist-Analyse & Anforderungen      :a1, 2026-02-02, 15d
	Fit-Gap-Analyse                  :a2, after a1, 10d
	section Realisierung
	Systemkonfiguration              :b1, after a2, 20d
	Schnittstellen & Migration       :b2, after b1, 15d
	section Test & Schulung
	Integrationstests                :c1, after b2, 10d
	Anwenderschulung                 :c2, after c1, 10d
	section Go-Live
	Go-Live                          :milestone, d1, after c2, 0d
	Hypercare-Phase                  :d2, after d1, 15d`;

export const facts = [
	{ value: '150', label: 'Mitarbeitende' },
	{ value: '3', label: 'getrennte Systeme im Ist-Zustand' },
	{ value: '~13 Wochen', label: 'geplante Projektlaufzeit' },
	{ value: '5', label: 'identifizierte Risiken' },
];

export const methods = [
	'Prozessmodellierung',
	'Fit-Gap-Analyse',
	'Risikomanagement',
	'Stakeholder-Analyse',
	'Projektplanung',
];

export const approach = [
	{
		title: 'Anforderungen aufnehmen',
		text: '(Fiktive) Gespräche mit Einkauf, Lager und Buchhaltung, um die tatsächlichen Pain Points zu verstehen, nicht nur die vermuteten.',
	},
	{
		title: 'Ist-Prozess modellieren',
		text: 'Den bestehenden Ablauf als Flowchart dokumentieren, um Medienbrüche und Schwachstellen sichtbar zu machen.',
	},
	{
		title: 'Fit-Gap-Analyse',
		text: 'Abgleich zwischen den Anforderungen und dem SAP-Standard, um zu klären, wo Customizing wirklich nötig ist.',
	},
	{
		title: 'Konzept & Planung',
		text: 'Soll-Prozess, Zeitplan, Risiken und Stakeholder definieren, bevor die eigentliche Umsetzung beginnt.',
	},
];

export const weaknesses = [
	'Medienbrüche zwischen Excel, E-Mail und Rechnungssoftware',
	'Keine Echtzeit-Bestandstransparenz für Einkauf und Vertrieb',
	'Hoher manueller Aufwand und Fehlerquote beim Rechnungsabgleich',
	'Keine einheitliche Datenbasis für Reporting und Kennzahlen',
];

export const risks = [
	{
		risk: 'Datenmigrationsfehler bei Bestands- und Stammdaten',
		probability: 'Mittel',
		impact: 'Hoch',
		mitigation: 'Frühzeitige Datenbereinigung, mehrere Test-Migrationen vor Go-Live',
	},
	{
		risk: 'Akzeptanzprobleme bei Mitarbeitenden',
		probability: 'Hoch',
		impact: 'Mittel',
		mitigation: 'Frühe Einbindung der Fachbereiche, Key-User-Konzept, gezielte Schulungen',
	},
	{
		risk: 'Verzögerung durch Schnittstellenprobleme',
		probability: 'Mittel',
		impact: 'Mittel',
		mitigation: 'Frühzeitige Schnittstellentests, Zeitpuffer im Projektplan',
	},
	{
		risk: 'Budgetüberschreitung',
		probability: 'Niedrig',
		impact: 'Hoch',
		mitigation: 'Klarer Change-Request-Prozess, Budgetreserve einplanen',
	},
	{
		risk: 'Störung von Kernprozessen während Go-Live',
		probability: 'Niedrig',
		impact: 'Hoch',
		mitigation: 'Hypercare-Phase, Rollback-Plan, Go-Live in prozessarmem Zeitraum',
	},
];

export const stakeholders = [
	{ quadrant: 'Hohe Macht · Hohes Interesse', people: 'Geschäftsführung, Projektleitung IT' },
	{ quadrant: 'Hohe Macht · Niedriges Interesse', people: 'IT-Infrastruktur, externer SAP-Berater' },
	{ quadrant: 'Niedrige Macht · Hohes Interesse', people: 'Einkauf, Lager, Buchhaltung (Endanwender)' },
	{ quadrant: 'Niedrige Macht · Niedriges Interesse', people: 'Externe Lieferanten' },
];

export const results = [
	{ value: '−40%', label: 'geschätzte manuelle Bearbeitungszeit beim Rechnungsabgleich' },
	{ value: 'Echtzeit', label: 'Bestandstransparenz statt tagesaktueller Excel-Listen' },
	{ value: '−5 Tage', label: 'geschätzte Verkürzung des Monatsabschlusses' },
];

export const reflexion =
	'Am meisten überrascht hat mich beim Erstellen der Risikomatrix, wie stark Akzeptanzprobleme bei Mitarbeitenden das Projektrisiko dominieren, mehr als jedes technische Risiko. Eine ERP-Einführung scheitert selten an der Software, sondern daran, ob die Menschen dahinter mitgenommen werden. Genau an dieser Schnittstelle zwischen Prozessen, Technik und Menschen will ich später arbeiten.';

export const ausgangslage =
	'Die "NordHandel GmbH" (fiktiv), ein Großhändler mit rund 150 Mitarbeitenden, steuert Einkauf, Lager und Rechnungswesen über drei getrennte Systeme: Bestellungen laufen über Excel-Listen, der Wareneingang wird separat im Lager erfasst, Rechnungen werden manuell dagegen geprüft. Das Ergebnis: doppelte Datenpflege, keine Echtzeit-Bestandsübersicht und ein Monatsabschluss, der regelmäßig zu spät kommt.';

export const sollText =
	'Einführung von SAP S/4HANA mit integrierten Modulen für Einkauf (MM), Lager und Finanzbuchhaltung (FI). Ein automatischer 3-Way-Match ersetzt den manuellen Abgleich, alle Abteilungen arbeiten auf derselben Datenbasis.';
