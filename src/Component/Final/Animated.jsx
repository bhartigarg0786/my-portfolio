import React from 'react';
import AnimatedList from '@/components/AnimatedList';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJsSquare, FaPhp } from 'react-icons/fa';
import { SiVite, SiRedux, SiMysql, SiWordpress, SiAxios, SiJquery, SiBootstrap, SiTailwindcss, SiPhp } 
from 'react-icons/si';
import { AiOutlineApi } from "react-icons/ai";

// Add new skills
const items = [
  {
    name: 'React',
    icon: <FaReact className="text-[#61DBFB]" />,
    description: 'Building interactive UIs and dynamic web apps.',
    progress: 90,
  },
  {
    name: 'Vite',
    icon: <SiVite className="text-[#646CFF]" />,
    description: 'A lightning-fast build tool for modern web development.',
    progress: 85,
  },
  {
    name: 'Redux',
    icon: <SiRedux className="text-[#764ABC]" />,
    description: 'State management for JavaScript applications.',
    progress: 80,
  },
  {
    name: 'JavaScript (ES6+)',
    icon: <FaJsSquare className="text-[#F7DF1E]" />,
    description: 'Modern JavaScript features for building dynamic applications.',
    progress: 95,
  },
  {
    name: 'HTML5',
    icon: <FaHtml5 className="text-[#E34F26]" />,
    description: 'Markup language for creating structured web pages.',
    progress: 95,
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt className="text-[#2965f1]" />,
    description: 'Styling the web with custom layouts and beautiful designs.',
    progress: 85,
  },
  {
    name: 'PHP',
    icon: <FaPhp className="text-[#8993be]" />,
    description: 'Server-side language for building dynamic web pages.',
    progress: 70,
  },
  {
    name: 'MySQL',
    icon: <SiMysql className="text-[#00618a]" />,
    description: 'Relational database management system.',
    progress: 75,
  },
  {
    name: 'WordPress',
    icon: <SiWordpress className="text-[#21759B]" />,
    description: 'Content management system for websites and blogs.',
    progress: 70,
  },
  {
    name: 'Axios',
    icon: <SiAxios className="text-[#5A29E6]" />,
    description: 'Promise-based HTTP client for making requests.',
    progress: 85,
  },
  // New skills
  {
    name: 'jQuery',
    icon: <SiJquery className="text-[#0769ad]" />,
    description: 'A fast, small, and feature-rich JavaScript library.',
    progress: 80,
  },
  {
    name: 'Bootstrap 5',
    icon: <SiBootstrap className="text-[#7952b3]" />,
    description: 'CSS framework for developing responsive and mobile-first websites.',
    progress: 75,
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-[#38BDF8]" />,
    description: 'Utility-first CSS framework for rapid UI development.',
    progress: 85,
  },
  {
    name: 'RESTful API',
    icon: <AiOutlineApi className="text-[#FF4081]" />,
    description: 'Designing and consuming RESTful APIs for seamless integration.',
    progress: 80,
  },
];

function Aanim() {
  const handleItemSelect = (item, index) => {
    console.log(`Skill selected: ${item.name} at index ${index}`);
  };

  return (
    <div className="App">
    
      <AnimatedList
        items={items}
        onItemSelect={handleItemSelect}
        showGradients={true}
        enableArrowNavigation={true}
        displayScrollbar={true}
      />
    </div>
  );
}

export default Aanim;
