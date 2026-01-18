import { BrowserRouter, Routes, Route } from "react-router-dom";
import SentinelNavbar from "./components/NavBar.jsx";
import LandingPage from "./pages/LandingPage";
import Demo from "./pages/Demo.jsx";
import BotPage from "./pages/BotPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <SentinelNavbar />
      <Routes>       
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/demo" element={<Demo />} /> 
        <Route path="/botpage" element={<BotPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;