// ── Photo Slider ────────────────────────────────────────
(function(){
  const slides = document.querySelectorAll('#heroSlider .hero-slide');
  const dots   = document.querySelectorAll('#heroSlider .slider-dot');
  const arrows = document.querySelectorAll('.slider-arrow');
  if(!slides.length) return;
  let cur = 0, timer;

  function goTo(n){
    slides[cur].classList.remove('active');
    dots[cur].classList.remove('active');
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add('active');
    dots[cur].classList.add('active');
    // Reposition floating arrows over the now-active slide
    positionArrows();
    clearInterval(timer);
    timer = setInterval(()=>goTo(cur+1), 5500);
  }

  function positionArrows(){
    const active = document.querySelector('#heroSlider .hero-slide.active');
    const slider = document.getElementById('heroSlider');
    if(!active || !slider) return;
    const h = active.offsetHeight || 540;
    slider.style.position = 'relative';
    arrows.forEach(a=>{
      a.style.top = (h/2)+'px';
      a.style.transform = 'translateY(-50%)';
    });
    // Dots at bottom of active slide
    const dots_el = slider.querySelector('.slider-dots');
    if(dots_el) dots_el.style.bottom = '1rem';
  }

  const prev = document.getElementById('slidePrev');
  const next = document.getElementById('slideNext');
  if(prev) prev.onclick = ()=>goTo(cur-1);
  if(next) next.onclick = ()=>goTo(cur+1);
  dots.forEach(d=>d.addEventListener('click',()=>goTo(+d.dataset.slide)));
  timer = setInterval(()=>goTo(cur+1), 5500);
  positionArrows();
  window.addEventListener('resize', positionArrows);
})();





// ── Scroll / navbar ──────────────────────────────────────
window.addEventListener('scroll',()=>{
  document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>20);
});

const toggle=document.getElementById('menu-toggle');
const mobileNav=document.getElementById('mobile-nav');
toggle.addEventListener('click',()=>{
  const open=mobileNav.style.display==='block';
  mobileNav.style.display=open?'none':'block';
});

document.querySelectorAll('.faq-q').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const item=btn.parentElement;
    const isOpen=item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
    if(!isOpen)item.classList.add('open');
  });
});

const revealObs=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});
},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>revealObs.observe(el));

function animateCounter(el,target){
  const duration=1800;
  const start=performance.now();
  (function update(now){
    const pct=Math.min((now-start)/duration,1);
    const ease=1-Math.pow(1-pct,3);
    el.textContent=Math.floor(ease*target);
    if(pct<1)requestAnimationFrame(update);
    else el.textContent=target;
  })(performance.now());
}
const cntObs=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      animateCounter(e.target,parseInt(e.target.dataset.target));
      cntObs.unobserve(e.target);
    }
  });
},{threshold:0.5});
document.querySelectorAll('.counter').forEach(el=>cntObs.observe(el));
