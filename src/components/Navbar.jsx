import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router";
import Box from "@mui/material/Box";

export default function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bazi
        </Typography>

        <Box>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{ textTransform: "none" }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/match"
            sx={{ textTransform: "none" }}
          >
            Match
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
