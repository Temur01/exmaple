import { Box, Button } from "@mui/material";

const Buttons = (props) => {
  return (
    <div>
      <Button
        sx={{
          color: "#037B35",
          textTransform: "uppercase",
          fontSize: "18px",
          lineHeight: "30px",
          transition: "0.1s",
          py: 1,
          px: 3,

          border: "1px solid white",
          "&:hover": {
            border: "1px solid #037B35",
            borderRadius: "20px",
            background: "transparent",
          },
        }}
      >
        {props.title}
      </Button>
    </div>
  );
};
export default Buttons;
