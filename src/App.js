import "./App.css";
import Skylab from "./images/skylab-uzun-logo.png";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage/landingPage";
import DetailPage from "./pages/DetailPage/detailPage";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <img src={Skylab} alt="Skylab" className="skylab-logo" />
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/:teamId" element={<DetailPage />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
