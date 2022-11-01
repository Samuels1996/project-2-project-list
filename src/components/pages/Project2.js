import React from "react";  
import projects from "../../projectData/project2";

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
                  <a
                    className="demo"
                    href={project.deployed}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    className="github"
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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