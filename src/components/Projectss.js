import React from "react";
import ProjectItemm from "./ProjectItemm";
import "./ProjectItemm.scss";

const Projectss = () => {
  return (
    <section className="projects__section" id="projects">
      <div className="container-1200">
        <div className="grid__container--projects">
          <ProjectItemm />
          <ProjectItemm />
          <ProjectItemm />
          <ProjectItemm />
          <ProjectItemm />
          <ProjectItemm />
        </div>
      </div>
    </section>
  );
};

export default Projectss;
