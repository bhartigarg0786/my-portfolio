
import React from "react";

import { useForm } from "@formspree/react";
import { ValidationError } from "@formspree/react";

export const Contact = () => {

  const [state, handleSubmit] = useForm("mkgqwngz");

//   {state.succeeded && (
//   <div className="text-center p-3 bg-green-50 border border-green-200 rounded-md mt-4">
//     <p className="text-green-800 text-sm">✅ Message sent successfully!</p>
//   </div>
// )}
  return (
    <section className="py-20 text-gray-100" id="contact">
      <div className="container mx-auto px-4 max-w-4xl">

        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 text-sm  text-blue-400 rounded mb-4">
            ./contact
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Let's Build Something
            <span className="text-blue-400 block">Together</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-200">Get in touch</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Immediately available for new projects and opportunities. 
                Ready to start right away and bring your ideas to life.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 ">LOCATION</p>
                  <p className="text-gray-200">Kota, Rajasthan, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 ">PHONE</p>
                  <p className="text-gray-200">(+91)80586-28785</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 ">EMAIL</p>
                  <p className="text-gray-200">bhartigarg07092000@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-gray-800">
              <p className="text-sm text-gray-400  mb-4">CONNECT</p>
              <div className="flex space-x-4">
              <div className="flex space-x-4">
               <a href="mailto:bhartigarg07092000@gmail.com" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors group">
    <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  </a>
  
 
  
  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/bharti-garg-bg/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors group">
    <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  </a>
  
  {/* Phone */}
  <a href="tel:+918058628785" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors group">
    <svg className="w-5 h-5 text-gray-400 group-hover:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  </a>
              </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6">
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-gray-200 mb-2">Send a message</h3>
    <p className="text-sm text-gray-400">Quick response guaranteed</p>
  </div>

  <div className="grid md:grid-cols-2 gap-4">
    <ContactInputBox
      type="text"
      name="name"
      placeholder="Name"
    />
    <ContactInputBox
      type="email"
      name="email"
      placeholder="Email"
    />
  </div>
  <ValidationError field="email" prefix="Email" errors={state.errors} />


  <ContactInputBox
    type="text"
    name="subject"
    placeholder="Subject"
  />

  <ContactTextArea
    rows="4"
    placeholder="Tell me about your project..."
    name="message"
    defaultValue=""
  />
   <ValidationError field="messagr" prefix="Messagr" errors={state.errors} />


  <button
    type="submit" disabled={state.submitting}
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
  >
    <span>Send Message</span>
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
      />
    </svg>
  </button>

   {state.succeeded && (
      <div className="mt-4 p-4 bg-green-100 border border-green-200 rounded-lg text-center">
        <p className="text-green-800 text-sm">✅ Thanks for joining! We'll get back to you soon.</p>
      </div>
    )}
</form>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400  text-sm">
            Immediately available • Ready to start • Quick response within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

// export default Contact;

const ContactTextArea = ({ rows, placeholder, name, defaultValue }) => {
  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      name={name}
      className="w-full resize-none rounded-lg border border-gray-600 bg-gray-700/50 px-4 py-3 text-gray-100 placeholder-gray-400 focus:border-blue-400 focus:bg-gray-700 focus:outline-none transition-all duration-200"
      defaultValue={defaultValue}
      required
    />
  );
};

const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="w-full rounded-lg border border-gray-600 bg-gray-700/50 px-4 py-3 text-gray-100 placeholder-gray-400 focus:border-blue-400 focus:bg-gray-700 focus:outline-none transition-all duration-200"
      required
    />
  );
};