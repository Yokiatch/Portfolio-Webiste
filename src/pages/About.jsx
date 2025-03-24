import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Container className="mt-5">
      <motion.h1 
        className="text-center mb-4"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h1>

      <Row className="align-items-center">
        <Col md={6} className="text-center text-md-start">
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="lead">
              I'm Dinesh, a passionate developer with experience in React, Bootstrap, and Competitive Programming.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p>
              I enjoy building projects that challenge me and improve my skills.
            </p>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;