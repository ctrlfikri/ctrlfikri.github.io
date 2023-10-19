document.addEventListener("DOMContentLoaded", function () {
    const burgerIcon = document.getElementById("burger-icon");
    const navLinks = document.getElementById("nav-links");
    const parentMenuItems = document.querySelectorAll(".nav-links li");

    // Variable to track mobile menu state
    let isMobileMenuOpen = false;

    // Function to hide the mobile menu
    function hideMobileMenu() {
        navLinks.style.display = "none";
        isMobileMenuOpen = false;
    }

    // Mobile version: Toggle the mobile menu when clicking the burger icon
    burgerIcon.addEventListener("click", function (e) {
        e.stopPropagation();
        if (isMobileMenuOpen) {
            hideMobileMenu();
        } else {
            navLinks.style.display = "block";
            isMobileMenuOpen = true;
        }
    });

    // Desktop version: Toggle the visibility of sub-menus when clicking parent items
    parentMenuItems.forEach(function (parentMenuItem) {
        const subMenu = parentMenuItem.querySelector(".sub-menu");
        let subMenuVisible = false;

        parentMenuItem.addEventListener("click", function (e) {
            e.stopPropagation();

            if (!subMenuVisible) {
                showSubMenu(subMenu);
                subMenuVisible = true;
            } else {
                hideSubMenu(subMenu);
                subMenuVisible = false;
            }
        });

        // Prevent closing the desktop menu when clicking sub-menu items
        subMenu.addEventListener("click", function (e) {
            e.stopPropagation();
        });
    });

    // Close the mobile menu when clicking outside
    document.body.addEventListener("click", function (e) {
        if (!isMobileMenuOpen) {
            return;
        }
        if (e.target !== burgerIcon && e.target !== navLinks) {
            hideMobileMenu();
        }
    });

    // Reset the menu state when the window resizes to desktop view
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            hideMobileMenu(); // Hide the mobile menu when switching to normal version
        }
    });

    // Function to show the sub-menu
    function showSubMenu(subMenu) {
        subMenu.style.display = "block";
    }

    // Function to hide the sub-menu
    function hideSubMenu(subMenu) {
        subMenu.style.display = "none";
    }
});