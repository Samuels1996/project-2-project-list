import React from "react";

export default function Projects1(props) {
  console.log(props);

  // const navigate = useNavigate;

  // const navigateProject2 = () => {
  //   navigate('/Projects2');
  // }

  return (
    <main>
      {/* <button onClick={navigateProject2}>Test</button> */}
      {/* <Routes>
        <Route path="/Projects2" element={<Projects2 />} />
      </Routes> */}
      <div id="carousel">
        <section className="gallery">
          {props.projects.map((project, index) => {
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
                <div id="title">{project.title}</div>
              </span>
            );
          })}
        </section>
      </div>
    </main>
  );
}
