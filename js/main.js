(function () {
	const header = document.querySelector(".header");
	window.onscroll = () => {
		if (window.pageYOffset > 50) {
			header.classList.add("header_active");
		} else {
			header.classList.remove("header_active");
		}
	};
})();

// burger handler

(function () {
	const burgerItem = document.querySelector(".burger");
	const menu = document.querySelector(".header__nav");
	const menuClose = document.querySelector(".header__nav-close");

	burgerItem.addEventListener("click", () => {
		console.log("1");
		menu.classList.add("header__nav-active");
	});
	// menuClose.addEventListener("click", () => {
	//     menu.classList.add('header__nav-active')
	// });
	menuClose.addEventListener("click", () => {
		menu.classList.remove("header__nav-active");
	});
})();

// Scroll to anchors

(function () {
	const smoothScroll = function (targetEl, duration) {
		const headerElHeight = document.querySelector(".header").clientHeight;
		let target = document.querySelector(targetEl);
		let targetPosition = target.getBoundingClientRect().top - headerElHeight;
		let startPosition = window.pageYOffset;
		let startTime = null;
		const ease = function (t, b, c, d) {
			t /= d / 2;
			if (t < 1) return (c / 2) * t * t + b;
			t--;
			return (-c / 2) * (t * (t - 2) - 1) + b;
		};
		const animation = function (currTime) {
			if (startTime === null) startTime = currTime;
			const timeElapsed = currTime - startTime;
			const run = ease(timeElapsed, startPosition, targetPosition, duration);
			window.scrollTo(0, run);
			if (timeElapsed < duration) requestAnimationFrame(animation);
		};
		requestAnimationFrame(animation);
	};
	const scrollTo = function () {
		const links = document.querySelectorAll(".js-scroll");
		links.forEach((each) => {
			each.addEventListener("click", function () {
				const currentTarget = this.getAttribute("href");
				smoothScroll(currentTarget, 1000);
			});
		});
	};
	scrollTo();
})();
