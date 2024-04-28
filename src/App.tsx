import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GamePage from './pages/GamePage';
import HowToPlay from './pages/HowToPlay';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/game" element={<GamePage />}/>
        <Route path="/how-to-play" element={<HowToPlay />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
