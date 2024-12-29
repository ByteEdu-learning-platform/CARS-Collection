document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scroll for Navbar Links
    const links = document.querySelectorAll('.navbar-nav .nav-link');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // get the target from href

            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // offset for the navbar height
                    behavior: 'smooth',
                });
            }
        });
    });

    // Ensure Carousel Starts Automatically (if not handled by Bootstrap)
    const myCarousel = document.querySelector('#carouselExampleSlidesOnly');
    if (myCarousel) {
        const carousel = new bootstrap.Carousel(myCarousel, {
            interval: 3000, // 3 seconds delay between slides
            ride: 'carousel', // Autoplay on page load
        });
    }

    // Optional: Handle Click Events or Custom Functionality
    const buyNowButtons = document.querySelectorAll('.btn-primary');
    buyNowButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            alert("Thank you for your interest! This functionality is not yet implemented.");
        });
    });
});
