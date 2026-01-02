import axios from "axios";
const proxy = "https://cors-anywhere.herokuapp.com/";
export const fetchPlayers = async (id) => {
  try {
    const response = await axios.get(
      proxy + `https://transfermarkt-api.fly.dev/clubs/${id}/players`,
      {
        headers: {
          accept: "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar jogadores:", error);
  }
};

export const fetchTeam = async (id) => {
  try {
    const response = await axios.get(
      proxy + `https://transfermarkt-api.fly.dev/clubs/${id}/profile`,
      {
        headers: {
          accept: "application/json",
        },
      }
    );

    return response.data.officialName;
  } catch (error) {
    console.error("Erro ao buscar clube:", error);
  }
};
