import './App.css';
import MainMenu from './components/layouts/MainMenu/MainMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GameTitle from './components/common/GameTitle';
import NavButtons from './components/common/NavButtons';
import Box from '@mui/material/Box';
import { containerStyle } from './styles/containerStyle';
import SelectLevel from './components/layouts/SelectLevel/SelectLevel';
import Game from './components/layouts/Game/Game';

function App() {
  return (
    <Box sx={containerStyle}>
      <GameTitle />
      <NavButtons />
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainMenu />}/>
              <Route path="/select-level" element={<SelectLevel />}/>
              <Route path="/:boardSize/:levelName" element={<Game />}/>
              <Route path="/create-map" element={<div>create map page</div>}/>
              <Route path="/load-map" element={<div>load map page</div>}/>
              <Route path="*" element={<div>Error</div>}/>
          </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
