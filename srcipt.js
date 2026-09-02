// Website Company Profile Pra-PKL - MULTIKOMP JEMBER

document.addEventListener('DOMContentLoaded', function () {
    console.log("Website Company Profile Multikomp Jember berhasil dijalankan.");

    // Auto close navbar collapse on mobile after clicking a link
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');

    if (navbarCollapse) {
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                if (window.innerWidth < 992) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            });
        });
    }

    // Navbar shadow on scroll
    const navbar = document.getElementById('mainNavbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 30) {
                navbar.classList.add('shadow');
            } else {
                navbar.classList.remove('shadow');
            }
        });
    }

    // ScrollSpy active link updater
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(function (current) {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const targetNavLink = document.querySelector('.navbar-nav a[href*=' + sectionId + ']');

            if (targetNavLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    targetNavLink.classList.add('active');
                } else {
                    targetNavLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
});
