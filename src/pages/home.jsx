import React from "react";
import Landing from "./landing";
import Skill from "./skill";
import Certification from "./certification";
import Project from "./project";
import Timeline from "./timeline";
import Contact from "./contact";

export default function Home() {
  return (
    <div className="home-container">
      <Landing />
      <Project />
      <Skill />
      <Certification />
      <Timeline />
      <Contact />
    </div>
  );
}
