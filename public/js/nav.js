(async function(){
  const nav = document.getElementById('site-nav');
  if(!nav) return;

  const current = (location.pathname.replace(/\/+$/,'') || '/').toLowerCase();

  function linkHTML(p){
    const path = (p.path||'').toLowerCase();
    const active = path === current ? 'class="active"' : '';
    return `<a ${active} href="${p.path}">${p.title}</a>`;
  }

  try{
    const res = await fetch('/data/pages.json', {cache:'no-store'});
    const data = await res.json();
    const isGrouped = Array.isArray(data) && data.length && Array.isArray(data[0].items);

    if(isGrouped){
      nav.innerHTML = data.map(g=>{
        const items = (g.items||[]).map(linkHTML).join('');
        return `
          <details class="nav-group">
            <summary>${g.group}</summary>
            <div class="menu">${items}</div>
          </details>
        `;
      }).join('');
    } else {
      nav.innerHTML = data.map(linkHTML).join('');
    }
  }catch{
    nav.innerHTML = `<a class="active" href="/">Home</a>`;
  }
})();
// Close other groups when one opens
document.addEventListener('toggle', (e)=>{
  if(e.target && e.target.matches('#site-nav details.nav-group')) {
    if(e.target.open){
      document.querySelectorAll('#site-nav details.nav-group[open]').forEach(d=>{
        if(d !== e.target) d.removeAttribute('open');
      });
    }
  }
}, true);
// Always show a Home link first
(function addHomeLink(){
  const nav = document.getElementById('site-nav');
  if (!nav) return;
  // undvik dubbletter vid hot reload
  if (nav.querySelector('a.home-link')) return;

  const a = document.createElement('a');
  a.href = '/';
  a.textContent = 'Home';
  a.className = 'home-link';
  nav.appendChild(a);
})();

