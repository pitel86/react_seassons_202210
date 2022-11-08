import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Characters from './pages/Characters';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
    <Navbar />
      <Routes>
        <Route path="" element={<Home />}/>
        <Route path="characters" element={<Characters />}/>
        <Route path="about" element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
