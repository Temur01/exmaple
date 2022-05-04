import { Box } from "@mui/material";
import Buttons from "../../components/Button";

export default function ButtonsSection() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: 3, gap: 2 }}>
      <Buttons title="More about" />
      <Buttons title="our youtube" />
    </Box>
  );
}
