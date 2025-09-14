
document.querySelectorAll('.es-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    alert('Spanish version coming soon.');
  });
});


// mini carousel
(function(){
  const wrap = document.querySelector('.mini-carousel');
  if(!wrap) return;
  const slides = Array.from(wrap.querySelectorAll('img'));
  const dots = Array.from(wrap.querySelectorAll('.mini-dots button'));
  let i = 0, t;
  function show(n){
    slides.forEach((s,idx)=>s.classList.toggle('active', idx===n));
    dots.forEach((d,idx)=>d.classList.toggle('active', idx===n));
    i = n;
  }
  function next(){ show((i+1)%slides.length); }
  dots.forEach(d=>d.addEventListener('click', ()=>{ show(parseInt(d.dataset.i)); reset(); }));
  function reset(){ clearInterval(t); t = setInterval(next, 3500); }
  reset();
})();
