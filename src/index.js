const Glide = require('@glidejs/glide');

function createSlide() {
	// Create Slideshow and mount to DOM
	const slides = new Glide('.glide', {
		type: 'carousel',
		perView: 3,
		autoplay: 5000,
		peek: 50,
		breakpoints: {
			600: {
				perView: 1,
				peek: 0,
			}
		}
	});	
	slides.mount();
}

window.addEventListener('DOMContentLoaded', e => {
	if (e.target.location.pathname == '/index.html' && e.target.location.pathname == '/') {
		createSlide();
	} 
});
