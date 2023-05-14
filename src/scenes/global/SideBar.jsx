import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const dispatch = useDispatch();
  const { handlerAdd } = useSelector((state) => ({ ...state }));
  const { isCollapsed } = handlerAdd;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
          borderRadius: "16px",
          marginLeft: "1em",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed} style={{ height: "95vh", marginTop: "1em" }}>
        <Menu iconShape="square">
          {/* LOGO DAN MENU ICON */}
          <MenuItem
            onClick={() =>
              dispatch({
                type: "isCollapsedAndShowAdd",
                payload: { ...handlerAdd, isCollapsed: !isCollapsed },
              })
            }
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
                  <img
                    alt="profile-user"
                    width="30px"
                    src={`../../assets/seskab_garuda.png`}
                    style={{ cursor: "pointer", borderRadius: "50%", objectFit: "contain" }}
                  />
                  <Typography variant="h5" color={colors.grey[100]} fontWeight={700}>
                    Sekretariat Kabinet
                  </Typography>
                </Box>
                {/* <IconButton
                  onClick={() =>
                    dispatch({
                      type: "isCollapsedAndShowAdd",
                      payload: { ...handlerAdd, isCollapsed: !isCollapsed },
                    })
                  }
                  >
                  <MenuOutlinedIcon />
                </IconButton> */}
              </Box>
            )}
          </MenuItem>
          <Divider
            variant="fullWidth"
            sx={{
              flexShrink: 0,
              borderTop: "0px solid rgba(0, 0, 0, 0.08)",
              borderRight: "0px solid rgba(0, 0, 0, 0.08)",
              borderLeft: "0px solid rgba(0, 0, 0, 0.08)",
              height: "0.1025rem",
              borderBottom: "none",
              opacity: 0.25,
              backgroundColor: "transparent",
              backgroundImage:
                "linear-gradient(to right, rgba(255, 255, 255, 0), rgb(71,76,168), rgba(255, 255, 255, 0)) !important",
              transform: "translateY(-10px)",
            }}
          />

          <Box paddingLeft={isCollapsed ? undefined : "5%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <SubMenu title="Data" icon={<ReceiptOutlinedIcon />}>
              <Item
                title="Pegawai"
                to="/pegawai"
                icon={<ContactsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Sub Contoh"
                to="/subcontoh"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>

            <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>
              Pages
            </Typography>
            <Item
              title="Contoh"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
