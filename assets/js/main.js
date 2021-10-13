// Select elements
const bannerContainer = document.querySelector(".banner-container"),
main = document.querySelector("main"),
scrollBall = document.querySelector(".scroll-ball"),
animate = function() {
	let calc = this.scrollY / this.innerHeight;
	if (this.scrollY < this.innerHeight) {
		bannerContainer.style.visibility = "visible"
		bannerContainer.style.backgroundSize = `${120 - (calc * 10)}%`;
		bannerContainer.style.filter = `brightness(${100 - (calc * 100)}%) blur(${calc * 20}px)`
	} else {
		bannerContainer.style.visibility = "hidden"
	}
	// Animated scroll ball
	let scroll = (this.scrollY - calcBannerHeight());
	scrollBall.style.top = `${scroll + 200}px`
},
calcBannerHeight = function() {
	// Calculate the banner height
	return Math.round(9 * (this.innerWidth / 16))
},
resize = function() {
	// Adapt the position of the main element with the banner height
	main.style.marginTop = `${calcBannerHeight()}px`
};
resize();
// Event listeners
window.addEventListener("resize", resize);
window.addEventListener("load", animate);
window.addEventListener("scroll", animate)