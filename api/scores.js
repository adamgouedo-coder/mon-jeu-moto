import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "scores.json");

export default function handler(req, res) {

  if (req.method === "GET") {

    const data =
      JSON.parse(fs.readFileSync(filePath));

    data.sort((a, b) => b.score - a.score);

    return res.status(200).json(data.slice(0, 10));
  }

  if (req.method === "POST") {

    const data =
      JSON.parse(fs.readFileSync(filePath));

    const newScore = {
      username: req.body.username,
      score: req.body.score
    };

    data.push(newScore);

    fs.writeFileSync(
      filePath,
      JSON.stringify(data, null, 2)
    );

    return res.status(200).json({
      success: true
    });
  }

  res.status(405).end();
}
