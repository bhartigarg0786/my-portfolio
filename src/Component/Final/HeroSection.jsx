import React, { useState, useEffect } from 'react';

const TextType = ({ text, typingSpeed, pauseDuration, showCursor, cursorCharacter, initialDelay, className }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [started, setStarted] = useState(!initialDelay);

  useEffect(() => {
    if (initialDelay && !started) {
      const timer = setTimeout(() => setStarted(true), initialDelay);
      return () => clearTimeout(timer);
    }
  }, [initialDelay, started]);

  useEffect(() => {
    if (!started || !text.length) return;

    const currentText = text[currentTextIndex];
    
    if (currentCharIndex < currentText.length) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setDisplayText(currentText.slice(0, currentCharIndex + 1));
        setCurrentCharIndex(prev => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
      if (currentTextIndex < text.length - 1) {
        const timer = setTimeout(() => {
          setCurrentTextIndex(prev => prev + 1);
          setCurrentCharIndex(0);
          setDisplayText('');
        }, pauseDuration);
        return () => clearTimeout(timer);
      }
    }
  }, [currentCharIndex, currentTextIndex, text, typingSpeed, pauseDuration, started]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (isTyping || currentTextIndex === text.length - 1) && (
        <span className="animate-pulse">{cursorCharacter || '|'}</span>
      )}
    </span>
  );
};

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-[#060010] relative overflow-hidden flex items-center m-20" id="home">
      {/* Background Elements */} 
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[#060010]"></div>
        
        {/* Floating Code Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <div className="text-blue-400  text-sm">&lt;div&gt;</div>
        </div>
        <div className="absolute top-40 right-20 opacity-20">
          <div className="text-emerald-400  text-sm">const dev = true;</div>
        </div>
        <div className="absolute bottom-32 left-16 opacity-20">
          <div className="text-purple-400  text-sm">&lt;/html&gt;</div>
        </div>
        <div className="absolute bottom-20 right-32 opacity-20">
          <div className="text-blue-400  text-sm">npm run build</div>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-16 w-72 h-72 bg-[#060010] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-16 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Status Badge */}
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-400  text-sm">Available for work</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <div className="text-gray-400 text-sm">
                <span className="text-blue-400">01.</span> Introduction
              </div>
              
              <div className="space-y-2">
                <TextType 
                  className="block text-4xl lg:text-6xl font-bold text-white leading-tight"
                  text={["Hello, I'm Bharti Garg"]}
                  typingSpeed={75}
                  pauseDuration={1050}
                />
                
                <TextType 
                  className="block text-2xl lg:text-4xl font-bold text-blue-400 leading-tight"
                  text={["Web Developer"]}
                  typingSpeed={75}
                  pauseDuration={1050}
                  showCursor={true}
                  cursorCharacter="|"
                  initialDelay={1500}
                />
              </div>
            </div>

            {/* Description */}
            <div className="max-w-xl">
              <TextType 
                className="text-sm text-gray-300 leading-relaxed"
                text={["Experienced Web Developer with 2+ years of full-stack development using JavaScript, PHP, and MySQL successfully delivering 15+ responsive web applications with optimized performance. Currently expanding expertise into modern React.js ecosystem including Vite, Tailwind CSS, and component-based architecture through hands-on project development. Seeking React.js Developer position to transition frontend specialization and contribute to innovative web solutions using modern JavaScript frameworks."]}
                typingSpeed={60}
                pauseDuration={1500}
                showCursor={true}
                initialDelay={3000}
                cursorCharacter="|"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group bg-[#060010] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                <span>View My Work</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
               <button
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="group border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span>Let's Talk</span>
      </button>
            </div>

            {/* Quick Stats */}
            <div className="pt-8 border-t border-gray-800">
              <div>
                <div className="text-2xl font-bold text-white">2+</div>
                <div className="text-gray-400 text-sm">YEARS EXPERIENCE</div>
              </div>
            </div>
          </div>

          {/* Right Content - Code Window */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Terminal Window */}
              <div className="bg-gray-800 rounded-lg border border-gray-700 shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-gray-400 text-sm ">bharti-dev.js</div>
                  <div className="w-8"></div>
                </div>
                
                {/* Code Content */}
                <div className="p-6  text-sm space-y-2">
                  <div className="text-gray-500">// Welcome to my portfolio</div>
                  <div><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {`{`}</div>
                  <div className="ml-4 text-emerald-400">name: <span className="text-yellow-300">'Bharti'</span>,</div>
                  <div className="ml-4 text-emerald-400">role: <span className="text-yellow-300">'Web Developer'</span>,</div>
                  <div className="ml-4 text-emerald-400">location: <span className="text-yellow-300">'Kota, Rajasthan'</span>,</div>
                  <div className="ml-4 text-emerald-400">skills: [</div>
                  <div className="ml-8 text-yellow-300">'React', 'Javascript',</div>
                  <div className="ml-8 text-yellow-300">'Redux', 'CSS'</div>
                  <div className="ml-4 text-emerald-400">],</div>
                  <div className="ml-4 text-emerald-400">available: <span className="text-green-400">true</span></div>
                  <div>{`};`}</div>
                  <div className="pt-2">
                    <span className="text-blue-400">console</span>.<span className="text-yellow-300">log</span>(<span className="text-yellow-300">'Let\'s build something amazing!'</span>);
                  </div>
                  <div className="text-gray-600 animate-pulse">▊</div>
                </div>
              </div>
              
              {/* Floating Icons */}
              <div className="absolute -top-6 -right-6 group relative w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 ..."/>
  </svg>
  <div className="absolute top-full mt-1 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition">
    2 yrs experience
  </div>
</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
          <span className="text-gray-400 text-sm  rotate-90">SCROLL</span>
          <div className="w-px h-8 bg-[#060010]"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;