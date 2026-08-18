export interface Project {
	title: string;
	description: string;
	tags: string[];
	link?: string;
	repo?: string;
	image?: string;
	download?: boolean;
}

const thesisPdf = '/eymen-guelmez-projektthesis-sap-s4hana.pdf';

export const projects: Project[] = [
	{
		title: 'SAP S/4HANA Case Study',
		description:
			'Konzeptstudie zur ERP-Einführung bei einem fiktiven Handelsunternehmen: Prozessanalyse, Soll-Konzept, Projektplanung mit Zeitplan, Risiken und Stakeholdern.',
		tags: ['SAP', 'Prozessanalyse', 'Projektmanagement'],
		link: '/case-study',
		image: '/case-study-preview.jpg',
	},
	{
		title: 'Stundenplan-Webseite',
		description:
			'Webanwendung zur Verwaltung und Anzeige von Stundenplänen, entwickelt als Hochschulprojekt an der FH Dortmund.',
		tags: ['HTML', 'CSS', 'JavaScript'],
		image: '/project-stundenplan.jpg',
	},
	{
		title: 'Kontakt-App',
		description:
			'Anwendung zur Verwaltung von Kontakten mit Java und JavaFX, entwickelt als Hochschulprojekt an der FH Dortmund.',
		tags: ['Java', 'JavaFX'],
		image: '/project-kontakt.jpg',
	},
	{
		title: 'SAP S/4HANA Betriebsmodelle',
		description:
			'Vergleichsanalyse verschiedener SAP S/4HANA Betriebsmodelle im Rahmen eines Hochschulprojekts.',
		tags: ['SAP', 'ERP', 'Analyse'],
		image: '/project-sap-betriebsmodelle.jpg',
		link: thesisPdf,
		download: true,
	},
];
