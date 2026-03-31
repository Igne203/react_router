import { Routes, Route } from "react-router-dom";
import ComponentsPage from "./pages/ComponentsPage.jsx";
import UseStatePage from "./pages/UseStatePage.jsx";
import CrudPage from "./pages/CrudPage.jsx";
import "./App.css";
import NotFound from "./pages/Error/ErrorPage.jsx";
import HeaderComponent from "./components/Header/HeaderComponent.jsx";

function App() {
  return (
    <div>

      <HeaderComponent />
    
      <Routes>
        <Route path="/" element={<ComponentsPage />} />
        <Route path="/use-state" element={<UseStatePage />} />
        <Route path="/crud" element={<CrudPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
