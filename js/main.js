document.addEventListener('DOMContentLoaded', () => {
  // Form submit alert and reset
  const enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert("Thank you for contacting Sandeep Decorators & Caterers. We'll get back to you soon!");
      this.reset();
    });
  }

  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close nav menu on link click (mobile)
    document.querySelectorAll('#nav-menu a').forEach(link =>
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      })
    );
  }

  // Hero background image carousel
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    const heroImages = [
      'assets/carousel1.jpg',
      'assets/carousel2.jpeg',
      'assets/carousel3.jpeg',
      'assets/carousel4.jpeg',
      'assets/carousel5.jpeg',
    ];
    let heroIndex = 0;

    function updateHeroBackground() {
      if (window.innerWidth > 480) {
        heroSection.style.backgroundImage = `url('${heroImages[heroIndex]}')`;
      } else {
        heroSection.style.backgroundImage = 'none';
      }
      heroIndex = (heroIndex + 1) % heroImages.length;
    }

    updateHeroBackground();
    setInterval(updateHeroBackground, 4000);
  }
});