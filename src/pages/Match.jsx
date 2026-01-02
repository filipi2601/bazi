import { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { calculateBaZi } from "../utils/bazi";
import BaZiChart from "../components/BaziChart";
import CalculatorDay from "../components/CalculatorDay";
import axios from "axios";

export default function Match() {
  const [team1Id, setTeam1Id] = useState("");
  const [team2Id, setTeam2Id] = useState("");
  const [players1, setPlayers1] = useState([]);
  const [players2, setPlayers2] = useState([]);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [charts1, setCharts1] = useState([]);
  const [charts2, setCharts2] = useState([]);

  const handleFetchPlayers1 = async () => {
    if (!team1Id) return;
    setLoading1(true);
    try {
      const { data } = await axios.get(`/api/players?teamId=${team1Id}`);
      const simplifiedPlayers = (data.players || []).map((player) => ({
        name: player.name,
        dateOfBirth: player.dateOfBirth,
      }));
      setPlayers1(simplifiedPlayers);
    } catch (error) {
      console.error("Erro ao buscar jogadores do time 1:", error);
      setPlayers1([]);
    }
    setLoading1(false);
  };

  const handleFetchPlayers2 = async () => {
    if (!team2Id) return;
    setLoading2(true);
    try {
      const { data } = await axios.get(`/api/players?teamId=${team2Id}`);
      const simplifiedPlayers = (data.players || []).map((player) => ({
        name: player.name,
        dateOfBirth: player.dateOfBirth,
      }));
      setPlayers2(simplifiedPlayers);
    } catch (error) {
      console.error("Erro ao buscar jogadores do time 2:", error);
      setPlayers2([]);
    }
    setLoading2(false);
  };

  useEffect(() => {
    if (players1.length === 0) return;
    console.log(players1);
    generateChartPlayers1();
  }, [players1]);
  useEffect(() => {
    if (players2.length === 0) return;
    generateChartPlayers2();
  }, [players2]);

  const generateChartPlayers1 = () => {
    const charts = players1.map((player) => {
      if (player.dateOfBirth) {
        const [year, month, day] = player.dateOfBirth.split("-");
        const jsDate = new Date(year, month - 1, day, 0, 0);
        const pillars = calculateBaZi(jsDate);
        return {
          id: crypto.randomUUID(),
          name: player.name,
          date: player.dateOfBirth,
          pillars,
        };
      } else {
        const pillars = {};
        return "Jogador sem data de nascimento identificada.";
      }
    });

    setCharts1(charts);
  };

  const generateChartPlayers2 = () => {
    const charts = players2.map((player) => {
      const [year, month, day] = player.dateOfBirth.split("-");
      const jsDate = new Date(year, month - 1, day, 0, 0);
      const pillars = calculateBaZi(jsDate);

      return {
        id: crypto.randomUUID(),
        name: player.name,
        date: player.dateOfBirth,
        pillars,
      };
    });

    setCharts2(charts);
  };

  return (
    <Grid
      container
      justifyContent="space-between"
      spacing={0}
      sx={{ padding: 5 }}
    >
      {/* Coluna do Time 1 */}
      <Grid item xs={12} md={4}>
        <Card
          sx={{ mb: 2, background: "#fdfaf3", border: "1px solid #d6c8a0" }}
        >
          <CardContent>
            <TextField
              fullWidth
              label="Team 1 ID"
              value={team1Id}
              onChange={(e) => setTeam1Id(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleFetchPlayers1()}
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              fullWidth
              onClick={handleFetchPlayers1}
              disabled={loading1 || !team1Id}
            >
              {loading1 ? "Loading..." : "Buscar Time 1"}
            </Button>
          </CardContent>
        </Card>

        {/* Lista de jogadores do Time 1 */}
        {charts1.map((chart) => (
          <Grid item xs={12} md={6} lg={4} key={chart.id} m={1}>
            <Card sx={{ padding: 1 }}>
              <CardContent sx={{ position: "relative" }}>
                <IconButton
                  size="small"
                  onClick={() =>
                    setCharts1((prev) => prev.filter((c) => c.id !== chart.id))
                  }
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    zIndex: 10,
                    bgcolor: "background.paper",
                  }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
                <Typography variant="h6" align="center">
                  {chart.name}
                </Typography>

                <BaZiChart pillars={chart.pillars} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* Mapa do confronto fixado */}
      <Grid item xs={12} md={4}>
        <CalculatorDay />
      </Grid>
      {/* Coluna do Time 2 */}
      <Grid item xs={12} md={4}>
        <Card
          sx={{ mb: 2, background: "#fdfaf3", border: "1px solid #d6c8a0" }}
        >
          <CardContent>
            <TextField
              fullWidth
              label="Team 2 ID"
              value={team2Id}
              onChange={(e) => setTeam2Id(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleFetchPlayers2()}
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              fullWidth
              onClick={handleFetchPlayers2}
              disabled={loading2 || !team2Id}
            >
              {loading2 ? "Loading..." : "Buscar Time 2"}
            </Button>
          </CardContent>
        </Card>

        {/* Lista de jogadores do Time 2 */}
        {charts2.map((chart) => (
          <Grid item xs={12} md={6} lg={4} key={chart.id} m={1}>
            <Card sx={{ padding: 1 }}>
              <CardContent sx={{ position: "relative" }}>
                <IconButton
                  size="small"
                  onClick={() =>
                    setCharts2((prev) => prev.filter((c) => c.id !== chart.id))
                  }
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    zIndex: 10,
                    bgcolor: "background.paper",
                  }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
                <Typography variant="h6" align="center">
                  {chart.name}
                </Typography>

                <BaZiChart pillars={chart.pillars} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
