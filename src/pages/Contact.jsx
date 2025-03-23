import { Container, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Contact Me</h1>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Your message" required />
          </Form.Group>

          <Button variant="primary" type="submit">Send Message</Button>
        </Form>
      </motion.div>
    </Container>
  );
};

export default Contact;
