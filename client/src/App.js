import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {themeSettings} from './theme';
import {createTheme} from '@mui/material/styles'
import { useSelector } from "react-redux";
import { useMemo } from "react";
function App() {
  const mode = useSelector((state) => state.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
    <div className="app">
     <BrowserRouter>
     <ThemeProvider theme={theme}>
      <CssBaseline/>
     <Routes>
      <Route path="/" element={<LoginPage/>}></Route>
      <Route path="/home" element={<HomePage/>}></Route>
      <Route path="/profile/:userId" element={<ProfilePage/>}></Route>
     </Routes>
     </ThemeProvider>
     </BrowserRouter>
    </div>
  );
}

export default App;
