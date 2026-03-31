import { Routes, Route } from "react-router-dom";
import ComponentsPage from "./pages/ComponentsPage.jsx";
import UseStatePage from "./pages/UseStatePage.jsx";
import CrudPage from "./pages/CrudPage.jsx";
import NavigationComponent from "./components/Header/Navigation/Navigation.jsx";
import "./App.css";
import NotFound from "./pages/Error/ErrorPage.jsx";

function App() {
  return (
    <div>
      <NavigationComponent />
    
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
