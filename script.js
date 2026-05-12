// =======================
// SCORE API
// =======================

async function saveScore(username, score) {
  try {
    await fetch("/api/scores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, score })
    });
  } catch (err) {
    console.log("Erreur saveScore :", err);
  }
}


// =======================
// LEADERBOARD
// =======================

async function loadLeaderboard() {
  try {
    const res = await fetch("/api/scores");
    const data = await res.json();

    const lb = document.getElementById("leaderboard");
    if (!lb) return;

    lb.innerHTML = "<h3>🏆 TOP PLAYERS</h3>";

    data.forEach((p, i) => {
      lb.innerHTML += `
        <div>#${i + 1} ${p.username} - ${p.score}</div>
      `;
    });

  } catch (err) {
    console.log("Erreur leaderboard :", err);
  }
}


// =======================
// GAME OVER (version connectée)
// =======================

// ⚠️ IMPORTANT : cette fonction remplace l'ancienne logique API
async function sendGameOverScore(score) {
  await saveScore("Player", score);
  await loadLeaderboard();
}
