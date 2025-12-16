import React from 'react';
import { Home, FolderOpen, Mail, Linkedin } from 'lucide-react';

export default function SimpleDock() {
  const items = [
    { 
      icon: <Home size={20} />, 
      label: 'Home', 
      onClick: () => window.scrollTo({top: 0, behavior: 'smooth'}) 
    },
    { 
      icon: <FolderOpen size={20} />, 
      label: 'Resume', 
      onClick: () => window.open('/Bharti_Garg_react_.pdf', '_blank')
    },
    { 
      icon: <Mail size={20} />, 
      label: 'Mail', 
      onClick: () => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=bhartigarg07092000@gmail.com', '_blank')

    },
    { 
      icon: <Linkedin size={20} />, 
      label: 'LinkedIn', 
      onClick: () => window.open('https://www.linkedin.com/in/bharti-garg-bg/', '_blank') 
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black/80 backdrop-blur-md border border-gray-700 rounded-2xl p-3 shadow-xl">
        <div className="flex items-center gap-4">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              title={item.label}
              className="group relative flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all duration-300 hover:scale-110"
            >
              <div className="text-white group-hover:text-blue-400 transition-colors duration-200">
                {item.icon}
              </div>
              
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {item.label}
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Demo background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900"></div>
    </div>
  );
}


