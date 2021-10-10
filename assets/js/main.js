const bannerContainer = document.querySelector(".banner-container"),
landWrapper = document.querySelector(".d");
window.addEventListener("scroll", function() {
	let calc = this.scrollY / this.innerHeight;
	bannerContainer.style.backgroundSize = `${120 - (calc * 10)}%`;
	bannerContainer.style.filter = `brightness(${100 - (calc * 100)}%) blur(${calc * 20}px)`
})