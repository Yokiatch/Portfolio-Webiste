import { Container, Row, Col, Image as BootstrapImage } from "react-bootstrap";
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
        <Col md={6} className="text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }}
          >
            <BootstrapImage 
              src="/images/profile.jpg" 
              roundedCircle 
              fluid 
              style={{ width: "250px", height: "250px", objectFit: "cover" }} 
            />

          </motion.div>
        </Col>

        <Col md={6} className="text-center text-md-start">
          <motion.p 
            className="lead"
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            I'm Dinesh, a passionate developer with experience in React, Bootstrap, and Competitive Programming.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            I enjoy building projects that challenge me and improve my skills.
          </motion.p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
