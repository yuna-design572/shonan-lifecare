let lastScroll = 0;

window.addEventListener("scroll", () => {
  const current = window.pageYOffset;

  if (current > lastScroll) {
    document.querySelector("header").classList.add("hide");
  } else {
    document.querySelector("header").classList.remove("hide");
  }

  lastScroll = current;
});

const ham = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

ham.addEventListener('click', () => {
  ham.classList.toggle('active');
  nav.classList.toggle('active');
});

const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

fadeInElements.forEach(el => {
  observer.observe(el);

  // 画面内にすでにある場合の対策
  const rect = el.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    el.classList.add('show');
  }
});
