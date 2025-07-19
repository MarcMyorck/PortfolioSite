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
        const show = filter === 'all' || type === filter;
        card.style.display = show ? 'block' : 'none';
      });
    });
  });
});