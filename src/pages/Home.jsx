import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center text-center vh-100">
      <motion.h1 
        className="display-4 fw-bold"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Dinesh 👋
      </motion.h1>
      
      <motion.p 
        className="lead"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Aspiring Developer | Problem Solver | Tech Enthusiast
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Button variant="primary" href="/projects">View My Projects</Button>
      </motion.div>
    </Container>
  );
};

export default Home;
