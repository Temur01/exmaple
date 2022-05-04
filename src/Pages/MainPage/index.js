import { Box, Button, CardMedia, Typography } from "@mui/material";
import botto from "../../assets/images/botto.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import back from "../../assets/images/background.png";
import Header from "../../components/Header";
import big from "../../assets/images/lineBig.svg";
import four from "../../assets/images/linegreen.svg";
import circle from "../../assets/images/circleYel.svg";
import play from "../../assets/images/Frame.svg";
export default function MainPage() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${back})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
          position: "relative",
          zIndex: "10",
        }}
      >
        <Header />
        <Box sx={{ padding: " 165px 235px" }}>
          <Typography
            sx={{
              fontSize: "67px",
              color: "white",
              fontWeight: "800",
            }}
          >
            ВСЕ ДЛЯ ТЕПЛИЦ
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              lineHeight: "30px",
              color: "rgba(255, 255, 255, 0.55)",
              fontWeight: "400",
            }}
          >
            Here will be brief information about our company and
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              lineHeight: "30px",
              color: "rgba(255, 255, 255, 0.55)",
              fontWeight: "400",
            }}
          >
            some of advantages of our offers. Here will be brief
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              lineHeight: "30px",
              color: "rgba(255, 255, 255, 0.55)",
              fontWeight: "400",
            }}
          >
            information about our company.
          </Typography>
          <Button
            sx={{
              background: "#FCBD17",
              borderRadius: "26.5px",
              lineHeight: "30px",
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
              fontWeight: "400",
              padding: "10px 28px",
              color: "white",
              mt: 2,
            }}
          >
            Explore
            <ArrowRightAltIcon />
          </Button>
          <CardMedia
            component="img"
            src={big}
            alt="line"
            sx={{
              position: "absolute",
              right: "0",
              bottom: "50px",
              width: "735px",
            }}
          />
          <CardMedia
            component="img"
            src={four}
            alt="line"
            sx={{
              position: "absolute",
              right: "180px",
              bottom: "100px",
              width: "388px",
              height: "388px",
            }}
          />
          <CardMedia
            component="img"
            src={circle}
            alt="line"
            sx={{
              position: "absolute",
              right: "282px",
              bottom: "205px",
              width: "179px",
              height: "179px",
            }}
          />
          <CardMedia
            component="img"
            src={play}
            alt="line"
            sx={{
              position: "absolute",
              right: "282px",
              bottom: "205px",
              width: "179px",
              height: "179px",
            }}
          />
        </Box>
        <Box>
          <CardMedia
            sx={{
              filter: "drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.25))",
              position: "absolute",
              bottom: "-205px",
              zIndex: "10",
            }}
            component="img"
            image={botto}
            alt="abc"
          />
        </Box>
      </Box>
    </Box>
  );
}
