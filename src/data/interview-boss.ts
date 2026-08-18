export interface Answer {
	text: string;
	damage: number;
	counter: number;
	caption: string;
}

export interface Question {
	prompt: string;
	answers: Answer[];
}

export const questions: Question[] = [
	{
		prompt: 'Wo sehen Sie sich in 5 Jahren?',
		answers: [
			{
				text: 'Weiterentwickelt in einer Rolle mit Verantwortung, in der ich messbaren Mehrwert bringe.',
				damage: 28,
				counter: 0,
				caption: 'Kritischer Treffer! Der Recruiter nickt beeindruckt.',
			},
			{ text: 'Keine Ahnung, mal schauen was passiert.', damage: 10, counter: 8, caption: 'Ehrlich, aber schwach.' },
			{
				text: 'Definitiv nicht mehr hier.',
				damage: 0,
				counter: 18,
				caption: 'Autsch. Der Recruiter macht sich eine Notiz.',
			},
		],
	},
	{
		prompt: 'Was ist Ihre größte Schwäche?',
		answers: [
			{
				text: 'Ich perfektioniere gerne Details, arbeite aber aktiv an realistischeren Prioritäten.',
				damage: 26,
				counter: 0,
				caption: 'Sauber! Klassiker, aber gut verpackt.',
			},
			{ text: 'Ich bin manchmal ungeduldig.', damage: 12, counter: 6, caption: 'Solide, mehr nicht.' },
			{ text: 'Ich habe keine Schwächen.', damage: 0, counter: 20, caption: 'Der Recruiter hebt eine Augenbraue.' },
		],
	},
	{
		prompt: 'Warum sollten wir gerade Sie einstellen?',
		answers: [
			{
				text: 'Weil ich Prozesse und Technik verbinden kann und liefere, statt nur zu analysieren.',
				damage: 30,
				counter: 0,
				caption: 'Volltreffer! Genau die Antwort, die gesucht wurde.',
			},
			{ text: 'Ich bin halt ganz gut.', damage: 8, counter: 10, caption: 'Naja... mutig formuliert.' },
			{
				text: 'Weil ich sonst nichts zu tun habe.',
				damage: 0,
				counter: 22,
				caption: 'Der Recruiter schaut auf die Uhr.',
			},
		],
	},
	{
		prompt: 'Erzählen Sie etwas über sich.',
		answers: [
			{
				text: 'Kurz: Wirtschaftsinformatik-Student, Faible für Prozesse und Code, aktuell im E-Commerce.',
				damage: 24,
				counter: 0,
				caption: 'Knackig und relevant. Treffer!',
			},
			{ text: '[15 Minuten unstrukturierter Lebenslauf-Vortrag]', damage: 6, counter: 12, caption: 'Der Recruiter blättert schon weiter.' },
			{ text: 'Steht doch alles im Lebenslauf.', damage: 0, counter: 20, caption: 'Kalt erwischt.' },
		],
	},
	{
		prompt: 'Wie gehen Sie mit Stress um?',
		answers: [
			{
				text: 'Priorisieren und früh kommunizieren, wenn es eng wird.',
				damage: 25,
				counter: 0,
				caption: 'Ruhig und überzeugend. Treffer!',
			},
			{ text: 'Kaffee.', damage: 14, counter: 4, caption: 'Ehrlich zumindest.' },
			{ text: 'Ich werde panisch.', damage: 0, counter: 18, caption: 'Der Recruiter wirkt leicht besorgt.' },
		],
	},
	{
		prompt: 'Ihre Gehaltsvorstellung?',
		answers: [
			{
				text: 'Eine begründete Range basierend auf Marktdaten und der Stelle.',
				damage: 22,
				counter: 0,
				caption: 'Professionell gekontert!',
			},
			{ text: 'Bin da flexibel.', damage: 10, counter: 8, caption: 'Ausweichmanöver, mäßig effektiv.' },
			{ text: 'So viel wie möglich.', damage: 0, counter: 16, caption: 'Der Recruiter grinst schief.' },
		],
	},
];

export const bossAttacks = [
	'Und was, wenn wir Sie am Wochenende brauchen?',
	'Nennen Sie mir drei Ihrer Schwächen. Sofort.',
	'Warum haben Sie eine Lücke im Lebenslauf?',
	'Sind Sie sicher, dass Sie dafür qualifiziert sind?',
	'Wir haben 200 andere Bewerbungen.',
];
