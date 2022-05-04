import { Box } from "@mui/material";
import bot from "../../assets/images/bottomImg.png";
function BottomBrends() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bot})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "170px",
        opacity: "0.4",
        transform: "translateY(190px)",
      }}
    ></Box>
  );
}
export default BottomBrends;
