// MENU TOGGLE
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelectorAll('.nav-link');
const mobileLinks = document.querySelectorAll('.mobile-link');
const sections = document.querySelectorAll('main section');

// Mobile toggle
menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  mobileMenu.toggleAttribute('hidden');
  menuToggle.classList.toggle('open');
});

// Close mobile menu when link clicked
[...mobileLinks].forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.setAttribute('hidden', '');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.classList.remove('open');
  });
});

// Smooth scroll and highlight nav
function onScroll() {
  const scrollPos = window.scrollY + 120;
  let current = 0;
  sections.forEach((sec, i) => { if (sec.offsetTop <= scrollPos) current = i; });
  navLinks.forEach((a,i)=> a.classList.toggle('active', i===current));
  mobileLinks.forEach((a,i)=> a.classList.toggle('active', i===current));
}
window.addEventListener('scroll', onScroll);
onScroll();

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Contact form (mock)
function handleSubmit(e){
  e.preventDefault();
  const form = e.target;
  const name = form.name.value || 'Friend';
  alert(`Thanks, ${name}! Your message was sent.`);
  form.reset();
}

// Mission & Vision / Background tab switcher
const mvButtons = document.querySelectorAll(".mv-btn[data-target]");
const mvContents = document.querySelectorAll(".mv-content");

mvButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");

    // Buttons
    mvButtons.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");

    // Contents
    mvContents.forEach(c=>c.classList.remove("active"));
    document.getElementById(target).classList.add("active");
  });
});
