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

export default function CalculatorDay() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [chart, setChart] = useState(null);

  function handleCalculate() {
    if (!date || !time) return;

    const [year, month, day] = date.split("-");
    const [hour, minute] = time.split(":");

    const jsDate = new Date(year, month - 1, day, hour, minute);
    console.log(date);
    const bazi = calculateBaZi(jsDate);

    setChart({
      id: crypto.randomUUID(),
      date,
      time,
      pillars: bazi,
    });

    // limpa formulário
    setDate("");
    setTime("");
  }

  return (
    <>
      <Container maxWidth="sm" sx={{ position: "sticky", top: 16 }}>
        <Card
          sx={{
            mt: 4,
            background: "linear-gradient(180deg, #fdfaf3 0%, #f7f1e1 100%)",
            border: "1px solid #d6c8a0",
          }}
        >
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Date of the match
            </Typography>

            <Grid container spacing={2}>
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
        <Grid container spacing={3} justifyContent={"center"} sx={{ mt: 2 }}>
          {chart && (
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
          )}
        </Grid>
      </Container>
    </>
  );
}
