(function(){
var b=document.getElementById('burger'),n=document.getElementById('nav');
function zamknij(){n.classList.remove('otw');b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Otwórz menu');document.body.style.overflow=''}
b.addEventListener('click',function(){var o=n.classList.toggle('otw');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Zamknij menu':'Otwórz menu');document.body.style.overflow=o?'hidden':''});
n.addEventListener('click',function(e){if(e.target.tagName==='A')zamknij()});
document.addEventListener('keydown',function(e){if(e.key==='Escape')zamknij()});
var linki=[].slice.call(n.querySelectorAll('a')),sek=linki.map(function(a){return document.querySelector(a.getAttribute('href'))});
if('IntersectionObserver' in window){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var i=sek.indexOf(e.target);linki.forEach(function(a,j){a.classList.toggle('on',j===i)})}})},{rootMargin:'-45% 0px -50% 0px'});
 sek.forEach(function(s){s&&io.observe(s)});
 var cta=document.getElementById('cta'),mob=document.getElementById('mob');
 new IntersectionObserver(function(es){mob.classList.toggle('widac',!es[0].isIntersecting&&es[0].boundingClientRect.top<0)}).observe(cta);
 var m=document.getElementById('mapa');
 var mo=new IntersectionObserver(function(es){if(es[0].isIntersecting){var f=document.createElement('iframe');f.src=m.getAttribute('data-src');f.title='Mapa: Deliver Logistik, Bydgoszcz';f.loading='lazy';f.referrerPolicy='no-referrer-when-downgrade';m.appendChild(f);mo.disconnect()}},{rootMargin:'300px'});
 mo.observe(m);
}
var f=document.getElementById('form'),w=document.getElementById('wyn');
f.addEventListener('submit',function(e){e.preventDefault();w.hidden=false;w.textContent='To podgląd strony - formularz nie wysyła danych. Na docelowej stronie zapytanie trafi od razu na biuro@deliverlogistik.pl.'});
document.getElementById('rok').textContent=new Date().getFullYear();
})();
