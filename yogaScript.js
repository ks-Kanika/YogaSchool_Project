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

/* Contact*/
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const submitButton = form.querySelector('button[type="submit"]');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
      let isValid = validateForm();

      if (isValid) {
          submitButton.textContent = 'Sending...';
          submitButton.disabled = true;

          // Simulate form submission (replace this with actual submission logic)
          setTimeout(() => {
              alert('Message sent successfully!');
              submitButton.textContent = 'Send Message';
              submitButton.disabled = false;
              form.reset();
          }, 1000);
      }
  });

  function validateForm() {
      let valid = true;

      // Basic Name Validation
      if (nameInput.value.trim() === '') {
          valid = false;
          nameInput.style.borderColor = 'red';
          nameInput.placeholder = 'Please enter your name';
      } else {
          nameInput.style.borderColor = '#ddd';
      }

      // Basic Email Validation
      if (emailInput.value.trim() === '' || !validateEmail(emailInput.value.trim())) {
          valid = false;
          emailInput.style.borderColor = 'red';
          emailInput.placeholder = 'Please enter a valid email';
      } else {
          emailInput.style.borderColor = '#ddd';
      }

      // Basic Message Validation
      if (messageInput.value.trim() === '') {
          valid = false;
          messageInput.style.borderColor = 'red';
          messageInput.placeholder = 'Please enter your message';
      } else {
          messageInput.style.borderColor = '#ddd';
      }

      return valid;
  }

  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const submitButton = form.querySelector('button[type="submit"]');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const modal = document.getElementById('custom-alert');
  const closeBtn = document.querySelector('.close-btn');
  const okBtn = document.querySelector('.ok-btn');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
      let isValid = validateForm();

      if (isValid) {
          submitButton.textContent = 'Sending...';
          submitButton.disabled = true;

          // Simulate form submission (replace this with actual submission logic)
          setTimeout(() => {
              showModal();
              submitButton.textContent = 'Send Message';
              submitButton.disabled = false;
              form.reset();
          }, 2000);
      }
  });

  closeBtn.addEventListener('click', closeModal);
  okBtn.addEventListener('click', closeModal);

  function validateForm() {
      let valid = true;

      if (nameInput.value.trim() === '') {
          valid = false;
          nameInput.style.borderColor = 'red';
          nameInput.placeholder = 'Please enter your name';
      } else {
          nameInput.style.borderColor = '#ddd';
      }

      if (emailInput.value.trim() === '' || !validateEmail(emailInput.value.trim())) {
          valid = false;
          emailInput.style.borderColor = 'red';
          emailInput.placeholder = 'Please enter a valid email';
      } else {
          emailInput.style.borderColor = '#ddd';
      }

      if (messageInput.value.trim() === '') {
          valid = false;
          messageInput.style.borderColor = 'red';
          messageInput.placeholder = 'Please enter your message';
      } else {
          messageInput.style.borderColor = '#ddd';
      }

      return valid;
  }

  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
  }

  function showModal() {
      modal.style.display = 'flex';
  }

  function closeModal() {
      modal.style.display = 'none';
  }

  window.onclick = function(event) {
      if (event.target === modal) {
          closeModal();
      }
  };
});
