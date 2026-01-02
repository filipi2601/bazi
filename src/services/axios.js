import axios from "axios";

export const fetchPlayers = async (id) => {
  try {
    const response = await axios.get(
      `https://transfermarkt-api.fly.dev/clubs/${id}/players`,
      {
        headers: {
          accept: "application/json",
        },
      }
    );

    console.log(response.data);
  } catch (error) {
    console.error("Erro ao buscar jogadores:", error);
  }
};
