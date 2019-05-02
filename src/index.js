const Glide = require('@glidejs/glide');

function createSlide() {
	// Create Slideshow and mount to DOM
	const slides = new Glide('.glide', {
		type: 'carousel',
		perView: 3,
		autoplay: 10000,
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
	//Check if page is index.html
	if (e.target.location.pathname !== '/index.html' && e.target.location.pathname !== '/') {
		return
	} 
	else {
		createSlide();
	}
});
