import { Card, Button } from "react-bootstrap";

const ProjectCard = ({ title, description, link }) => (
  <Card className="h-100 shadow">
    <Card.Body className="d-flex flex-column">
      <Card.Title>{title}</Card.Title>
      <Card.Text className="flex-grow-1">{description}</Card.Text>
      <Button variant="primary" href={link} className="mt-auto">View Project</Button>
    </Card.Body>
  </Card>
);

export default ProjectCard;
