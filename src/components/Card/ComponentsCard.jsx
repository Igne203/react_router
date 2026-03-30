import Card from "react-bootstrap/Card";

function ComponentsCard({ character }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="card-title">{character.name}</Card.Title>
        <Card.Img src={`/assets/${character.image}`} />
        <div className="card-text">
          <p>name: {character.name}</p>
          <p>age: {character.age}</p>
          <p>job: {character.job}</p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ComponentsCard;
