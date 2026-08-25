export interface Project {
	title: string;
	description: string;
	tags: string[];
	link?: string;
	repo?: string;
	image?: string;
	download?: boolean;
	highlight?: string;
	featured?: boolean;
	learning?: string;
}

const thesisPdf = '/eymen-guelmez-projektthesis-sap-s4hana.pdf';

export const projects: Project[] = [
	{
		title: 'Urlaubsantrag-Tool',
		description:
			'Voll funktionsfähiger Genehmigungsworkflow mit drei Rollen (Mitarbeiter, Vorgesetzter, HR), echter Postgres-Datenbank und Row-Level-Security statt reiner Frontend-Logik. Live mit Demo-Zugängen testbar.',
		tags: ['Next.js', 'Supabase', 'PostgreSQL'],
		link: 'https://urlaubsantrag-tool-inky.vercel.app/login',
		repo: 'https://github.com/eymen-coder/urlaubsantrag-tool',
		image: '/project-urlaubsantrag.jpg',
		highlight: '3 Rollen · Row-Level-Security · Live-Demo',
		featured: true,
		learning:
			'Hier habe ich zum ersten Mal Zugriffsrechte konsequent auf Datenbank-Ebene (Row-Level-Security) statt im Frontend gelöst — und gemerkt, wie viel sicherer und wartbarer das ist, als Logik nur im Client zu verstecken.',
	},
	{
		title: 'SAP S/4HANA Case Study',
		description:
			'Konzeptstudie zur ERP-Einführung bei einem fiktiven Handelsunternehmen: Prozessanalyse, Soll-Konzept, Projektplanung mit Zeitplan, Risiken und Stakeholdern.',
		tags: ['SAP', 'Prozessanalyse', 'Projektmanagement'],
		link: '/case-study',
		image: '/case-study-preview.jpg',
		highlight: 'Ist-Analyse bis Soll-Konzept mit Projektplan',
		learning:
			'Ich habe gelernt, ein Projekt nicht nur technisch, sondern von der Prozess- und Stakeholder-Seite zu denken — Zeitplan, Risiken und Beteiligte gehören genauso dazu wie die Lösung selbst.',
	},
	{
		title: 'SAP S/4HANA Betriebsmodelle',
		description:
			'Vergleichsanalyse verschiedener SAP S/4HANA Betriebsmodelle im Rahmen eines Hochschulprojekts.',
		tags: ['SAP', 'ERP', 'Analyse'],
		image: '/project-sap-betriebsmodelle.jpg',
		link: thesisPdf,
		download: true,
		highlight: 'Vergleichsanalyse · als PDF verfügbar',
		learning:
			'Ich habe gelernt, Betriebsmodelle strukturiert nach Kriterien zu vergleichen und eine Empfehlung sachlich zu begründen, statt nur Vor- und Nachteile aufzulisten.',
	},
	{
		title: 'KI-Support-Assistent',
		description:
			'Prototyp eines Chat-Assistenten für einen Online-Shop: Intent-Erkennung per Keyword-Matching, als Ausgangspunkt für eine echte LLM-Integration gebaut.',
		tags: ['Conversational UX', 'JavaScript', 'Prototyping'],
		link: '/chat-assistant',
		image: '/project-chat-assistant.jpg',
		highlight: 'Intent-Erkennung · interaktive Live-Demo',
		learning:
			'Ich habe verstanden, wie man Nutzer-Eingaben in Absichten (Intents) übersetzt — und wo simples Keyword-Matching an Grenzen stößt und eine echte LLM-Integration sinnvoll wird.',
	},
	{
		title: 'Interview-Boss-Battle',
		description:
			'Kleines Browser-Spiel: Besiege den Recruiter-Boss mit den überzeugendsten Interview-Antworten. Mit synthetisierten Sound-Effekten und Screen-Shake.',
		tags: ['Spiel', 'Web Audio API', 'JavaScript'],
		link: '/interview-boss',
		image: '/project-interview-boss.jpg',
		highlight: 'Synthetisierte Sounds · spielbar im Browser',
		learning:
			'Ein Spaßprojekt, bei dem ich gelernt habe, mit der Web Audio API Sounds direkt im Browser zu erzeugen und mit kleinen Effekten wie Screen-Shake ein Interface lebendiger zu machen.',
	},
	{
		title: 'Stundenplan-Webseite',
		description:
			'Webanwendung zur Verwaltung und Anzeige von Stundenplänen, entwickelt als Hochschulprojekt an der FH Dortmund.',
		tags: ['HTML', 'CSS', 'JavaScript'],
		image: '/project-stundenplan.jpg',
		highlight: 'Hochschulprojekt · FH Dortmund',
		learning:
			'Mein früher Einstieg in strukturiertes Frontend: Daten übersichtlich darstellen und Zustände im Browser mit purem JavaScript verwalten.',
	},
	{
		title: 'Kontakt-App',
		description:
			'Anwendung zur Verwaltung von Kontakten mit Java und JavaFX, entwickelt als Hochschulprojekt an der FH Dortmund.',
		tags: ['Java', 'JavaFX'],
		image: '/project-kontakt.jpg',
		highlight: 'Hochschulprojekt · FH Dortmund',
		learning:
			'Erste Erfahrung mit objektorientierter Desktop-Entwicklung in Java/JavaFX — und der sauberen Trennung von Daten, Logik und Oberfläche.',
	},
];
