import ComponentsCard from "../components/Card/ComponentsCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

function ComponentsPage() {

  return (
    <div className="main-block">
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={4} className="card-col">
            <ComponentsCard
              character={{
                name: "Arnas",
                age: 21,
                job: "Hero",
                image: "Hero.png",
              }}
            />
          </Col>
          <Col lg={4} className="card-col">
            <ComponentsCard
              character={{
                name: "Elara",
                age: 28,
                job: "Mage",
                image: "Mage.png",
              }}
            />
          </Col>
          <Col lg={4} className="card-col">
            <ComponentsCard
              character={{
                name: "XR-17",
                age: 5,
                job: "Combat Robot",
                image: "Robot.png",
              }}
            />
          </Col>
          <Col lg={4} className="card-col">
            <ComponentsCard
              character={{
                name: "Lina",
                age: 19,
                job: "Archer",
                image: "Archer.png",
              }}
            />
          </Col>
          <Col lg={4} className="card-col">
            <ComponentsCard
              character={{
                name: "Milda",
                age: 26,
                job: "Healer",
                image: "Healer.png",
              }}
            />
          </Col>
          <Col lg={4} className="card-col">
            <ComponentsCard
              character={{
                name: "Tomas",
                age: 32,
                job: "Soldier",
                image: "Soldier.png",
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ComponentsPage;
