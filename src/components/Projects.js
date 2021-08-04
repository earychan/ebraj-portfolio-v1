import React from "react";
import "./Projects.scss";

import Pomodoro from "../images/projects/Pomodoro.jpg";
import Game from "../images/projects/Game.jpg";
import Weather from "../images/projects/Weather.jpg";
import Landing from "../images/projects/Landing.jpg";
import Todo from "../images/projects/Todo.jpg";
import Typing from "../images/projects/Typing.jpg";
import Kodesign from "../images/projects/Kodesign.jpg";
import Gradient from "../images/projects/Gradient.jpg";
import AnimeLibrary from "../images/projects/AnimeLibrary.jpg";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <>
      <section className="project__section" id="projects">
        <div className="container-1400">
          <div className="project__section--grid">
            <ProjectItem
              link="https://pomodoro-timer-ebraj.netlify.app/"
              title="Pomodoro Timer"
              src={Pomodoro}
              alt="Pomdoro Timer Project Ebraj"
              btnDesc="Let's See"
            >
              Pomodoro Timer is simple site/app where you can set the session &
              break time.
            </ProjectItem>
            <ProjectItem
              link="https://memory-game-ebraj.netlify.app/"
              title="Memory Game"
              src={Game}
              alt="Memory Game Project Ebraj"
              btnDesc="Let's Play"
            >
              Memory Game where you have to find the same cards & match them.
            </ProjectItem>
            <ProjectItem
              link="https://weather-info-ebraj.netlify.app/"
              title="Weather Info"
              src={Weather}
              alt="Weather Info Project Ebraj"
              btnDesc="Let's Search"
            >
              Simple weather app to give you the weather Info of location
              entered.
            </ProjectItem>

            <ProjectItem
              link="https://kodesign-ebraj.netlify.app/"
              title="Kodesign"
              src={Kodesign}
              alt="Kodesign Project Ebraj"
              btnDesc="Let's See"
            >
              Kodesign is my personal website project, inspired from onepagelove
              site.
            </ProjectItem>
            <ProjectItem
              link="https://todo-app-ebraj.netlify.app/"
              title="Todo App"
              src={Todo}
              alt="Todo Project Ebraj"
              btnDesc="Let's List"
            >
              As the name suggest, it is simple site/app where you can save your
              todo tasks.
            </ProjectItem>
            <ProjectItem
              link="https://animelibrary-ebraj.netlify.app/"
              title="Anime Library"
              src={AnimeLibrary}
              alt="Anime Library Project Ebraj"
              btnDesc="Let's See"
            >
              AnimeLibrary is the place where you can find any anime.
            </ProjectItem>
            <ProjectItem
              link="https://gradient-boxes-ebraj.netlify.app/"
              title="Gradient Boxes"
              src={Gradient}
              alt="Gradient Boxes Project Ebraj"
              btnDesc="Let's See"
            >
              It is a simple site I created to explore the gradient using CSS.
            </ProjectItem>
            <ProjectItem
              link="https://typing-speed-test-ebraj.netlify.app/"
              title="Typing Speed Test"
              src={Typing}
              alt="Typing Speed Project Ebraj"
              btnDesc="Let's Test"
            >
              A site where you can see/test your typing speed and your accuracy.
            </ProjectItem>
            <ProjectItem
              link="https://landing-page-ebraj.netlify.app/"
              title="Simple Page"
              src={Landing}
              alt="Simple Page Project Ebraj"
              btnDesc="Let's See"
            >
              Just a simple page created to see the power of flex and the grid.
            </ProjectItem>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
