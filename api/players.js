import axios from "axios";

export default async function handler(req, res) {
  const { teamId } = req.query;

  if (!teamId) return res.status(400).json({ error: "teamId é obrigatório" });

  try {
    // Aqui a requisição é do server-side da Vercel → CORS não existe
    const response = await axios.get(
      `https://transfermarkt-api.fly.dev/clubs/${teamId}/players`,
      { headers: { accept: "application/json" } }
    );

    res.status(200).json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
}
