document.getElementById('enquiryForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you for contacting Sandeep Decorators & Caterers. We'll get back to you soon!");
  this.reset();
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Optional: close menu when a link is clicked (on mobile)
document.querySelectorAll('#nav-menu a').forEach(link =>
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);
