import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { useSelector } from "react-redux";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { handlerAdd } = useSelector((state) => ({ ...state }));
  const { isCollapsed } = handlerAdd;
  return (
    <Box sx={{ marginLeft: isCollapsed ? "7em" : 0 }}>
      <Typography variant="h4" color={colors.grey[100]} fontWeight="bold" sx={{ m: "0 0 5px 0" }}>
        {title}
      </Typography>
      <Typography variant="h5" color={colors.grey[100]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
