

// Animations
document.addEventListener('DOMContentLoaded', function () {
	const links = document.querySelectorAll('nav a');
	const sections = document.querySelectorAll('.section');

	for (const link of links) {
		link.addEventListener('click', function (event) {
			event.preventDefault();
			const targetId = this.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);

			window.scrollTo({
				top: targetElement.offsetTop,
				behavior: 'smooth'
			});
		});
	}

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('show');
			}
		});
	}, {
		threshold: 0.1
	});

	sections.forEach(section => {
		observer.observe(section);
	});
});

const cursorContainer = document.querySelector('.cursor-container');
const ctaButton = document.querySelector('.cta-button');

// Create multiple cursors
for (let i = 0; i < 20; i++) {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    cursorContainer.appendChild(cursor);
}

// Function to update cursor positions
function updateCursors(e) {
    const cursors = document.querySelectorAll('.cursor');
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    cursors.forEach((cursor, index) => {
        const angle = (index / cursors.length) * 360;
        const radians = angle * (Math.PI / 180);
        const distance = 50;

        const cursorX = mouseX + Math.cos(radians) * distance;
        const cursorY = mouseY + Math.sin(radians) * distance;

        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
        cursor.style.transform = `rotate(${angle}deg)`;
    });
}

document.addEventListener('mousemove', updateCursors);

