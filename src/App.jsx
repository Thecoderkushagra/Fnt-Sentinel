import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SentinelNavbar from "./components/NavBar.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <SentinelNavbar />
      <Routes>       
        <Route path="/" element={<LandingPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;