import "./App.css";
import GameTitle from "./components/common/GameTitle";
import NavButtons from "./components/common/NavButtons";
import Box from "@mui/material/Box";
import { containerStyle } from "./styles/containerStyle";
import AppRouter from "./AppRouter";

function App() {
  return (
    <Box sx={containerStyle}>
      <GameTitle />
      <NavButtons />
      <AppRouter />
    </Box>
  );
}

export default App;
