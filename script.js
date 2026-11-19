// Collage drift: as the photos scroll up the screen, set --p from 0 to 1
// and let the CSS move them. Skipped for people who ask for less motion.
const photos = document.querySelector('.photos');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (photos && !reduceMotion.matches) {
  let ticking = false;

  const update = () => {
    const rect = photos.getBoundingClientRect();
    const start = window.innerHeight * 0.5; // begin once the collage's top passes mid-screen
    const progress = (start - rect.top) / rect.height;
    photos.style.setProperty('--p', Math.min(Math.max(progress, 0), 1).toFixed(3));
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });

  update();
}

// The waitlist form has no service behind it yet. Until one is chosen,
// stop the submit and say plainly that nothing was sent.
const form = document.getElementById('waitlist');
const note = document.getElementById('waitlist-note');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  note.hidden = false;
});
