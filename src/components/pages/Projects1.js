import React from "react";
import projects from "../../projectData/project1";

export default function Projects1() {
  console.log(projects);
  return (
    <main>
      <div id="carousel">
        <section className="gallery">
          {projects.map((project, index) => {
            return (
              <span id={`pic${index + 1}`} key={project.id}>
                <img src={project.image} alt={project.title}></img>
                <a className="demo" href={project.deployed}>
                  Live Demo
                </a>
                <a className="github" href={project.repo}>
                  Github
                </a>
              </span>
            );
          })}
        </section>
      </div>
    </main>
  );
}
