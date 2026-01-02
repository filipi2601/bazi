import axios from "axios";

export const fetchPlayers = async (id) => {
  try {
    const response = await axios.get(`/api/clubs/${id}/players`, {
      headers: {
        accept: "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar jogadores:", error);
  }
};

export const fetchTeam = async (id) => {
  try {
    const response = await axios.get(`/api/clubs/${id}/profile`, {
      headers: {
        accept: "application/json",
      },
    });

    return response.data.officialName;
  } catch (error) {
    console.error("Erro ao buscar clube:", error);
  }
};
