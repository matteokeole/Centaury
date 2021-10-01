const landContainer = document.querySelector(".c");
window.addEventListener("scroll", function() {
	let calc = this.scrollY / this.innerHeight;
	landContainer.style.backgroundSize = `${120 - (calc * 10)}%`;
	landContainer.style.filter = `brightness(${100 - (calc * 100)}%)`
})