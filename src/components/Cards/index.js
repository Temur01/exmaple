import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Card, CardMedia, Paper, Typography } from "@mui/material";
import dataProduct from "./Data";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   textAlign: "start",
//   color: theme.palette.text.secondary,
// }));

export default function BasicGrid() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, py: 4 }}>
        <Grid container spacing={6}>
          {dataProduct.map((item, i) => {
            return (
              <Grid item xs={12} md={6} key={i}>
                {/* <Item> */}
                <Card
                  sx={{
                    display: "flex",
                    py: 2,
                    px: 1,
                    width: "492px",
                    background: "white",
                    border: "2px solid white",
                    transition: "0.3s",
                    "&:hover": {
                      border: "2px solid #037B35",
                      borderRadius: "8px",
                      overflow: "hidden",
                      transform: `scale(1.05)`,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.img}
                    sx={{
                      height: "166.5px",
                      width: "206px",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      px: 3,
                      py: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "20px",
                        lineHeight: "22px",
                        fontWeight: "800",
                        textTransform: "uppercase",
                        color: "black",
                        mb: 1,
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "11px",
                        lineHeight: "20px",
                        color: "black",
                        fontWeight: "400",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </Card>
                {/* </Item> */}
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}
