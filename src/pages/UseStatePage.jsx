import { useState } from "react";
import data from "../data/characters_local_img";
import ComponentsCard from "../components/Card/ComponentsCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

function UseStatePage() {
  const [characters, setCharacters] = useState(data);

  const characterItems = characters.map((c) => (
    <Col key={c.name} lg={4} className="card-col">
      <ComponentsCard character={c}></ComponentsCard>
    </Col>
  ));

  return (
    <div className="main-block">
      <Container>
        <Row className="justify-content-md-center">{characterItems}</Row>
      </Container>
    </div>
  );
}
export default UseStatePage;
