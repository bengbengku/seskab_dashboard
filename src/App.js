import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/TopBar";
import Sidebar from "./scenes/global/SideBar";
import Dashboard from "./scenes/dashboard";
import Pegawai from "./scenes/pegawai";

function App() {
  const [theme, colorMode] = useMode();
  // const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* Reset CSS Use CssBaseline */}
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pegawai" element={<Pegawai />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
