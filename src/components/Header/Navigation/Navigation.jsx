import { Link } from "react-router-dom";
import "./Navigation.css";

function NavigationComponent() {
  return (
    <nav>
      <Link to="/">Components</Link>
      <Link to="/use-state">useState</Link>
      <Link to="/crud">CRUD</Link>
    </nav>

  );
}

export default NavigationComponent;
