/* =========================================================
   BC LOCAÇÕES — LANDING PAGE
   Scripts de interatividade
   ========================================================= */

// ============================
// HEADER SCROLL EFFECT
// Adiciona classe "scrolled" no header quando rolar mais de 50px
// ============================
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ============================
// MOBILE MENU
// Abre/fecha menu no mobile e fecha ao clicar em link
// ============================
const mobileToggle = document.getElementById('mobileToggle');
const nav = document.getElementById('nav');

mobileToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

// ============================
// FAQ ACCORDION
// Abre uma pergunta de cada vez (fecha as outras)
// ============================
document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    // Fecha todas as outras perguntas
    document.querySelectorAll('.faq-item').forEach(other => {
      other.classList.remove('open');
    });

    // Abre a atual se ainda não estava aberta
    if (!isOpen) {
      item.classList.add('open');
    }
  });
});

// ============================
// REVEAL ON SCROLL
// Anima elementos com classe .reveal ao entrarem na viewport
// ============================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -80px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

// ============================
// SCROLL SUAVE PARA ÂNCORAS
// Melhora a navegação interna entre seções
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
