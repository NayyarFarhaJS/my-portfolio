// src/components/Projects/Projects.jsx
import React from 'react'
import ProjectCard from './ProjectCard'

// Import images
import abercrombieImg from '../../assets/Abercrombie.jpg'
import mcOptoolsImg from '../../assets/Morgan.jpg'
import merchantImg from '../../assets/Mastercard_logo.webp'

function Projects() {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl font-bold'>Projects</h1>

      <div className='py-12 px-8 flex flex-wrap gap-5 justify-center'>
        <ProjectCard 
          title="Abercrombie & Fitch" 
          main="I contributed to the frontend development 
          of the Abercrombie & Fitch e-commerce platform
           as part of the Customer Team, focusing on the
            Order Page. Using JavaScript (ES6) and React.js,
             I developed responsive and reusable UI components,
              managed dynamic state with React hooks, and improved user
               interactions related to order history, status tracking, 
               and details. I worked closely with backend and design 
               teams to ensure a consistent, mobile-first experience
                aligned with the overall brand." 
          img={abercrombieImg}
        />
        <ProjectCard 
          title="Mc Optools" 
          main="I worked on an internal project called MC Optools
           at Morgan Stanley, which visualizes mainframe job statuses
            using donut charts. Users can select a date and time range
             to view job outcomes, with green indicating success, yellow 
             for pending, and red for errors. The project improves 
             job monitoring by providing clear, real-time visual feedback.
              I also implemented CI/CD pipelines to automate the build,
               deployment, and testing processes, ensuring faster and
                more reliable delivery."
          img={mcOptoolsImg}
        />
        <ProjectCard 
          title="Merchant Onboarding" 
          main="The project is a Management Onboarding and Risk 
          Assessment platform. It’s a web application that helps 
          Mastercard quickly and safely register new businesses 
          (merchants), check if they meet all rules, and look 
          for any signs of fraud. The platform automates compliance
           checks and risk evaluations, enabling faster decision-making
            while ensuring security and regulatory adherence."
          img={merchantImg}
        />
      </div>
    </div>
  )
}

export default Projects
