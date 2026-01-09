document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.project-filters button');
  const cards   = document.querySelectorAll('.project-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // 1. Toggle active state on buttons
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // 2. Filter cards
      const filter = btn.dataset.filter; // e.g. "game-jams"
      cards.forEach(card => {
        const type = card.dataset.type;
        const show = filter === 'all' || type.includes(filter); // type === filter OR type.includes(filter)
        card.style.display = show ? 'block' : 'none';
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', () => { 
  const container = document.getElementById('projects-grid'); 
  if (!container) return; 
    
  // get children as array 
  const cards = Array.from(container.querySelectorAll('.project-card')); 
    
  // sort: featured first (data-featured="true") 
  cards.sort((a, b) => {
    const fa = a.dataset.type.includes("featured") === 'true' ? 1 : 0; 
    const fb = b.dataset.type.includes("featured") === 'true' ? 1 : 0; 
    return fb - fa; // featured (1) before non-featured (0) 
  }); 
    
  // re-append in sorted order (moves nodes in DOM) 
  cards.forEach(card => container.appendChild(card)); 
    
  // add star overlay to featured cards 
  cards.forEach(card => { 
    if (card.dataset.type.includes("featured") === 'true') { 
      const imgWrap = card.querySelector('.card-image'); 
      if (imgWrap && !imgWrap.querySelector('.featured-star')) { 
        const star = document.createElement('div'); 
        star.className = 'featured-star'; 
        star.textContent = '★'; // or use an inline SVG for better control 
        imgWrap.appendChild(star); 
      } 
    } 
  }); 
});

class SiteHeader extends HTMLElement {
  connectedCallback() {
    fetch('/partials/header.html')
      .then(r => r.text())
      .then(html => (this.innerHTML = html));
  }
}
customElements.define('site-header', SiteHeader);

class SiteFooter extends HTMLElement {
  connectedCallback() {
    fetch('/partials/footer.html')
      .then(r => r.text())
      .then(html => (this.innerHTML = html));
  }
}
customElements.define('site-footer', SiteFooter);