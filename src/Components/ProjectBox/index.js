import React, { useState } from "react";
import { Project, Overlay, BtnView } from "./Box";
import { AiFillEye } from "react-icons/ai";
import Modal from "./Modal";

const ProjectBox = ({ ...props }) => {
  const {
    gif,
    projectLive,
    projectSource,
    technologies,
    projectName,
    projectDesc,
    projectImg,
  } = props;
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Project>
        <img src={projectImg} style={{ width: "100%" }} alt="" />
        <Overlay>
          <BtnView onClick={() => setToggle(!toggle)}>
            <AiFillEye />
            VIEW PROJECT
          </BtnView>
        </Overlay>
      </Project>
      <Modal
        gif={gif}
        setToggle={setToggle}
        demo={projectLive}
        code={projectSource}
        technology={technologies}
        name={projectName}
        summary={projectDesc}
        toggle={toggle}
      />
    </>
  );
};

export default ProjectBox;
