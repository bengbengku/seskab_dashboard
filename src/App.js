import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/TopBar";
import Sidebar from "./scenes/global/SideBar";
import Dashboard from "./scenes/dashboard";
import Pegawai from "./scenes/pegawai";
import { useSelector } from "react-redux";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import NotLoggedInRoutes from "./routes/NotLoggedInRoutes";
import SignIn from "./scenes/auth/signin";

function App() {
  const [theme, colorMode] = useMode();
  const { user } = useSelector((state) => ({ ...state }));
  // const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* Reset CSS Use CssBaseline */}
        <CssBaseline />
        <div className="app">
          {user && <Sidebar />}
          <main className="content">
            {user && <Topbar />}
            <Routes>
              <Route element={<LoggedInRoutes />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/pegawai" element={<Pegawai />} />
              </Route>
              <Route element={<NotLoggedInRoutes />}>
                <Route path="/signin" element={<SignIn />} />
              </Route>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
