import React from 'react'
import { projects } from '../constrants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Link } from 'react-router-dom';
import linkIcon from '../assets/projects/link.svg'
import Social from '../components/Social';

function Projects() {
  return (
    <section className='w-full h-full max-container'>
      <h1 className='head-text'>My <span className='blue-gradient_text font-semibold'>Projects</span></h1>

      <div className='mt-5 flex gap-3 text-slate-500 flex-col font-medium'>
        <p>Here are some examples of web applications I have built, demonstrating my skills in creating user-friendly, functional, and interactive solutions using modern tools and technologies</p>
      </div>

      <div className='mt-12'>
        <VerticalTimeline lineColor='#60a5fa'>
          {projects.map((project, index) => (
            <VerticalTimelineElement
              key={index}
              date={<div className={`text-center md:mb-10 ${index % 2 == 0 ? "md:mr-[-50px] md:ml-[20px]" : "md:ml-[-50px] md:mr-[20px]"}`}>
                <span className='blue-gradient_text font-bold'>{project.name}</span>
                <br />
                {project.description}
                <br />
                <div className='mt-2 rounded-full flex flex-wrap '>
                  {project.tech.map((e,index) =>
                    <span className='shadow-md mr-2 p-2 mb-3 bg-slate-300 text-xs md:text-base' key={index}>
                      {e}
                    </span>
                  )}
                </div>
              </div>}

              icon={
                <div>
                  <img src={project.iconUrl}
                    className='rounded-full w-16'
                  />
                </div>
              }
            >

              <div className="flex items-center justify-center bg-gray-100">
                <div className="relative group">

                  <img src={project.image} className={`object-contain scale-[1.15] md:scale-150 ${index % 2 == 0 ? "lg:ml-[-60px]" : "lg:ml-[60px]"} md:hover:scale-[1.6] hover:scale-[1.2]`} />

                  {/* Tooltip */}
                  <div className={`absolute top-[-40px] left-1/2 -translate-x-1/2 md:top-[-70px] p-2 px-4 py-1 text-white text-sm rounded opacity-80 lg:opacity-0 md:group-hover:opacity-100 transition-opacity ${index % 2 == 0 ? "md:left-[80px]" : "md:left-[200px]"}`}
                    style={{ backgroundColor: project.bgColor }}
                  >
                    <Link
                      to={project.link}
                      target='_blank'
                      className='flex gap-2'
                    >
                      {project.name}
                      <img src={linkIcon} alt="link" width="15px" />
                    </Link>

                  </div>
                </div>
              </div>


            </VerticalTimelineElement>
          ))}

        </VerticalTimeline>

      </div>

      <div className='mt-16 cta'>
        <p className='cta-text'>Have a project in mind? <br className='sm:block hidden' />
          Let's build something together! </p>
        <Link to='/contact' className='btn'>
          Contact Me
        </Link>
      </div>

    </section>
  )
}

export default Projects
