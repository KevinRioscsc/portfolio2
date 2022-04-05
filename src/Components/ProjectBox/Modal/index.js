import React from 'react'
import {ModalOverlay, Modals, Close, Left, Right, ProjectLabel,
        ProjectName, ProjectTech, ProjectTechnology, ProjectAbout,
        ProjectSummary, Btn, BtnDemo, BtnCode} from './Modal'
import {AiFillEye} from 'react-icons/ai'
import {BiCodeAlt} from 'react-icons/bi'
import {ImCross} from 'react-icons/im'

const Modal = ({toggle, name, summary, technology, demo, code, setToggle, gif}) => {
  return (
    <div>
        <ModalOverlay toggle = {toggle}>
            <Modals toggle = {toggle}>
                <Close onClick={() => setToggle(!toggle)}>
                    <ImCross size={20} color='#94a4b4'/>
                </Close>
                <Left>
                        <iframe src={gif} width="100%" height="100%" frameBorder="0"  ></iframe>
                </Left>
                <Right>
                    <ProjectLabel>Project</ProjectLabel>
                    <ProjectName>{name}</ProjectName>
                    <ProjectTech>
                        {
                            technology.map(item => {
                                return <ProjectTechnology>{item}</ProjectTechnology>
                            })
                        }
                        
                    </ProjectTech>
                    <ProjectAbout>About</ProjectAbout>
                    <ProjectSummary>
                        {summary}
                    </ProjectSummary>
                    <Btn>
                        <a href={demo} target="_blank" rel="noopener noreferrer">
                            <BtnDemo>
                                <AiFillEye/>
                                DEMO
                            </BtnDemo>
                        </a>
                        <a href={code} target="_blank" rel="noopener noreferrer">
                            <BtnCode>
                                <BiCodeAlt/>
                                CODE
                            </BtnCode>
                        </a>
                    </Btn>
                </Right>
            </Modals>
        </ModalOverlay>
    </div>
  )
}

export default Modal