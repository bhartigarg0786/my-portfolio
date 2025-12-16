import React, { useState, useEffect } from "react";
import CardSwap, { Card } from "@/components/CardSwap";
import SpotlightCard from "@/components/SpotlightCard";

const CardSw = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Your existing card components as reusable elements
  const Card1 = () => (
    <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/90 border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 ring-1 ring-slate-700 hover:ring-blue-400">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-purple-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-blue-800 to-purple-800 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-2">🎓</div>
            <div className="text-lg font-semibold text-blue-100">EduPortal</div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="px-2 py-1 text-xs font-medium bg-blue-500/90 text-white rounded-full border border-blue-400/30">
            React.js
          </span>
          <span className="px-2 py-1 text-xs font-medium bg-cyan-500/90 text-white rounded-full border border-cyan-400/30">
            Tailwind
          </span>
          <span className="px-2 py-1 text-xs font-medium bg-green-500/90 text-white rounded-full border border-green-400/30">
            Clerk
          </span>
        </div>
      </div>
      <div className="relative p-6 space-y-4 bg-slate-900/96 backdrop-blur-sm">
        <h3 className="text-2xl font-bold text-slate-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-500">
          EduPortal – LMS
        </h3>
        <p className="text-slate-200 leading-relaxed">
          Learning Management System with secure authentication, course
          discovery, and testimonials. Responsive design for optimal user
          experience.
        </p>
        <div className="flex items-center space-x-2 p-3 bg-gradient-to-r from-blue-500/25 to-cyan-500/25 border border-blue-400/40 rounded-lg backdrop-blur-sm">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-cyan-100">
            Multi-category Course Platform
          </span>
        </div>
      </div>
    </div>
  );

  const Card2 = () => (
    <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/90 border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 ring-1 ring-slate-700 hover:ring-amber-400">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/15 via-transparent to-yellow-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-amber-800 to-yellow-700 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-2">✈️</div>
            <div className="text-lg font-semibold text-amber-100">
              Flight Booking
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="px-2 py-1 text-xs font-medium bg-amber-500/90 text-white rounded-full border border-amber-400/30">
            PHP
          </span>
          <span className="px-2 py-1 text-xs font-medium bg-yellow-500/90 text-black rounded-full border border-yellow-400/30">
            MySQL
          </span>
          <span className="px-2 py-1 text-xs font-medium bg-orange-500/90 text-white rounded-full border border-orange-400/30">
            Amadeus API
          </span>
        </div>
      </div>
      <div className="relative p-6 space-y-4 bg-slate-900/96 backdrop-blur-sm">
        <h3 className="text-2xl font-bold text-slate-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-300 group-hover:to-yellow-300 group-hover:bg-clip-text transition-all duration-500">
          Flight Booking Platform
        </h3>
        <p className="text-slate-200 leading-relaxed">
          Real-time flight search with Amadeus API integration. Secure booking
          system with payment processing and user history management.
        </p>
        <div className="flex items-center space-x-2 p-3 bg-gradient-to-r from-amber-500/25 to-yellow-500/25 border border-amber-400/40 rounded-lg backdrop-blur-sm">
          <div className="w-2 h-2 bg-gradient-to-r from-amber-300 to-yellow-300 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-amber-100">
            100+ Concurrent Searches
          </span>
        </div>
      </div>
    </div>
  );

const Card3 = () => (
  <a 
    href="https://salessync-admin.netlify.app/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="block"
  >
    <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/90 border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-fuchsia-500/20 transition-all duration-500 ring-1 ring-slate-700 hover:ring-fuchsia-400">

      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/15 via-transparent to-purple-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-fuchsia-900 to-purple-900 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-2">📊</div>
            <div className="text-lg font-semibold text-fuchsia-100">
              E-commerce Admin Dashboard: Manage Your Store
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="px-2 py-1 text-xs font-medium bg-fuchsia-500/90 text-white rounded-full border border-fuchsia-400/30">React JS</span>
          <span className="px-2 py-1 text-xs font-medium bg-purple-500/90 text-white rounded-full border border-purple-400/30">Tailwind</span>
        </div>
      </div>

      <div className="relative p-6 space-y-4 bg-slate-900/96 backdrop-blur-sm">
        <h3 className="text-2xl font-bold text-slate-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-fuchsia-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all duration-500">
          Admin Dashboard: Manage Your Store
        </h3>

        <p className="text-slate-200 leading-relaxed">
          Developed a responsive and scalable admin dashboard for managing complete e-commerce store operations using React and Tailwind CSS.
        </p>

        <div className="flex items-center space-x-2 p-3 bg-gradient-to-r from-fuchsia-500/25 to-purple-500/25 border border-fuchsia-400/40 rounded-lg backdrop-blur-sm">
          <div className="w-2 h-2 bg-gradient-to-r from-fuchsia-300 to-pink-300 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-fuchsia-100">
            Implemented features: Orders, Products, Categories, Customers — enabling streamlined store administration
          </span>
        </div>
      </div>

    </div>
  </a>
);


  return (
    <SpotlightCard
      className="custom-spotlight-card w-full bg-[#1F1F1F] text-white p-6 rounded-xl shadow-lg"
      spotlightColor="rgba(0, 229, 255, 0.2)"
    >
      <div
        className="min-h-screen text-white p-6 flex items-center justify-center"
        id="projects"
      >
        <div className="w-full max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl border border-blue-500/30 mb-6">
              <div className="text-2xl">💼</div>
            </div>
            <h3 className="text-xl font-semibold lg:text-4xl font-bold text-blue-400 leading-tight text-center">
              Featured Projects
            </h3>
            <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
              Explore my latest work showcasing modern web development,
              innovative solutions, and cutting-edge technologies
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Cards Container - Responsive */}
          <div className="flex justify-center items-center min-h-[400px] md:min-h-[600px] w-full px-4">
            {isMobile ? (
              // Mobile: Simple vertical stack
              <div className="w-full max-w-sm mx-auto space-y-6">
                <Card1 />
                <Card2 />
              </div>
            ) : (
              // Desktop: 3D CardSwap
              <div className="flex justify-center w-full">
                <CardSwap
                  cardDistance={60}
                  verticalDistance={70}
                  delay={5000}
                  pauseOnHover={false}
                >
                  <Card>
                    <Card1 />
                  </Card>
                  <Card>
                    <Card2 />
                  </Card>
                  <Card>
                    <Card3 />
                  </Card>
                </CardSwap>
              </div>
            )}
          </div>

          {/* Bottom Decorative Elements */}
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};

export default CardSw;
