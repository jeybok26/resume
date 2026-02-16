const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('#navLinks li a');

// Toggle menu open/close on hamburger click
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active'); // toggle hamburger animation
});

// Close menu after selecting a link
  navItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });