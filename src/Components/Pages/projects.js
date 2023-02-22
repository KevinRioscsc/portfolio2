import React from "react";
import ProjectBox from "../ProjectBox";
import { projects } from "../../ProjectsData";

const Projects = () => {
  return (
    <>
      <div className="mainApp">
        <div className="main proMain">
          <h2 className="second-header small ">Portfolio</h2>
          <sub className="secondary-sub small2">
            These are my favorite projects I've worked on for the past year.
            Have a look around.
          </sub>
          <div className="space">
            <div className="flex">
              {projects.map((item, index) => {
                return <ProjectBox key={index} {...item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
