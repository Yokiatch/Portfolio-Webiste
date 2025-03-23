const Footer = () => {
  return (
    <footer className="text-center py-3 bg-dark text-white">
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <div>
        <a href="https://github.com/Yokiatch" target="_blank" rel="noopener noreferrer" className="mx-2">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://linkedin.com/in/dinesh-singh-1e324f5" target="_blank" rel="noopener noreferrer" className="mx-2">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
