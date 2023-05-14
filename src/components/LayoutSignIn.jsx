import { Box, Grid } from "@mui/material";
import React from "react";

const LayoutSignIN = ({ children }) => {
  return (
    <Box width="100vw" height="100%" minHeight="100vh" sx={{ overflowX: "hidden" }}>
      <Box
        position="absolute"
        width="100%"
        minHeight="100vh"
        sx={{
          opacity: 1,
          color: "rgb(52, 71, 103)",
          boxShadow: "none",
          background:
            "linear-gradient(195deg, rgba(66, 66, 74, 0.6), rgba(25, 25, 25, 0.6)) center center / cover no-repeat, url('../../../assets/bgImage.jpg')",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
      <Box px={1} width="100%" height="100vh" mx="auto">
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            {children}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LayoutSignIN;
