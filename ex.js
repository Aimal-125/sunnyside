let button = document.querySelector(".mobile-menu-button");
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");
let mobileNav = document.querySelector(".mobile-nav");
let mobileLinks = document.querySelector(".links-wrap");

button.addEventListener("click", () => {
	line2.classList.toggle("line2-hidden");
	line1.classList.toggle("line1-rotate-clw");
	line3.classList.toggle("line3-rotate-aclw");
	mobileNav.classList.toggle("mobile-nav-show");
	mobileLinks.classList.toggle("links-wrap-show");
});

let options = {
	root: null,
	rootMargin: "0px",
	threshold: 0.9
};

let element1 = document.querySelector(".wrap");
let observer1 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if(entry.isIntersecting) {
			element1.classList.add("anime1");
		}
	});
}, options);
observer1.observe(element1);

let element2 = document.querySelector(".un-wrap");
let observer2 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if(entry.isIntersecting) {
			element2.classList.add("anime2");
		}
	});
}, options);
observer2.observe(element2);

let element3 = document.querySelector(".div4");
let observer3 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if(entry.isIntersecting) {
			element3.classList.add("anime3");
		}
	});
}, {threshold: 0.5});
observer3.observe(element3);

let element4 = document.querySelector(".graphic-div");
let observer4 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if(entry.isIntersecting) {
			element4.classList.add("anime4");
		}
	});
}, {threshold: 0.5});
observer4.observe(element4);

let element5 = document.querySelector(".photos-div");
let observer5 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if(entry.isIntersecting) {
			element5.classList.add("anime5");
		}
	});
}, {threshold: 0.5});
observer5.observe(element5);

let names = document.querySelectorAll(".name");
names.forEach(name => {
	let observer6 = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if(entry.isIntersecting) {
				name.classList.add("names-anime");
			}
		});
	}, {threshold: 0.5});	
	observer6.observe(name);
});

let images = document.querySelectorAll(".image");
images.forEach(image => {
	let observer7 = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if(entry.isIntersecting) {
				image.classList.add("image-anime");
			}
		});
	}, {threshold: 0.5});	
	observer7.observe(image);
});

let h4 = document.querySelector("h4");
let observer8 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if(entry.isIntersecting) {
			h4.classList.add("h4-anime");
		}
	});
}, {threshold: 0.5});
observer8.observe(h4);

let galleryImages = document.querySelectorAll(".gallery-image");
galleryImages.forEach(img => {
	let observer9 = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if(entry.isIntersecting) {
				img.classList.add("gallery-anime");
			}
		}, {threshold: 0.5});
	});
	observer9.observe(img);
});