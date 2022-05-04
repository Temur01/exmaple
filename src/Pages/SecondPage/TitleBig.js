import { Box, Typography } from "@mui/material";
import TitleLittle from "./TitleLittle";
export default function TitleBig(props) {
  return (
    <Box>
      <Typography
        sx={{
          textTransform: "uppercase",
          color: "black",
          fontSize: "56px",
          fontWeight: "800",
          lineHeight: "54px",
          py: 2,
          px: 2,
        }}
      >
        {props.big}
      </Typography>
    </Box>
  );
}
