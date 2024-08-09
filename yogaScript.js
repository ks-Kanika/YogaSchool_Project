{/* <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "YogaStudio",
  "name": "[Your Studio Name]",
  "description": "Offering top-rated yoga classes in [City], including Hatha, Vinyasa, and more.",
  "url": "https://www.yoursite.com",
  "image": "https://www.yoursite.com/images/yoga-studio.jpg"
} */}
document.addEventListener("DOMContentLoaded", function() {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");

    navbarToggler.addEventListener("click", function() {
        navbarCollapse.classList.toggle("show");
    });
});
//
