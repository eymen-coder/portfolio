import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Respektiert die System-Einstellung "Bewegung reduzieren".
// Bei true werden alle GSAP-Effekte übersprungen; alle Inhalte
// sind per Default (ohne JS-Hiding) voll sichtbar und lesbar.
const reduceMotion =
	typeof window !== 'undefined' &&
	window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ── HERO PREPARE (runs immediately so initial states are set) ────────────────
function prepareHero() {
	const h1 = document.querySelector('.hero-text') as HTMLElement | null;
	if (!h1) return;

	const raw = h1.textContent || '';
	h1.innerHTML = raw
		.split(/(\s+)/)
		.map(part =>
			part.trim() ? `<span class="hw"><span class="hwi">${part}</span></span>` : part,
		)
		.join('');

	gsap.set('.hwi', { y: '105%' });
	gsap.set('.hero-badge', { opacity: 0, y: 14 });
	gsap.set('.hero-desc', { opacity: 0, y: 20 });
	gsap.set('.hero-cta a', { opacity: 0, y: 14 });
	gsap.set('.hero-portrait', { opacity: 0, scale: 0.9 });
}

// ── HERO ANIMATE (runs after preloader) ─────────────────────────────────────
function animateHero() {
	const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
	tl.to('.hero-badge', { opacity: 1, y: 0, duration: 0.7 })
		.to('.hwi', { y: 0, duration: 0.78, stagger: 0.032 }, '-=0.3')
		.to('.hero-desc', { opacity: 1, y: 0, duration: 0.8 }, '-=0.55')
		.to('.hero-cta a', { opacity: 1, y: 0, stagger: 0.1, duration: 0.65 }, '-=0.5')
		.to('.hero-portrait', { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }, '-=0.95');
}

// ── COUNTERS ─────────────────────────────────────────────────────────────────
function initCounters() {
	document.querySelectorAll<HTMLElement>('[data-count]').forEach(el => {
		const target = parseInt(el.getAttribute('data-count') || '0', 10);
		const obj = { val: 0 };
		ScrollTrigger.create({
			trigger: el,
			start: 'top 82%',
			once: true,
			onEnter() {
				gsap.to(obj, {
					val: target,
					duration: 1.5,
					ease: 'power2.out',
					onUpdate() { el.textContent = String(Math.round(obj.val)); },
				});
			},
		});
	});
}

// ── 3D CARD TILT ─────────────────────────────────────────────────────────────
function initTilt() {
	document.querySelectorAll<HTMLElement>('.tilt-card').forEach(card => {
		card.addEventListener('mousemove', e => {
			const r = card.getBoundingClientRect();
			const rx = ((e.clientY - r.top) / r.height - 0.5) * -10;
			const ry = ((e.clientX - r.left) / r.width - 0.5) * 10;
			gsap.to(card, {
				rotateX: rx,
				rotateY: ry,
				scale: 1.028,
				duration: 0.35,
				ease: 'power2.out',
				transformPerspective: 900,
			});
		});
		card.addEventListener('mouseleave', () => {
			gsap.to(card, {
				rotateX: 0,
				rotateY: 0,
				scale: 1,
				duration: 0.65,
				ease: 'power3.out',
				transformPerspective: 900,
			});
		});
	});
}

// ── MAGNETIC BUTTONS ─────────────────────────────────────────────────────────
function initMagnetic() {
	document.querySelectorAll<HTMLElement>('.magnetic').forEach(el => {
		el.addEventListener('mousemove', e => {
			const r = el.getBoundingClientRect();
			const x = (e.clientX - (r.left + r.width / 2)) * 0.3;
			const y = (e.clientY - (r.top + r.height / 2)) * 0.3;
			gsap.to(el, { x, y, duration: 0.4, ease: 'power2.out' });
		});
		el.addEventListener('mouseleave', () => {
			gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' });
		});
	});
}

// ── SCROLL TEXT REVEAL ───────────────────────────────────────────────────────
function splitWords(el: HTMLElement) {
	el.innerHTML = (el.textContent || '')
		.split(/(\s+)/)
		.map(part => (part.trim() ? `<span class="tr-word">${part}</span>` : part))
		.join('');
}

function animateWords(words: NodeListOf<HTMLElement>, trigger: HTMLElement) {
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger,
			start: 'top 78%',
			end: 'bottom 20%',
			scrub: 1.5,
		},
	});
	tl.fromTo(
		words,
		{ color: 'rgba(245, 240, 230, 0.15)' },
		{ color: 'rgba(245, 240, 230, 0.9)', stagger: 0.06, ease: 'none' },
	);
}

function initTextReveal() {
	// Grouped blocks: all paragraphs flow as one sequence
	document.querySelectorAll<HTMLElement>('[data-text-flow]').forEach(container => {
		container.querySelectorAll<HTMLElement>('.text-reveal').forEach(splitWords);
		animateWords(container.querySelectorAll<HTMLElement>('.tr-word'), container);
	});

	// Standalone paragraphs (not inside a data-text-flow)
	document.querySelectorAll<HTMLElement>('.text-reveal').forEach(el => {
		if (el.closest('[data-text-flow]')) return;
		splitWords(el);
		animateWords(el.querySelectorAll<HTMLElement>('.tr-word'), el);
	});
}

// ── APPROACH STEPS ───────────────────────────────────────────────────────────
function initApproach() {
	const steps = document.querySelectorAll<HTMLElement>('.approach-step');
	if (!steps.length) return;
	gsap.from(steps, {
		scrollTrigger: {
			trigger: steps[0].parentElement,
			start: 'top 78%',
			toggleActions: 'play none none none',
		},
		opacity: 0,
		y: 44,
		stagger: 0.2,
		duration: 0.9,
		ease: 'power4.out',
	});
}

// ── BOOT ─────────────────────────────────────────────────────────────────────
function boot() {
	if (reduceMotion) return; // Inhalte bleiben statisch & sichtbar
	prepareHero();
	initCounters();
	initTilt();
	initMagnetic();
	initTextReveal();
	initApproach();
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', boot);
} else {
	boot();
}

if (!reduceMotion) {
	if (document.getElementById('preloader')) {
		window.addEventListener('preloader:done', animateHero, { once: true });
	} else if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', animateHero);
	} else {
		animateHero();
	}
}
