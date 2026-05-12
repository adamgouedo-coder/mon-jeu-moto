
// =======================
// SCORE API
// =======================

async function saveScore(username, score) {

  await fetch("/api/scores", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, score })
  });
}


// =======================
// LEADERBOARD
// =======================

async function loadLeaderboard() {

  const res = await fetch("/api/scores");
  const data = await res.json();

  const lb = document.getElementById("leaderboard");

  lb.innerHTML = "<h3>🏆 TOP PLAYERS</h3>";

  data.forEach((p, i) => {
    lb.innerHTML += `
      <div>#${i+1} ${p.username} - ${p.score}</div>
    `;
  });
}


// =======================
// GAME OVER (à appeler dans ton jeu)
// =======================

function gameOver(score) {

  saveScore("Player", score);
  loadLeaderboard();
}


// =======================
// AU DÉMARRAGE
// =======================

loadLeaderboard();
