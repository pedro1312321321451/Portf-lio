class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active";
}

addClickEvent() {
    this.mobileMenu.addEventListener("click", function () {
            return console.log("1");
    });
}

init() {
    if (this.mobileMenu) {
        this.addClickEvent();
    }
    return console.log("2");
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);

mobileNavbar.init();

