document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn'); // using class, matches your HTML
  const mobileMenu = document.getElementById('mobileMenu');
  const icon = menuBtn.querySelector('i');

  function openMenu() {
    mobileMenu.classList.add('open');
    menuBtn.setAttribute('aria-expanded', 'true');
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark'); // change to "X"
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-xmark');
  }

  function toggleMenu() {
    if (mobileMenu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Toggle on click
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      closeMenu();
    }
  });

  // Close when resizing back to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMenu();
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
});


const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.style.display = (i === idx) ? "flex" : "none";
  });
}

prevBtn.addEventListener("click", () => {
  index = (index > 0) ? index - 1 : slides.length - 1;
  showSlide(index);
});

nextBtn.addEventListener("click", () => {
  index = (index < slides.length - 1) ? index + 1 : 0;
  showSlide(index);
});

showSlide(index);

// Contact form handling (client-side only)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const msg = document.getElementById('formMessage');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple validation
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      msg.textContent = 'Please fill the required fields.';
      msg.style.color = '#ffb4b4';
      return;
    }

    // Simulate success
    msg.textContent = 'Thanks — your message has been sent!';
    msg.style.color = '#d1ffd6';

    // Clear form
    form.reset();

    // Remove message after 4 seconds
    setTimeout(() => { msg.textContent = ''; }, 4000);
  });
});
