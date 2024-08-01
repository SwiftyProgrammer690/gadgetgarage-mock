

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