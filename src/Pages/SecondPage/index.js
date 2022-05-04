import { Box, CardMedia, Typography } from "@mui/material";
import BasicGrid from "../../components/Cards";
import trac from "../../assets/images/trac.svg";
import cloud from "../../assets/images/cloud.svg";
import nature from "../../assets/images/nature.svg";
import circle from "../../assets/images/circle.svg";
import Title from "./Title";
import TitleBig from "./TitleBig";
import TitleLittle from "./TitleLittle";
import BottomBrends from "../../components/Bottom";

export default function SecondPage() {
  return (
    <Box sx={{ px: "235px", mt: 35 }}>
      <TitleBig big="our production" />
      <TitleLittle little="Your work is going to fill a large part of your life, and the only way to" />
      <TitleLittle little="be truly satisfied is to do what you believe is great work]" />
      <Box>
        <BasicGrid />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pr: 50,
          pt: 18,
          position: "relative",
        }}
      >
        <Title />
        <Box>
          <CardMedia
            component="img"
            image={trac}
            alt="traktor"
            sx={{
              position: "absolute",
              bottom: "-110px",
              right: "150px",
              width: "292px",
              zIndex: "10",
            }}
          />

          <CardMedia
            component="img"
            image={circle}
            alt="circle"
            sx={{
              position: "absolute",
              bottom: "20px",
              width: "367px",
              right: "-30px",
            }}
          />
          <CardMedia
            component="img"
            image={cloud}
            alt="nature"
            sx={{
              position: "absolute",
              bottom: "80px",
              width: "292px",
              right: "-235px",
              width: "367px",
            }}
          />
          <CardMedia
            component="img"
            image={nature}
            alt="nature"
            sx={{
              position: "absolute",
              bottom: "0px",
              width: "292px",
              left: "520px",
              width: "367px",
            }}
          />
        </Box>
      </Box>
      <BottomBrends />
    </Box>
  );
}
