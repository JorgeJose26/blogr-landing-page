
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import Menu from './Pages/Menu/Menu';
import { Routes, Route, BrowserRouter } from "react-router-dom";



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<LandingPage />} />
          <Route path='/menu' element={<Menu />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
