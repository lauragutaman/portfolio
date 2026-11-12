const ids=['about','projects','resume','process','contact'];
function show(){
  const h=location.hash.slice(1);
  ids.forEach(id=>{document.getElementById(id).hidden=id!==h});
  document.body.style.overflow=ids.includes(h)?'hidden':'';
  if(ids.includes(h))document.querySelector('#'+h+' .close').focus();
}
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>{history.pushState('',document.title,location.pathname);show()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!document.querySelector('dialog[open]')&&ids.includes(location.hash.slice(1))){history.pushState('',document.title,location.pathname);show()}});
addEventListener('hashchange',show);show();

// project pop-ups
document.querySelectorAll('[data-proj]').forEach(card=>{
  const open=()=>{const d=document.getElementById('pm-'+card.dataset.proj);d.showModal();d.scrollTop=0;d.dataset.from=card.dataset.proj};
  card.addEventListener('click',open);
  card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}});
});
document.querySelectorAll('.proj-modal').forEach(d=>{
  d.querySelector('[data-pm-close]').onclick=()=>d.close();
  d.addEventListener('click',e=>{if(e.target===d)d.close()}); // click backdrop
  d.addEventListener('close',()=>document.querySelector('[data-proj="'+d.dataset.from+'"]')?.focus());
});
