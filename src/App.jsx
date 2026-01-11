import { BrowserRouter, Routes, Route } from "react-router-dom";
import SentinelNavbar from "./components/NavBar.jsx";
import LandingPage from "./pages/LandingPage";
import Auth from "./pages/Auth.jsx";
import Demo from "./pages/Demo.jsx";
import Home from "./pages/Home.jsx";
import BotPage from "./pages/BotPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <SentinelNavbar />
      <Routes>       
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/auth" element={<Auth />} /> 
        <Route path="/demo" element={<Demo />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/botpage" element={<BotPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;