import React from "react";
import ProjectItemm from "./ProjectItemm";
import "./ProjectItemm.scss";

const projectObj = [
  {
    name: "Pomodoro Timer",
    techUsed: "React + Scss",
    liveLink: "https://pomodoro-timer-ebraj.netlify.app/",
    repoLink: "https://github.com/Ebraj/pomodoro-timer-using-react",
  },
  {
    name: "Weather Info.",
    techUsed: "Html + Scss + JS",
    liveLink: "https://pomodoro-timer-ebraj.netlify.app/",
    repoLink: "https://github.com/Ebraj/pomodoro-timer-using-react",
  },
  {
    name: "Weather Info.",
    techUsed: "Html + Scss + JS",
    liveLink: "https://pomodoro-timer-ebraj.netlify.app/",
    repoLink: "https://github.com/Ebraj/pomodoro-timer-using-react",
  },
];

const Projectss = () => {
  return (
    <section className="projects__section" id="projects">
      <div className="container-1200">
        <div className="grid__container--projects">
          {projectObj.map((project) => {
            return <ProjectItemm projectDetail={project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projectss;
