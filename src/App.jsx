import { Routes, Route } from "react-router-dom";
import ComponentsPage from "./pages/ComponentsPage.jsx";
import UseStatePage from "./pages/UseStatePage.jsx";
import CrudPage from "./pages/CrudPage.jsx";
import "./App.css";

function App() {
  <div>
    <Routes>
      <Route path="/" element={<ComponentsPage />} />
      <Route path="/use-state" element={<UseStatePage />} />
      <Route path="/crud" element={<CrudPage />} />
    </Routes>
  </div>;
}

export default App;
