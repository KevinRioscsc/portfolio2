import React from 'react'
import ProjectBox from '../ProjectBox'
import { projects } from '../../ProjectsData'


const Projects = () => {
  return (
    <div>
        <div className="main proMain">
            <h2 className='second-header small '>Portfolio</h2>
            <sub className='secondary-sub small2'>These are my favorite projects I've worked on for the past year. Have a look around.</sub>
            <div className="space">
               
                <div className="flex">
                {
                    projects.map(item => {
                        return <ProjectBox gif = {item.gif} demo = {item.projectLive} code ={item.projectSource} technology = {item.technologies} name= {item.projectName} summary = {item.projectDesc} img = {item.projectImg}/>
                    })
                }
                </div>
               
            </div>
        </div>
        
        
    </div>
  )
}

export default Projects