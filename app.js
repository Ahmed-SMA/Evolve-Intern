
const root = document.documentElement;
const saved = localStorage.getItem('theme') || 'light';
root.setAttribute('data-theme', saved);
document.querySelectorAll('[data-theme-toggle]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const next = root.getAttribute('data-theme') === 'dark' ? 'light':'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
});
document.querySelectorAll('.acc-btn').forEach(btn=>{
  btn.addEventListener('click',()=>btn.parentElement.classList.toggle('open'));
});
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('show') })
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
