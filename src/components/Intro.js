import React from "react";
import "./Intro.scss";

const Intro = () => {
  return (
    <>
      <div className="intro">
        <div className="container-1200">
          <section className="intro__section" id="intro">
            <div className="intro__section--grid">
              <div className="intro__section--grid-right">
                <h2>Brief Intro</h2>
                <p className="modified-large">
                  Hi, I am Ebraj Gurung. I am currently studying
                  Electronics,Communication and Information Engineering from one
                  of the reputed Engineering Campus,WRC.
                </p>
                <p className="modified-large">
                  For the past 1 year I am currently working on the great UI
                  design and providing the life to it through Coding. Feel free
                  to contact me.
                </p>
              </div>
              <div className="intro__section--grid-left">
                <h2>Armors</h2>
                <div className="intro__section--grid-left-list">
                  <p className="modified color-green">#HTML</p>
                  <p className="modified color-pink">#SCSS</p>
                  <p className="modified color-yellow">#JavaScript</p>
                  <p className="modified color-green">#Jekyll</p>
                  <p className="modified color-blue">#React</p>
                  <p className="modified color-dark">#Photoshop</p>
                  <p className="modified color-green-sec">#Adobe XD</p>
                  <p className="modified color-pink">#Figma</p>
                  <p className="modified color-blue-sec">#Illustrator</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Intro;
