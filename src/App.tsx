import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Projetos from "./pages/Projetos/projetos";
import Sobre from "./pages/Sobre/sobre";
import Tecnologias from "./pages/Tecnologias/tecnologias";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;
