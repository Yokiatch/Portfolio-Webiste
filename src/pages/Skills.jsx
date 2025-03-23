import React from "react";

const Skills = () => (
  <div className="container mt-5 text-center">
    <h2 className="mb-4">Skills</h2>
    <div className="row justify-content-center">
      {["React", "Firebase", "C++", "JavaScript", "Problem Solving"].map((skill, index) => (
        <div key={index} className="col-md-2 col-4 mb-3">
          <span className="badge bg-primary p-2 fs-6">{skill}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
