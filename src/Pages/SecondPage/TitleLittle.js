import { Box, Typography } from "@mui/material";
export default function TitleLittle(props) {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "16px",
          lineHeight: "26px",
          fontWeight: "400",
          px: 2,
        }}
      >
        {props.little}
      </Typography>
    </Box>
  );
}
