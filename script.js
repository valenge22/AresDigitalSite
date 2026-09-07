const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');
const formMessage = document.querySelector('[data-form-message]');
const projectForm = document.querySelector('[data-project-form]');
const themeToggle = document.querySelector('[data-theme-toggle]');

function setTheme(isDark) {
  document.body.classList.toggle('is-dark', isDark);
  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute('aria-label', isDark ? 'Activar modo claro' : 'Activar modo oscuro');
    themeToggle.querySelector('.theme-toggle-text').textContent = isDark ? 'Modo claro' : 'Modo oscuro';
    themeToggle.querySelector('.theme-toggle-icon').textContent = isDark ? '☀' : '◐';
  }
}

const savedTheme = localStorage.getItem('ares-theme');
setTheme(savedTheme === 'dark');

themeToggle?.addEventListener('click', () => {
  const isDark = !document.body.classList.contains('is-dark');
  setTheme(isDark);
  localStorage.setItem('ares-theme', isDark ? 'dark' : 'light');
});

const contactStatus = new URLSearchParams(window.location.search).get('consulta');
if (formMessage && contactStatus) {
  formMessage.hidden = false;
  formMessage.textContent = contactStatus === 'envio'
    ? 'No pudimos enviar la consulta en este momento. Intentá nuevamente o escribinos a contacto@aresdigital.site.'
    : 'Revisá los campos obligatorios e intentá nuevamente. El nombre debe tener al menos 2 caracteres y la descripción, 10.';
}

function updateHeader() {
  header.classList.toggle('scrolled', window.scrollY > 24);
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuButton.addEventListener('click', () => {
  const open = menuButton.classList.toggle('open');
  nav.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuButton.classList.remove('open');
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
  });
});

if (projectForm) {
  projectForm.addEventListener('submit', () => {
    const submitButton = projectForm.querySelector('button[type="submit"]');
    const submitText = projectForm.querySelector('[data-submit-text]');
    if (submitButton && submitText && projectForm.checkValidity()) {
      submitButton.disabled = true;
      submitText.textContent = 'Enviando consulta…';
    }
  });
}

document.querySelectorAll('.product-preview').forEach(item => item.classList.add('reveal', 'ares-product-reveal'));
const revealItems = document.querySelectorAll('.reveal');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach(item => item.classList.add('visible'));
} else {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
}
