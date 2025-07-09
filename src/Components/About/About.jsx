import React from 'react'
import AboutImg from '../../assets/7358653-removebg-preview.png'
import {IoArrowForward} from "react-icons/io5"

function About() {
  return (
    <div id="About" className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black 
    shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
        <div>
            <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
            <div className='md:flex flex-wrap flex-cool md:flex-row items-center'>
                <img className='md:h-80' src={AboutImg} alt="About img" />
                <ul>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className="mt-1" />
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal '>FrontEnd Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>
                              As a Front-End Developer, I design and implement the 
                              user interface of web applications using technologies 
                              like JavaScript (ES6+), React.js, HTML5, and CSS3. I 
                              build responsive and reusable UI components that ensure 
                              seamless user experiences across devices. My responsibilities
                               include translating design mockups into interactive web pages, 
                               managing application state with tools like React hooks, optimizing
                                performance for fast loading and smooth interactions, and 
                                collaborating closely with backend developers and UX/UI designers 
                                to integrate APIs and maintain visual consistency. Additionally, 
                                I perform cross-browser testing, debug UI issues, and continuously 
                                improve accessibility and usability standards to deliver high-quality,
                                 user-centric applications.


                            </p>
                        </span>
                    </div>
                    {/* <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className="mt-1" />
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal '>FrontEnd Developer</h1>
                            <p className='text-sm md:text-md leading-tight'>
                                Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Perspiciatis aut, eos
                                 iure quisquam a recusandae voluptatibus
                                  consecteturporro ut accusantium est at 
                                  quae dolores inventore iusto perferendis
                                   repellat sit! Hic!
                            </p>
                        </span>
                    </div> */}
                </ul>
            </div>
        </div>
    </div>
    
  )
}

export default About