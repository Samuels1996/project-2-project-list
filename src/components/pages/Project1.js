import React from "react";
export default function Projects1(props) {
  console.log(props);

  return (
    <main>
      <div id="carousel">
        <section className="gallery">
          {props.projects.map((project, index) => {
            if (project.deployed === false) {
              return (
                <span id={`${props.name}${index + 1}`} key={project.id}>
                  <img src={project.image} alt={project.title}></img>
                  <div id="title">{project.title}</div>
                </span>
              );
            } else {
              return (
                <span id={`${props.name}${index + 1}`} key={project.id}>
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
            }
          })}
        </section>
      </div>
    </main>
  );
}
