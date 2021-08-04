import React from "react";

const ProjectItem = ({ src, alt, title, children, link, btnDesc }) => {
  return (
    <>
      <div className="project__section--grid-item">
        <img src={src} alt={alt} />
        <div className="project__section--grid-item-sub">
          <h2>{title}</h2>
          <p>{children}</p>
          <a className="btn btn-dark" href={link} target="blank">
            {btnDesc}
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
