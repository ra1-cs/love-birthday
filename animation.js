const cursor = document.querySelector('.cursor');
const gift = document.getElementById('gift');
const buttons = document.querySelectorAll('.love-btn');

/* Cursor */
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

/* Floating hearts */
setInterval(() => {
  const heart = document.createElement('div');
  heart.innerHTML = '❤️';
  heart.style.position = 'fixed';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.bottom = '-20px';
  heart.style.fontSize = Math.random() * 25 + 15 + 'px';
  heart.style.opacity = 0.7;
  document.body.appendChild(heart);

  heart.animate(
    [
      { transform: 'translateY(0)', opacity: 0 },
      { transform: 'translateY(-120vh)', opacity: 1 }
    ],
    { duration: Math.random() * 4000 + 6000 }
  );

  setTimeout(() => heart.remove(), 10000);
}, 300);

/* Buttons magic */
buttons.forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    gift.classList.add('show');

    for (let i = 0; i < 10; i++) {
      const emoji = document.createElement('div');
      const emojis = ['❤️','🍯','🎁','✨'];
      emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.position = 'fixed';
      emoji.style.left = Math.random() * 100 + 'vw';
      emoji.style.top = Math.random() * 100 + 'vh';
      emoji.style.fontSize = '30px';
      document.body.appendChild(emoji);

      setTimeout(() => emoji.remove(), 1500);
    }
  });
});

/* ===== CONFETTI & SURPRISES (GLOBAL) ===== */

const surpriseEmojis = ['❤️','💖','💘','🎁','🍯','✨','🎊'];

function launchParticles(x, y) {
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.innerHTML =
      surpriseEmojis[Math.floor(Math.random() * surpriseEmojis.length)];
    p.style.left = x + 'px';
    p.style.top = y + 'px';

    const moveX = (Math.random() - 0.5) * 300 + 'px';
    const moveY = (Math.random() - 0.5) * 300 + 'px';
    p.style.setProperty('--x', moveX);
    p.style.setProperty('--y', moveY);

    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1500);
  }
}

function showSurprise() {
  const surprise = document.createElement('div');
  surprise.className = 'surprise';
  surprise.innerHTML = `
    🎉 Surprise 🎉<br><br>
    enta kel chi bi 7ayete, love YOU my HEART ❤️
  `;
  document.body.appendChild(surprise);

  setTimeout(() => surprise.remove(), 2500);
}

/* Click anywhere */
document.addEventListener('click', e => {
  launchParticles(e.clientX, e.clientY);
  if (Math.random() < 0.25) showSurprise();
});
