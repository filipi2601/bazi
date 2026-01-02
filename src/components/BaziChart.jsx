import { Grid, Typography } from "@mui/material";
import BaZiCell from "./BaziCell";

export default function BaZiChart({ name, pillars }) {
  return (
    <Grid container spacing={1.5} sx={{ position: "relative" }}>
      {pillars?.hour && (
        <Grid item xs={3}>
          <BaZiCell
            label="Hour"
            ganzhi={pillars.hour}
            dayGanzhi={pillars.day}
          />
        </Grid>
      )}

      {pillars?.day && (
        <Grid item xs={3}>
          <BaZiCell
            label="Day"
            highlight
            ganzhi={pillars.day}
            dayGanzhi={pillars.day}
          />
        </Grid>
      )}

      {pillars?.month && (
        <Grid item xs={3}>
          <BaZiCell
            label="Month"
            ganzhi={pillars.month}
            dayGanzhi={pillars.day}
          />
        </Grid>
      )}

      {pillars?.year && (
        <Grid item xs={3}>
          <BaZiCell
            label="Year"
            ganzhi={pillars.year}
            dayGanzhi={pillars.day}
          />
        </Grid>
      )}

      {!pillars?.year && !pillars?.month && !pillars?.day && !pillars?.hour && (
        <Typography variant="h6" fontSize={16}>
          A data de nascimento do jogador não foi encontrada.
        </Typography>
      )}
    </Grid>
  );
}
