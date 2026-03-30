import { Routes, Route } from "react-router-dom";
import ComponentsPage from "./pages/ComponentsPage.jsx";
import UseStatePage from "./pages/UseStatePage.jsx";
import CrudPage from "./pages/CrudPage.jsx";
import NavigationComponent from "./components/Header/Navigation/Navigation.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <NavigationComponent />
    
      <Routes>
        <Route path="/" element={<ComponentsPage />} />
        <Route path="/use-state" element={<UseStatePage />} />
        <Route path="/crud" element={<CrudPage />} />
      </Routes>
    </div>
  );
}

export default App;
