import React from "react";
export default function Projects(props) {
  document.documentElement.style.setProperty("--length", props.projects.length);
  return (
    <main>
      <div id="carousel">
        <section className="gallery">
          {props.projects.map((project, index) => {
            return (
              <span
                className="pictures"
                key={project.id}
                style={{
                  "--id": `${index + 1}`,
                }}
              >
                <img src={project.image} alt={project.title} />
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
                <div id="title">{project.title}</div>
              </span>
            );
          })}
        </section>
      </div>
    </main>
  );
}
