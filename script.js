const menu = document.querySelector(".hamburger-menu");

const navLinks = document.querySelectorAll("#nav-link");

const header = document.querySelector(".head");

menu.addEventListener("click", ()=> {
    header.classList.toggle("active");
});

navLinks.forEach((navLink)=> {
    navLink.addEventListener("click", (e)=> {
        if (header.classList.contains("active")) {
            header.classList.remove("active");
        }

        let current = e.currentTarget;
        
        navLinks.forEach((nav)=> {
            if (current === nav) {
                nav.classList.add("active");
            } else {
                nav.classList.remove("active");
            }
        });

    });
});

AOS.init();
