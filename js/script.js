const menuBtn = document.querySelector(".menu-btn");
const burgerBtn = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");
const toggleMenu = () => {
	burgerBtn.classList.toggle("open");
	nav.classList.toggle("open");
	menuNav.classList.toggle("open");
	navItems.forEach(item => item.classList.toggle("open"));
};

menuBtn.addEventListener("click", toggleMenu);

const summaryElements = document.querySelectorAll("summary");
summaryElements.forEach(summary => {
	summary.addEventListener("click", event => {
		const details = summary.closest("details");
		if (details.hasAttribute("open")) {
			event.preventDefault();
			details.setAttribute("close", "");
			setTimeout(() => {
				details.removeAttribute("open");
				details.removeAttribute("close");
			}, 300);
		}
	});
});

const currentPage = document.querySelector("main").id;
document
	.querySelector(`[title=${currentPage}]`)
	.closest("menuitem")
	.classList.add("active");
