import SpotlightCard from '@/components/SpotlightCard'
  import { FaBriefcase } from 'react-icons/fa'; // Example: Importing a briefcase icon from Font Awesome

import React from 'react'
import { FaIcons } from 'react-icons/fa'

const Educations = () => {
  return (
    <div>
      {/* <SpotlightCard className="custom-spotlight-card p-6 rounded-xl shadow-lg bg-[#1F1F1F] text-white" spotlightColor="rgba(0, 229, 255, 0.2)">
  <div className="space-y-3">
    <h2 className="text-2xl font-semibold text-[#00e5ff]">Education</h2>

    <div>
      <h3 className="text-lg font-bold text-white">B.Tech in Computer Science Engineering</h3>
      <p className="text-sm text-gray-300">Graduated: <span className="font-medium text-white">2022</span></p>
    </div>

    <div>
      <p className="text-sm text-gray-300">
        <span className="font-medium text-white">Modi Institute of Technology College</span>, Kota, Rajasthan
      </p>
      <p className="text-sm text-gray-300">
        CGPA: <span className="font-medium text-white">8.7 / 10</span>
      </p>
    </div>
  </div>
</SpotlightCard> */}


      <SpotlightCard
        className="custom-spotlight-card w-full bg-[#060010] text-white p-6 rounded-xl shadow-lg"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <div className="space-y-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl border border-blue-500/30">
              <div className="text-2xl"><FaBriefcase/></div>
            </div>
          </div>

          <h3 className="text-xl font-semibold lg:text-4xl font-bold text-blue-400 leading-tight text-center">Experience</h3>
           <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mt-3 rounded-full"></div>
          <div>
            <h4 className="text-lg font-bold text-white">Web Developer</h4>
            <p className="text-sm text-gray-400">July 2023 – June 2025</p>
            <p className="text-sm text-gray-400">WeConnect Soft Solutions</p>
            <p className="text-sm text-gray-400 italic">Tools Used: JavaScript, PHP, MySQL, CSS, Bootstrap, AJAX</p>
          </div>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            <li>
              Developed and deployed 15+ responsive web applications using JavaScript, PHP, and MySQL—built advanced
              search system with 8+ filter combinations that reduced user search time by 40%.
            </li>
            <li>
              Implemented secure authentication systems and database optimization using prepared statements and password
              hashing, achieving zero security breaches across all client projects.
            </li>
            <li>
              Collaborated with design teams to create mobile-first UI components using CSS, Bootstrap, and AJAX—
              delivered seamless user experiences across 50+ websites with 99% uptime.
            </li>
            <li>
              Maintained and optimized legacy codebases, improving site performance by 35% and successfully migrated 10+
              client websites to modern frameworks.
            </li>
          </ul>
        </div>
      </SpotlightCard>


    </div>
  )
}

export default Educations
