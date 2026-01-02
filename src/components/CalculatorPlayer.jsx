import { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  Divider,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { calculateBaZi } from "../utils/bazi";
import BaZiChart from "./BaziChart";

export default function Calculator() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [charts, setCharts] = useState([]);

  function handleCalculate() {
    if (!name || !date || !time) return;

    const [year, month, day] = date.split("-");
    const [hour, minute] = time.split(":");

    const jsDate = new Date(year, month - 1, day, hour, minute);
    const bazi = calculateBaZi(jsDate);

    setCharts((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name,
        date,
        time,
        pillars: bazi,
      },
    ]);

    // limpa formulário
    setName("");
    setDate("");
    setTime("");
  }

  return (
    <>
      <Container maxWidth="sm">
        <Card
          sx={{
            mt: 4,
            background: "linear-gradient(180deg, #fdfaf3 0%, #f7f1e1 100%)",
            border: "1px solid #d6c8a0",
          }}
        >
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Player
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  label="Date"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  label="Time"
                  type="time"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 3 }}
              onClick={handleCalculate}
            >
              Add BaZi Chart
            </Button>
          </CardContent>
        </Card>
      </Container>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {charts.map((chart) => (
            <Grid item xs={12} md={6} lg={4} key={chart.id}>
              <Card sx={{ padding: 1 }}>
                <CardContent sx={{ position: "relative" }}>
                  <IconButton
                    size="small"
                    onClick={() =>
                      setCharts((prev) => prev.filter((c) => c.id !== chart.id))
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
      </Container>
    </>
  );
}
