import { Box, Typography, Tooltip } from "@mui/material";
import { ELEMENT_COLORS } from "../theme/baziColors";
import { getElementFromGanZhi } from "../utils/display";
import {
  STEM_ELEMENT,
  BRANCH_ANIMALS,
  HIDDEN_STEMS,
} from "../utils/translations";

export default function BaZiCell({ label, ganzhi, highlight }) {
  const stem = ganzhi[0];
  const branch = ganzhi[1];

  const element = getElementFromGanZhi(ganzhi);
  const colors = ELEMENT_COLORS[element];

  return (
    <>
      <Box
        sx={{
          backgroundColor: colors.bg,
          border: `2px solid ${colors.border}`,
          borderRadius: 1,
          p: 1.5,
          textAlign: "center",
          minHeight: 190,
          position: "relative",
          boxShadow: highlight ? "0 0 0 3px rgba(0,0,0,0.2)" : "none",
        }}
      >
        {/* Label */}
        <Typography variant="caption" sx={{ letterSpacing: 1, opacity: 0.7 }}>
          {label}
        </Typography>

        {/* Heavenly Stem */}
        <Typography
          sx={{
            fontFamily: "'Noto Serif SC', serif",
            fontSize: "2.6rem",
            fontWeight: 600,
            color: colors.text,
            mt: 1,
          }}
        >
          {stem}
        </Typography>

        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          {STEM_ELEMENT[stem]}
        </Typography>

        {/* Earthly Branch */}
        <Typography
          sx={{
            fontFamily: "'Noto Serif SC', serif",
            fontSize: "2rem",
            mt: 1,
          }}
        >
          {branch}
        </Typography>

        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          {BRANCH_ANIMALS[branch]}
        </Typography>

        {/* Hidden Stems */}
        {HIDDEN_STEMS[branch] && (
          <Tooltip title={HIDDEN_STEMS[branch].join(" · ")}>
            <Typography sx={{ cursor: "help", fontSize: "0.7rem" }}>
              Roots
            </Typography>
          </Tooltip>
        )}
      </Box>
    </>
  );
}
