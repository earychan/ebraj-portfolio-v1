import React, { useState, useEffect } from "react";
import "./Home.scss";
import "./Button";
import Navbar from "./Navbar";
import ResponsiveBar from "./ResponsiveBar";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const navbarChanger = () => {
      if (window.innerWidth <= 910) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    navbarChanger();
    window.addEventListener("resize", navbarChanger);
  }, []);
  return (
    <>
      <div className="home">
        <div className="container-1200">
          <section className="home__section" id="home">
            {isMobile ? <ResponsiveBar /> : <Navbar />}
            {/* Main Section */}
            <div className="home__section--main">
              <h1 className="home__section--main-title">
                Ebraj Gurung is a{" "}
                <span className="underline">Frontend Developer</span>, who loves
                to design & give the life to that design through coding.
              </h1>
              <p className="home__section--main-para italic">
                I design as well as develop the sites that are unique in design
                and probabily have the greatest UX.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
