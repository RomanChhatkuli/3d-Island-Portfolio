import React from 'react'
import { projects } from '../constrants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <section className='w-full h-full max-container'>
      <h1 className='head-text'>My <span className='blue-gradient_text font-semibold'>Projects</span></h1>

      <div className='mt-5 flex gap-3 text-slate-500 flex-col font-medium'>
        <p>Here are some examples of web applications I have built, demonstrating my skills in creating user-friendly, functional, and interactive solutions using modern tools and technologies</p>
      </div>

      <div className='mt-12'>
        <VerticalTimeline lineColor='skyblue'>
          {projects.map((project, index) => (
            <VerticalTimelineElement
              date={<div className='text-center'>
                <span className='blue-gradient_text font-semibold'>{project.name}</span>
                <br />
                {project.description}
              </div>}
              key={index}
              icon={
                <div>
                  <img src={project.iconUrl}
                    className='rounded-full'
                  />
                </div>
              }

            >

              <div className="flex items-center justify-center bg-gray-100">
                <div className="relative group">

                  <img src={project.image} className='object-contain w-full h-full' />

                  {/* Tooltip */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-[-60px] px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link
                      to={project.link}
                      target='_blank'
                    >{project.name}
                    </Link>
                  </div>
                </div>
              </div>


            </VerticalTimelineElement>
          ))}

        </VerticalTimeline>

      </div>



    </section>
  )
}

export default Projects

{/* <div className='flex flex-col py-10'>
          <div className='flex flex-wrap mt-8 sm:gap-12 gap-4'>
  
          </div>
        </div> */}