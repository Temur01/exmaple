import { Box, CardMedia } from "@mui/material";
import ButtonsSection from "./ButtonsSection";
import TitleBig from "./TitleBig";
import TitleLittle from "./TitleLittle";
import tree from "../../assets/images/tree.svg";

function Title() {
  return (
    <Box>
      <TitleBig big="little ABout our company" />
      <TitleLittle
        little="Your work is going to fill a large part of your life, and the
          only way to"
      />
      <TitleLittle
        little="be truly satisfied is to do what you believe is great work. And
          the"
      />
      <TitleLittle little="only way to do great work is to love what you do." />
      <ButtonsSection />
      <CardMedia
        component="img"
        image={tree}
        alt="tree"
        sx={{
          position: "absolute",
          bottom: "-100px",
          left: "-235px",
          width: "220px",
          borderRadius: "20px",
          height: "1400px",
        }}
      />
    </Box>
  );
}
export default Title;
