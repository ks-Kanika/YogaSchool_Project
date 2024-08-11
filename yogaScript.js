{/* <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "YogaStudio",
  "name": "[Your Studio Name]",
  "description": "Offering top-rated yoga classes in [City], including Hatha, Vinyasa, and more.",
  "url": "https://www.yoursite.com",
  "image": "https://www.yoursite.com/images/yoga-studio.jpg"
} */}
// document.addEventListener("DOMContentLoaded", function() {
//     var navbarToggler = document.querySelector(".navbar-toggler");
//     var navbarCollapse = document.querySelector(".navbar-collapse");

//     navbarToggler.addEventListener("click", function() {
//         navbarCollapse.classList.toggle("show");
//     });
// });
// //
function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  menuLinks.classList.toggle('active');
}
function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  const hamburgerIcon = document.querySelector('.hamburger-icon');

  menuLinks.classList.toggle('active');
  hamburgerIcon.classList.toggle('active');
}
/*About Section*/
let slideIndex = 0;

function changeSlide(n) {
    let slides = document.getElementsByClassName("slide");
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    slides[slideIndex].classList.add("active");
}

document.querySelectorAll('.slide').forEach((img) => {
    img.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent any default action like navigating to a link
    });
});
document.getElementById('readMoreButton').addEventListener('click', function() {
    let content = document.getElementById('moreContent');
    let button = document.getElementById('readMoreButton');
    if (content.style.display === 'none') {
        content.style.display = 'block';
        button.textContent = 'Read Less'; // Change button text to 'Read Less'
    } else {
        content.style.display = 'none';
        button.textContent = 'Read More'; // Change button text back to 'Read More'
    }
});
/* About End*/
/* Class Starts*/

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

