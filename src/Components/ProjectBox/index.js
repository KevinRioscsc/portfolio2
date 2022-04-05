import React, {useState} from 'react'
import {Project, Overlay, BtnView} from './Box'
import {AiFillEye} from 'react-icons/ai'
import Modal from './Modal'

const ProjectBox = ({img, name, summary, technology, demo, code, gif}) => {
    const [toggle, setToggle] = useState(false)
  return (
    <div>
        <Project>
            <img src={img} style={{width:'100%'}} alt="" />
            <Overlay>
                <BtnView onClick={() => setToggle(!toggle)}>
                    <AiFillEye/>
                    VIEW PROJECT
                </BtnView>
            </Overlay>
        </Project>
        <Modal gif = {gif} setToggle = {setToggle} demo = {demo} code = {code} technology = {technology} name={name} summary ={summary} toggle = {toggle}/>
    </div>
  )
}

export default ProjectBox