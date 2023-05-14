import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const Author = ({ image, name }) => {
  return (
    <Box display="flex" alignItems="center" lineHeight={1}>
      <Avatar sx={{ width: 24, height: 24 }} alt={name} src={image} />
      <Box ml={2} lineHeight={1}>
        <Typography
          display="block"
          variant="button"
          fontWeight={400}
          sx={{ textTransform: "capitalize" }}
        >
          {name}
        </Typography>
      </Box>
    </Box>
  );
};

export default Author;
