import { Grid, Typography } from "@mui/material";
import BaZiCell from "./BaziCell";

export default function BaZiChart({ name, pillars }) {
  return (
    <Grid container spacing={1.5} sx={{ position: "relative" }}>
      <Grid item xs={3}>
        <BaZiCell label="Hour" ganzhi={pillars.hour} dayGanzhi={pillars.day} />
      </Grid>

      <Grid item xs={3}>
        <BaZiCell
          label="Day"
          highlight
          ganzhi={pillars.day}
          dayGanzhi={pillars.day}
        />
      </Grid>

      <Grid item xs={3}>
        <BaZiCell
          label="Month"
          ganzhi={pillars.month}
          dayGanzhi={pillars.day}
        />
      </Grid>

      <Grid item xs={3}>
        <BaZiCell label="Year" ganzhi={pillars.year} dayGanzhi={pillars.day} />
      </Grid>
    </Grid>
  );
}
