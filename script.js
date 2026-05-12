
// ======================
// SAUVEGARDE SCORE
// ======================

async function saveScore(username, score) {

  await fetch("/api/scores", {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      username,
      score
    })
  });
}


// ======================
// CHARGER LE LEADERBOARD
// ======================

async function loadLeaderboard() {

  const response = await fetch("/api/scores");

  const scores = await response.json();

  const leaderboard = document.getElementById("leaderboard");

  leaderboard.innerHTML = "";

  scores.forEach((player, index) => {

    leaderboard.innerHTML += `
      <p>
        #${index + 1} ${player.username} - ${player.score}
      </p>
    `;
  });
}


// ======================
// FIN DE PARTIE (à brancher à ton jeu)
// ======================

function gameOver(score) {

  const username = "Player"; // tu peux changer ou demander un pseudo

  saveScore(username, score);

  loadLeaderboard();
}


// ======================
// AU CHARGEMENT
// ======================

loadLeaderboard();
