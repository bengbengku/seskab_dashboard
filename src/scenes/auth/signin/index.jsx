import React from "react";
import LayoutSignIN from "../../../components/LayoutSignIn";
import { Box, Card, useTheme } from "@mui/material";
import { tokens } from "../../../theme";

const SignIn = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <LayoutSignIN>
      <Card
        sx={{
          background: colors.primary[400],
          boxShadow: "0px 0px 10px 5px rgba(31, 42, 64, 0.34)",
          borderRadius: "16px",
          marginTop: "4em",
        }}
      >
        <Box
          variant="gradient"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        ></Box>
      </Card>
    </LayoutSignIN>
  );
};

export default SignIn;
