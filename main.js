const ids=['about','projects','resume','contact'];
function show(){
  const h=location.hash.slice(1);
  ids.forEach(id=>{document.getElementById(id).hidden=id!==h});
  document.body.style.overflow=ids.includes(h)?'hidden':'';
  if(ids.includes(h))document.querySelector('#'+h+' .close').focus();
}
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>{history.pushState('',document.title,location.pathname);show()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&ids.includes(location.hash.slice(1))){history.pushState('',document.title,location.pathname);show()}});
addEventListener('hashchange',show);show();
