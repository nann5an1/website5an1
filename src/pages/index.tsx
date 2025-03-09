import Home from "./Home";
import React from "react";
import DockDemo from "./Nav";
import TechStack from "./TechStack";
import Experience from "./Experience";
import ExperienceTitle from "./ExperienceTitle";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function index() {
  return (
  <div className="grid grid-cols-1">
      <Home />
      <ExperienceTitle />
      <Experience title="EzRutin" index="1" about="A producitivity app that helps the users boost up daily routine" lang="Next, React, TailWind and FireBase"/>
      <Experience title="Hackomania 2025" index="2" about="Presented a project on a web-app that helps the users to quit social-media addiction and in hand also supports back the tech community." lang="Next, React, TailWind and FireBase"/>
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
      <DockDemo />
  </div>
  );
}

export default index