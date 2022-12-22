import './App.css';
import MainMenu from './components/layouts/MainMenu/MainMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GameTitle from './components/common/GameTitle';
import NavButtons from './components/common/NavButtons';

function App() {
  return (
    <>
      <GameTitle />
      <NavButtons />
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainMenu />}/>
              <Route path="/select-level" element={<div>select level page</div>}/>
              <Route path="/create-map" element={<div>create map page</div>}/>
              <Route path="/load-map" element={<div>load map page</div>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
