import React from "react";

const Resume = () => (
  <div className="container mt-5 text-center">
    <h2 className="mb-3">Resume</h2>
    <p>Download my resume below:</p>
    <a href="/Resume.pdf" download className="btn btn-primary btn-lg mt-2">
      📄 Download Resume
    </a>
  </div>
);

export default Resume;
