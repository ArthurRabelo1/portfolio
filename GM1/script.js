document.getElementById("signInBtn").addEventListener("click", () => {
    alert("Sign In functionality coming soon!");
  });
  

document.addEventListener('DOMContentLoaded', () => {
  // Botão GUARDIAN TALES
  const guardianBtn = document.getElementById('guardian');
  guardianBtn.addEventListener('click', () => {
    window.location.href = 'guardian.html'; // ou link externo
  });

  // Botão DOOM
  const doomBtn = document.getElementById('doom');
  doomBtn.addEventListener('click', () => {
    window.location.href = 'doom.html'; // ou link externo
  });

  // Botão UNDERTALE
  const undertaleBtn = document.getElementById('undertale');
  undertaleBtn.addEventListener('click', () => {
    window.location.href = 'undertale.html'; // ou link externo
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const gameCards = document.querySelectorAll('.game-card');

  searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();

    gameCards.forEach(card => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      if (title.includes(filter)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});