import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from './Navbar'
import Aanim from "./Animated";
import Educations from "./Educations";
import SpotlightCard from "@/components/SpotlightCard";
import CardSw from "./CardSw";
import SplashCursor from "@/components/SplashCursor";
import { Contact } from "./ContactForm";
import HeroSection from "./HeroSection";



function Home({ onComplete }) {

  useEffect(() => {
    // Ensure body allows scrolling
    document.body.style.overflow = 'visible';
    document.documentElement.style.overflow = 'visible';

    return () => {
      // Cleanup
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (

    <motion.div
      className="flex flex-col items-center justify-start w-full min-h-screen bg-[#060010] text-white overflow-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}>

      <Navbar />
      <SplashCursor />
      <HeroSection />

      <div className="flex flex-col lg:flex-row justify-center items-start gap-12 px-6 py-16 max-w-7xl    mx-auto">
        {/* Left Column: Animated Skills */}
        <div className="flex-1">
          <SpotlightCard
            className="custom-spotlight-card w-full bg-[#060010] text-white p-6 rounded-xl shadow-lg"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="space-y-4">
              <div className="text-center" id="Skill">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl border border-blue-500/30">
                  <div className="text-2xl">⚙️</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold lg:text-4xl font-bold text-blue-400 leading-tight text-center">Technical Skills</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mt-3 rounded-full"></div>
              <Aanim />
            </div>
          </SpotlightCard>
        </div>

        {/* Right Column: Experience Section */}
        <div className="flex-1">
          {/* Section Title & Summary */}
          <div className="text-center" id="Experince">
          </div>
          {/* Experience Card */}
          <Educations />
        </div>
      </div>
      <CardSw />
      <Contact />
    </motion.div>
  );
}

export default Home;


//
// /#454444