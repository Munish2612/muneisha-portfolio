const menuButton=document.getElementById('menu-toggle');
const nav=document.getElementById('nav');
menuButton?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded','false');
}));
document.getElementById('year').textContent=new Date().getFullYear();
const progress=document.getElementById('reading-progress');
let scrollTicking=false;
const updateScrollEffects=()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  const pageProgress=max>0?Math.min(1,Math.max(0,window.scrollY/max)):0;
  progress.style.width=(pageProgress*100)+'%';
};
window.addEventListener('scroll',()=>{
  if(!scrollTicking){
    scrollTicking=true;
    requestAnimationFrame(()=>{updateScrollEffects();scrollTicking=false;});
  }
},{passive:true});
updateScrollEffects();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
