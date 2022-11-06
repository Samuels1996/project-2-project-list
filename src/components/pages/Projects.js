import React from "react";
export default function Projects(props) {
  console.log(props);
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
                  "--picNum": `${props.projects.length}`,
                }}
              >
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
                <div id="title">{project.title}</div>
              </span>
            );
          })}
        </section>
      </div>
    </main>
  );
}
