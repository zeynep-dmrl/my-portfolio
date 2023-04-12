import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../projects'

const Projects = () => {
    return (
        <div id='projects' className='flex flex-col  justify-center mt-40 mb-32'>
            <div className='text-2xl text-white font-semibold text-left ml-7'>Projects</div>
            <div className='flex flex-col items-center justify-center space-y-4'>
                {
                    projects.map((item) => (
                        <a className='w-full md:w-1/2 border-2 border-white text-base p-3 flex flex-col md:flex-row justify-between items-center md:h-16 font-semibold rounded-md cursor-pointer hover:scale-105'
                            key={item.id}
                            href={item.github}
                            target="_blank">
                            <div>{item.name}</div>
                            <div className='flex items-center justify-evenly flex-wrap'>
                                {
                                    item.tags.map((tag, index) => (
                                        <div className={`tech-stack p-1 text-sm text-white ${tag.color} mr-1 rounded`} key={index}>{tag.tag}</div>
                                    ))
                                }
                            </div>
                        </a>
                    ))
                }

            </div>
        </div>
    )
}

export default Projects