import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";

const ProjectCard = lazy(() => import("../components/ProjectCard"));

const Projects = () => {
  const projectList = [
    { title: "Spotify Clone", description: "A music streaming app built with React and Firebase.", link: "#" },
    { title: "Portfolio Website", description: "A personal website showcasing my skills and projects.", link: "#" },
  ];

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">My Projects</h1>
      <Suspense fallback={<p className="text-center">Loading projects...</p>}>
        <Row className="justify-content-center">
          {projectList.map((project, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-4 d-flex">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="w-100"
              >
                <Card className="h-100 shadow">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text className="flex-grow-1">{project.description}</Card.Text>
                    <Button variant="primary" href={project.link} className="mt-auto">View Project</Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Suspense>
    </Container>
  );
};

export default Projects;
