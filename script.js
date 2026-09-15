const menu = document.querySelector('.menu');
const links = document.querySelector('.navlinks');
if (menu && links) {
  menu.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

document.querySelectorAll('[data-contact]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const form = document.querySelector('.access-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const firstField = form.querySelector('input:not([type="hidden"])');
      if (firstField) setTimeout(() => firstField.focus(), 450);
    } else {
      window.location.href = 'index.html#contact';
    }
  });
});
