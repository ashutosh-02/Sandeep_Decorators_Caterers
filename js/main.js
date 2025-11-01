document.getElementById('enquiryForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you for contacting Sandeep Decorators & Caterers. We'll get back to you soon!");
  this.reset();
});
