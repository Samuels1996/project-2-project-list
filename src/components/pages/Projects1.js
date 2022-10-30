import React from "react";
import projects from "../../projectData/project1";

// import BeerMeal from "../../images/project1/beermeal.png";
// import CampingJournal from "../../images/project1/campingjournal.png";
// import CheckYourMovie from "../../images/project1/checkyourmovie.png";
// import FindFlix from "../../images/project1/findflix.png";
// import FlightPlanner from "../../images/project1/flightplanner.png";
// import LearningMyWay from "../../images/project1/learningmyway.png";
// import Motivation from "../../images/project1/motivation.png";
// import MusicHub from "../../images/project1/musichub.png";
// import NewsHeadline from "../../images/project1/newsheadline.png";
// import SearchDisplayer from "../../images/project1/searchdisplayer.png";
// import WhatsTheWord from "../../images/project1/whatstheword.png";
// import Where2Watch from "../../images/project1/where2watch.png";
// import WordPlay from "../../images/project1/wordplay.png";
// import Ymdb from "../../images/project1/ymdb.png";

export default function Projects1() {
  console.log(projects);
  return (
    <main>
      {/* <h1 id="title">Hello World!</h1> */}
      <div id="carousel">
        <section className="gallery">
          {projects.map((project, index) => {
            return (
              <span id={`pic${index + 1}`} key={project.id}>
                <img
                  src="./images/project1/flightplanner.png"
                  alt={project.title}
                ></img>
                <a className="demo" href={project.deployed}>
                  Live Demo
                </a>
                <a className="github" href={project.repo}>
                  Github
                </a>
              </span>
            );
          })}

          {/* <span id="pic1">
            <img src={WordPlay} alt="Word Play"></img>
            <a className="demo" href="https://github.com/MpAlfano">
              Live Demo
            </a>
            <a className="github" href="https://github.com/MpAlfano">
              Github
            </a>
          </span>
          <span id="pic2">
            <img src={Where2Watch} alt="Where 2 Watch"></img>
            <a className="demo" href="https://github.com/MpAlfano">
              Live Demo
            </a>
            <a className="github" href="https://github.com/MpAlfano">
              Github
            </a>
          </span>
          <span id="pic3">
            <img src={BeerMeal} alt="Beer Meal"></img>
            <a className="demo" href="https://github.com/MpAlfano">
              Live Demo
            </a>
            <a className="github" href="https://github.com/MpAlfano">
              Github
            </a>
          </span>
          <span id="pic4">
            <img src={CampingJournal} alt="Camping Journal"></img>
          </span>
          <span id="pic5">
            <img src={FlightPlanner} alt="Flight Planner"></img>
          </span>
          <span id="pic6">
            <img src={Ymdb} alt="YMDB"></img>
          </span>
          <span id="pic7">
            <img src={LearningMyWay} alt="Learning My Way"></img>
          </span>
          <span id="pic8">
            <img src={FindFlix} alt="FindFlix"></img>
          </span>
          <span id="pic9">
            <img src={Motivation}></img>
          </span>
          <span id="pic10">
            <img src={SearchDisplayer}></img>
          </span>
          <span id="pic11">
            <img src={CheckYourMovie}></img>
          </span>
          <span id="pic12">
            <img src={NewsHeadline}></img>
          </span>
          <span id="pic13">
            <img src={MusicHub}></img>
          </span>
          <span id="pic14">
            <img src={WhatsTheWord}></img>
          </span> */}
        </section>
      </div>
    </main>
  );
}
