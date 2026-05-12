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
