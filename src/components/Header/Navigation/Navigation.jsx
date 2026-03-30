import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';
import './Navigation.css';

function NavigationComponent() {
  const location = useLocation();

  return (
    <Nav className="nav-block" variant="underline" activeKey={location.pathname}>
      <Nav.Item>
        <Nav.Link href="/" eventKey="/">Components</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/use-state" eventKey="/use-state">useState</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/crud" eventKey="/crud">CRUD</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavigationComponent;