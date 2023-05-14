import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const LayoutGridBox = ({ children, title, subtitle, action }) => {
  const { handlerAdd } = useSelector((state) => ({ ...state }));
  const { isCollapsed, showAddForm } = handlerAdd;
  const dispatch = useDispatch();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isDark =
    theme.palette.mode === "dark"
      ? "linear-gradient(40deg, #3E4396 50%, #5055bb 70%)"
      : "linear-gradient(40deg, #000000 30%, #222229 90%)";
  const isShadowHeader =
    theme.palette.mode === "dark"
      ? "0px 0px 10px 5px rgba(31, 42, 64, 0.5)"
      : "0px 0px 10px 5px rgba(31, 42, 64, 0.237)";

  const addHandler = () => {
    action();
    dispatch({
      type: "isCollapsedAndShowAdd",
      payload: { ...handlerAdd, showAddForm: true },
    });
  };

  useEffect(() => {
    return () => {
      dispatch({
        type: "isCollapsedAndShowAdd",
        payload: { ...handlerAdd, showAddForm: false },
      });
    };
  }, []);

  return (
    <Card
      sx={{
        background: colors.primary[400],
        boxShadow: "0px 0px 10px 5px rgba(31, 42, 64, 0.34)",
        borderRadius: "16px",
        marginTop: "4em",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "97%",
          height: 90,
          background: isDark,
          boxShadow: isShadowHeader,
          borderRadius: "8px",
          zIndex: 999,
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          marginX="2em"
          sx={{
            transform: "translateY(19px)",
          }}
        >
          <Box>
            <Box display="flex" alignItems="center" gap={2}>
              {showAddForm && (
                <IconButton
                  aria-label="arrow back icon"
                  color="inherit"
                  component="label"
                  onClick={() => {
                    dispatch({
                      type: "isCollapsedAndShowAdd",
                      payload: { ...handlerAdd, showAddForm: false },
                    });
                  }}
                >
                  <ArrowBackIosNewIcon />
                </IconButton>
              )}
              <Box>
                <Typography variant="h4" color="#fff" fontWeight="bold">
                  {`${showAddForm ? "Tambah " + title : title}`}
                </Typography>
                <Typography variant="h5" color="#fff">
                  {subtitle}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Button
            sx={{
              fontWeight: 700,
              backgroundColor: "#F44336",
              ":hover": { backgroundColor: "#d43b30" },
            }}
            variant="contained"
            startIcon={<PersonAddAltIcon />}
            onClick={addHandler}
          >
            Tambah
          </Button>
        </Box>
      </Box>

      <CardContent
        sx={{
          maxWidth: isCollapsed ? "calc(100% - 200px)" : "calc(100% - 8px)",
          marginLeft: isCollapsed ? "7em" : "",
        }}
      >
        <Box
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              //   marginLeft: isCollapsed ? "12em" : "",
              marginTop: "3em",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: "#fff",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor:
                theme.palette.mode === "dark" ? colors.primary[400] : colors.primary[400],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor:
                theme.palette.mode === "dark" ? colors.primary[400] : colors.primary[400],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[400]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
          }}
        >
          {children}
        </Box>
      </CardContent>
    </Card>
  );
};

export default LayoutGridBox;
