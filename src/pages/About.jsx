import React from 'react'
import { skills } from '../constrants'
import { Link } from 'react-router-dom'

function About() {
  return (
    <section className='w-full h-full max-container'>
      <h1 className='head-text'>Hello, I'm <span className='blue-gradient_text font-semibold'>Roman</span></h1>

      <div className='mt-5 flex gap-3 text-slate-500 flex-col font-medium'>
        <p>Full-stack web developer based in Nepal, specializing in building dynamic and interactive web applications.</p>
      </div>

      <div className='flex flex-col py-10'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='flex flex-wrap mt-8 sm:gap-12 gap-4'>
          {skills.map((skill, index) =>
          (
            <div className='block-container w-24 h-20' key={index}>
              <div className='btn-front flex justify-center items-center flex-col gap-2 rounded-xl'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
                {skill.name}
              </div>
            </div>
          )
          )}
        </div>
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

export default About