const landContainer = document.querySelector(".c"),
landWrapper = document.querySelector(".d");
window.addEventListener("scroll", function() {
	let calc = this.scrollY / this.innerHeight;
	// console.log(calc)
	landContainer.style.backgroundSize = `${120 - (calc * 10)}%`;
	landContainer.style.filter = `brightness(${100 - (calc * 100)}%) blur(${calc * 20}px)`
})