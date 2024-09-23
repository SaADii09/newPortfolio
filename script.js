const mobileNav = document.querySelector(".mobile-nav");

const closeIcon = document.querySelector(".mobile-nav span svg");
const mobileNavItems = document.querySelectorAll(".mobile-nav li");
const svgLi = document.querySelector("nav ul li svg");

svgLi.addEventListener("click", () => {
	mobileNav.classList.toggle("open-menu");
	mobileNav.classList.toggle("closed-menu");
});

closeIcon.addEventListener("click", () => {
	mobileNav.classList.toggle("open-menu");
	mobileNav.classList.toggle("closed-menu");
});

mobileNavItems.forEach((item) => {
	item.addEventListener("click", () => {
		mobileNav.classList.toggle("open-menu");
		mobileNav.classList.toggle("closed-menu");
	});
});

/////////////////// form submit///////////////////
document
	.getElementById("contact-form-button")
	.addEventListener("click", function (event) {
		// event.preventDefault(); // Prevent the form from submitting immediately

		setTimeout(function () {
		// Clear all input fields
		document.querySelectorAll(".form-input").forEach(function (input) {
			input.value = "";
		});

		// Now submit the form

		}, 100);
	});

/////////////////////////////////////////////////

/////////////////////////////////theme - switch ////////////////////////
let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.querySelector("#theme-switch");

// Apply the initial theme based on localStorage


const enableDarkMode = () => {
    // console.log("enabled");
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");
};

const disableDarkMode = () => {
    // console.log("disabled");
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", null);
};

if (darkmode === "active") {
    enableDarkMode();
}

// Toggle dark mode on button click
themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    if (darkmode !== "active") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
